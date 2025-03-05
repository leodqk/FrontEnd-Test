import React, { useState, useEffect } from "react";
import { fetchRandomDogImages } from "../api";

function DogImagesTab() {
  const [quantity, setQuantity] = useState(10);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const imagesPerPage = 12;

  // Calculate total pages when images change
  useEffect(() => {
    setTotalPages(Math.ceil(images.length / imagesPerPage));
    setCurrentPage(1); // Reset to first page when new images are loaded
  }, [images]);

  // Get images for current page
  const getCurrentImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return images.slice(startIndex, endIndex);
  };

  // Fetch dog images from API
  const handleFetchDogImages = async () => {
    if (quantity < 1) {
      setError("Please enter a quantity greater than 0");
      return;
    }

    if (quantity > 100) {
      setError(
        "For performance reasons, please enter a quantity up to 100 images"
      );
      return;
    }

    setLoading(true);
    setError(null);
    setImages([]);

    try {
      // Use the API service to fetch images
      const dogImages = await fetchRandomDogImages(quantity);

      setImages(dogImages);

      if (dogImages.length === 0) {
        setError("Could not load images. Please try again later.");
      }
    } catch (err) {
      setError(
        "An error occurred while loading images. Please try again later."
      );
      console.error("Error fetching dog images:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setQuantity(10);
    setImages([]);
    setError(null);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="tab-pane" id="dog-images">
      <div className="description">
        <h2>Random Dog Images</h2>
        <p>
          Display random dog images from the Dog CEO API. You can request up to
          100 images.
        </p>
      </div>

      <div className="interactive-section">
        <div className="input-group">
          <label htmlFor="quantity-input">
            Enter number of images (1-100):
          </label>
          <input
            type="number"
            id="quantity-input"
            min="1"
            max="100"
            placeholder="Enter number of images"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 10)}
          />
          <div className="button-group">
            <button
              id="fetch-dogs"
              onClick={handleFetchDogImages}
              disabled={loading}
              className="primary-btn"
            >
              {loading ? "Loading..." : "Load Images"}
            </button>
            <button
              id="reset-dogs"
              onClick={handleReset}
              className="reset-btn"
              disabled={loading}
            >
              Reset
            </button>
          </div>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        <div className="dog-images-container">
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading {quantity} images...</p>
            </div>
          ) : images.length > 0 ? (
            <>
              <div className="image-stats">
                <p>
                  Showing {getCurrentImages().length} of {images.length} images
                </p>
              </div>

              <div className="image-grid">
                {getCurrentImages().map((imageUrl, index) => (
                  <div key={index} className="image-card">
                    <img
                      src={imageUrl}
                      alt={`Random dog ${
                        index + 1 + (currentPage - 1) * imagesPerPage
                      }`}
                      loading="lazy"
                    />
                    <div className="image-number">
                      {index + 1 + (currentPage - 1) * imagesPerPage}
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                  >
                    &laquo; Previous
                  </button>
                  <span className="page-info">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                  >
                    Next &raquo;
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-images">
              <p>
                Enter a quantity and click "Load Images" to see random dog
                images.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DogImagesTab;
