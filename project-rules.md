# project rules lab 5

## chung
- viết component bằng function thôi, ko viết class
- jsx thì dùng className chứ ko phải class
- map list thì key = _id, ko dùng index
- ko để key/secret trong code, để trong .env (client thì VITE_...), nhớ cho .env vào .gitignore
- ko dùng mấy thư viện cũ: MUI v4, react-ticker, firebase v8, styled-components
- nút bấm to tầm 44px trở lên cho dễ bấm

## bài 0 (reducer + context)
- state chung dùng useReducer, ko dùng nhiều useState lung tung
- reducer phải là hàm thuần, ko gọi fetch, ko sửa document trong reducer
- tách 2 context: 1 cái chứa state, 1 cái chứa dispatch
- theme thì set lên document trong useEffect ở Provider
- phân trang tính luôn lúc render (slice), ko dùng useEffect để set lại list
- ko để width cứng 800px, dùng dvh với @container

## bài 1 (reels)
- video dùng object-fit: cover, khung scroll-snap
- dùng IntersectionObserver để play/pause, play() phải có .catch()
- nhớ disconnect observer khi unmount
- backend tăng like bằng $inc, ko đọc ra rồi cộng rồi save
- mongoose dùng async/await, ko dùng callback

## bài 2 (realtime)
- useEffect của pusher chỉ phụ thuộc roomId (với dispatch), ko bỏ messages vào
- cleanup phải unbind, unsubscribe, disconnect
- firebase dùng bản modular (v10)

## bài 3 (webmcp)
- check 'modelContext' in navigator trước khi register
- tool nào sửa dữ liệu thì phải hỏi người dùng (requestUserInteraction) trước
- unmount thì unregisterTool
