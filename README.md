# Ứng Dụng FrontEnd Test

Ứng dụng React hiển thị, kiểm tra và trực quan hóa các bài test

## Mục Lục

- [Tính Năng](#tính-năng)
- [Cài Đặt](#cài-đặt)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Sử Dụng](#sử-dụng)
- [API](#api)
- [Đóng Góp](#đóng-góp)



## Tính Năng

### 1. Tìm Số Bị Thiếu

- Nhập một mảng các số nguyên dương liên tiếp có một số bị thiếu
- Thuật toán sẽ tìm và hiển thị số bị thiếu
- Trực quan hóa mảng và số bị thiếu

### 2. Kiểm Tra Mật Khẩu

- Kiểm tra mật khẩu dựa trên các tiêu chí bảo mật
- Hiển thị trạng thái đáp ứng từng yêu cầu theo thời gian thực
- Các tiêu chí bao gồm: độ dài, chữ hoa, chữ số và ký tự đặc biệt

### 3. Ảnh Chó Ngẫu Nhiên

- Tải và hiển thị ảnh chó ngẫu nhiên từ Dog CEO API
- Hỗ trợ tải nhiều ảnh (lên đến 100 ảnh)
- Phân trang kết quả để dễ dàng duyệt qua các ảnh
- Tối ưu hóa hiệu suất tải ảnh

## Cài Đặt

### Yêu Cầu

- Node.js (phiên bản 14.0.0 trở lên)
- npm hoặc yarn

### Các Bước Cài Đặt

1. Clone repository:
```bash
git clone https://github.com/username/algorithm-validator.git
cd algorithm-validator
```

2. Cài đặt các gói phụ thuộc:
```bash
npm install
# hoặc
yarn install
```

3. Khởi chạy ứng dụng ở môi trường phát triển:
```bash
npm start
# hoặc
yarn start
```

4. Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

## Cấu Trúc Dự Án

```
src/
├── api/                    # Các dịch vụ API
│   ├── index.js            # Export tất cả API
│   └── dogApi.js           # API lấy ảnh chó
├── components/             # Các thành phần React
│   ├── Header.js           # Tiêu đề ứng dụng
│   ├── Footer.js           # Chân trang
│   ├── TabNavigation.js    # Điều hướng tab
│   ├── MissingNumberTab.js # Tab tìm số bị thiếu
│   ├── PasswordValidatorTab.js # Tab kiểm tra mật khẩu
│   ├── DogImagesTab.js     # Tab ảnh chó ngẫu nhiên
│   ├── CodeBlock.js        # Hiển thị mã nguồn
│   └── ResultDisplay.js    # Hiển thị kết quả
├── utils/                  # Tiện ích và hàm helper
│   └── algorithms.js       # Triển khai thuật toán
├── App.js                  # Component chính
├── App.css                 # Styles cho ứng dụng
└── index.js                # Điểm khởi đầu ứng dụng
```

## Sử Dụng

### Tìm Số Bị Thiếu

1. Chọn tab "Tìm Số Bị Thiếu"
2. Nhập một mảng các số nguyên dương cách nhau bởi dấu phẩy (ví dụ: 1,2,3,5)
3. Nhấn nút "Tìm Số Bị Thiếu"
4. Kết quả và trực quan hóa sẽ hiển thị

### Kiểm Tra Mật Khẩu

1. Chọn tab "Kiểm Tra Mật Khẩu"
2. Nhập mật khẩu cần kiểm tra
3. Các yêu cầu sẽ được cập nhật theo thời gian thực
4. Nhấn nút "Kiểm Tra Mật Khẩu" để xem kết quả cuối cùng

### Ảnh Chó Ngẫu Nhiên

1. Chọn tab "Ảnh Chó Ngẫu Nhiên"
2. Nhập số lượng ảnh muốn hiển thị (1-100)
3. Nhấn nút "Tải Ảnh"
4. Sử dụng các nút phân trang để xem tất cả ảnh

## API

Ứng dụng sử dụng [Dog CEO API](https://dog.ceo/dog-api/) để lấy ảnh chó ngẫu nhiên.

Các endpoint sử dụng:
- `https://dog.ceo/api/breeds/image/random` - Lấy một ảnh chó ngẫu nhiên
- `https://dog.ceo/api/breeds/image/random/{count}` - Lấy nhiều ảnh chó ngẫu nhiên



## Liên Hệ

Nếu bạn có bất kỳ câu hỏi nào hoặc muốn báo cáo lỗi, vui lòng mở một issue trên GitHub hoặc liên hệ qua email: leo.dqk@email.com.

## Lời Cảm Ơn

- [Dog CEO API](https://dog.ceo/dog-api/) - Cung cấp API ảnh chó miễn phí
- [React](https://reactjs.org/) - Thư viện JavaScript để xây dựng giao diện người dùng
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Làm nổi bật cú pháp cho các đoạn mã
- [Font Awesome](https://fontawesome.com/) - Thư viện biểu tượng

---

Được phát triển với ❤️ bởi [Dương Quang Khải](https://github.com/leodqk)
