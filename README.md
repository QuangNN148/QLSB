# QLSB

## Frontend qlsb system

Sẽ bổ sung sau

## Nháp

**NNQ**

*Nguyen Nhat Quang*

## Kiến trúc của Git

Git có một kiến trúc phân tán, giúp quản lý phiên bản code hiệu quả, đảm bảo tính nhất quán, đồng bộ và khả năng làm việc offline. Dưới đây là các thành phần chính của kiến trúc Git:

### 1. Repository (Kho lưu trữ)

#### a. Local Repository

Mỗi developer có một bản sao đầy đủ của repository trên máy của mình. Điều này giúp Git có thể hoạt động offline mà không phụ thuộc vào máy chủ trung tâm.

Local repository chứa 3 vùng chính:

- **Working Directory:** Nơi làm việc thực tế với code.
- **Staging Area (Index):** Nơi tạm lưu các thay đổi trước khi commit.
- **Local Repository (.git):** Lưu toàn bộ lịch sử commit và metadata của Git.

#### b. Remote Repository

- Được lưu trên một máy chủ trung tâm (GitHub, GitLab, Bitbucket, hoặc một Git server riêng).
- Dùng để đồng bộ code giữa nhiều developer thông qua `git push` và `git pull`.

### 2. Objects Database (Cơ sở dữ liệu đối tượng)

Git lưu trữ dữ liệu dưới dạng **objects** (đối tượng) thay vì lưu trữ từng file riêng lẻ. Các loại objects quan trọng gồm:
- **Blob (Binary Large Object)**: Lưu trữ nội dung file.
- **Tree**: Lưu trữ cấu trúc thư mục.
- **Commit**: Ghi lại trạng thái của project tại một thời điểm, liên kết với tree.
- **Tag**: Đánh dấu một commit quan trọng (ví dụ: phiên bản release).

Git sử dụng **SHA-1 Hash** để định danh từng object.

## Phân biệt Page Route và App Route
Cách hoạt động:
* Dựa trên thư mục app/ thay vì pages/. Cấu trúc thư mục trong app/ xác định các route (ví dụ: app/about/page.js ánh xạ thành /about).
* Hỗ trợ các tính năng mới như **Layouts** (thông qua layout.js), **Loading UI** (loading.js), **Error Handling** (error.js), và **Route Groups** (dùng () trong tên thư mục để nhóm mà không ảnh hưởng URL).
* Không còn pages/api/ mà thay bằng **Route Handlers** (dùng route.js trong app/ để xử lý API).
- Server-side Rendering (SSR) và Static Site Generation (SSG):
* Tích hợp **React Server Components** (mặc định) để render phía server hiệu quả hơn.
* Dữ liệu được lấy bằng cách sử dụng *async/await* trực tiếp trong component, thay vì các hàm riêng như *getServerSideProps*

1. Page Route
* Ưu điểm:
- Đơn giản, dễ hiểu, đặc biệt với các dự án nhỏ hoặc người mới bắt đầu.
- Tương thích ngược với các dự án cũ.
* Nhược điểm:
- Thiếu sự linh hoạt trong việc quản lý bố cục (layout) chung cho nhiều trang.
- Không tận dụng tối đa các tính năng hiện đại của React như React Server Components.
2. App Route
* Ưu  điểm:
- Linh hoạt hơn với hệ thống layout lồng nhau (nested layouts).
- Tận dụng tối đa các tính năng hiện đại của React, như Server Components, giúp cải thiện hiệu suất.
- Hỗ trợ tốt hơn cho các ứng dụng phức tạp.
* Nhược điểm:
- Phức tạp hơn Page Router, đòi hỏi thời gian làm quen.
- Một số tính năng cũ (như getServerSideProps) không khả dụng, buộc phải chuyển đổi cách viết code.