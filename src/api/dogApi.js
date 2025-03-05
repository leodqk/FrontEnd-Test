/**
 * @param {number} count
 * @returns {Promise<string[]>}
 */
export const fetchRandomDogImages = async (count) => {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breeds/image/random/${count}`
    );
    const data = await response.json();

    if (data.status === "success" && Array.isArray(data.message)) {
      return data.message;
    } else {
      throw new Error("API did not return an array of images");
    }
  } catch (error) {
    console.warn(
      "Could not use multi-image API, falling back to individual requests"
    );

    const imageUrls = [];
    for (let i = 0; i < count; i++) {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        if (data.status === "success") {
          imageUrls.push(data.message);
        }
      } catch (err) {
        console.error("Error fetching individual image:", err);
      }
    }

    return imageUrls;
  }
};
