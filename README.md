# lab 5 web

Lê Nguyên Ngọc - 24521155

## trong repo có gì
- exc0: bài 0.1 với 0.2 (reducer, tách context, phân trang)
- project-rules.md: mấy luật viết code của lab
- TASK_DECOMPOSITION.md: chia việc
- AI_FAILURE_AUDIT.md: chỗ AI viết sai với cách sửa

## chạy thử
```
cd exc0
npm install
npm run dev
```![alt text](image.png)
rồi mở localhost:5173

## bài 0 làm được gì
- state chung dùng useReducer, có 2 context riêng cho state với dispatch
- nút đổi sáng tối, đổi tab reels / chat
- danh sách 15 clip, lọc theo Himass / TanVuu, mỗi trang 6 cái
- lọc với chia trang tính lúc render, ko dùng useEffect
- css dùng @container đổi 1 / 2 / 3 cột, điện thoại 375px ko bị cuộn ngang

## chưa làm
- bài 1, 2, 3 với homework
