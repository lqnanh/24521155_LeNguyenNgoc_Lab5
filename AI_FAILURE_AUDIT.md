# ai failure audit lab 5

## 0.1
- AppProvider.jsx: AI để chung component với 2 hook useAppState, useAppDispatch trong 1 file nên oxlint báo only-export-components, sửa file này thì vite reload cả trang
- Chưa sửa vì chỉ là warning, app vẫn chạy đúng

- EvidenceCard.jsx: AI dùng h3 cho tên clip trong khi trang chỉ có h1, nhảy cấp tiêu đề, lighthouse báo heading-order
- Sửa: đổi h3 thành h2

- EvidenceCard.jsx: alt ảnh lặp lại đúng tên clip đã hiện ngay bên dưới, trình đọc màn hình đọc 2 lần
- Chưa sửa vì lỗi nhẹ, không ảnh hưởng chức năng
