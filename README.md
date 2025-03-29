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

Server-side Rendering (SSR) và Static Site Generation (SSG):
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

## HTML+CSS+JS VS REACT

1. HTML + CSS + JavaScript
Mô tả: Đây là cách tiếp cận truyền thống để xây dựng website, sử dụng ba công nghệ cốt lõi của web:
* HTML: Cung cấp cấu trúc (nội dung) của trang web.
* CSS: Định dạng và trang trí giao diện (kiểu dáng, bố cục).
* JavaScript: Thêm tính tương tác và xử lý logic (thay đổi nội dung động, xử lý sự kiện).

Cách hoạt động:
* Mỗi thành phần hoạt động độc lập: HTML là tĩnh, CSS áp dụng kiểu dáng, và JS thao tác DOM (Document Object Model) để cập nhật giao diện.
* Thường sử dụng vanilla JS hoặc các thư viện như jQuery để đơn giản hóa thao tác DOM.

Ưu điểm:
* Đơn giản: Dễ học, dễ triển khai cho các trang web tĩnh hoặc nhỏ.
* Không cần công cụ bổ sung: Chỉ cần trình duyệt là đủ để phát triển và chạy.
* Kiểm soát chi tiết: Bạn có toàn quyền điều khiển từng phần của mã nguồn.

Nhược điểm:

*Khó bảo trì: Với các ứng dụng lớn, mã JS dễ trở nên lộn xộn (spaghetti code) khi thao tác DOM thủ công.
* Hiệu suất: Cập nhật DOM nhiều lần có thể gây chậm, đặc biệt khi giao diện phức tạp.
* Tái sử dụng kém: Không có cơ chế component hóa, dẫn đến lặp lại mã.

2. React
Mô tả: React là một thư viện JavaScript (do Facebook phát triển) dùng để xây dựng giao diện người dùng (UI), tập trung vào component-based architecture (kiến trúc dựa trên thành phần).

Cách hoạt động:
* Thay vì thao tác trực tiếp DOM, React sử dụng Virtual DOM để tối ưu hóa việc cập nhật giao diện.
* Giao diện được chia thành các component (thành phần) có thể tái sử dụng, kết hợp HTML, CSS và JS trong cùng một tệp (thường dùng JSX).
* Dữ liệu (state) thay đổi sẽ tự động kích hoạt render lại giao diện một cách hiệu quả.

Ưu điểm:

* Component hóa: Dễ tái sử dụng và quản lý mã nguồn, đặc biệt trong các dự án lớn.
* Hiệu suất cao: Virtual DOM giảm thiểu thao tác trực tiếp trên DOM thật, tăng tốc độ render.
* Cộng đồng lớn: Có hệ sinh thái phong phú (React Router, Redux, Next.js, v.v.).
* Tính linh hoạt: Có thể tích hợp với các công nghệ khác (như server-side rendering với Next.js).

Nhược điểm:

* Độ phức tạp: Cần học JSX, state management, và các khái niệm như hooks, props.
* Cần công cụ: Yêu cầu môi trường build (như Vite, Webpack) để biên dịch JSX thành JS.
* Khởi đầu chậm hơn: Với dự án nhỏ, việc setup React có thể là quá mức cần thiết.

## React vs Next.js

1. React
Mô tả: React là một thư viện JavaScript (do Facebook phát triển) dùng để xây dựng giao diện người dùng (UI), tập trung vào component-based architecture.

Tính năng chính:
* Tạo các thành phần giao diện (components) có thể tái sử dụng.
* Quản lý trạng thái (state) và render giao diện bằng Virtual DOM.
* Chỉ xử lý phía client (client-side rendering - CSR) theo mặc định.
Yêu cầu bổ sung:

Để xây dựng một ứng dụng hoàn chỉnh, bạn cần thêm công cụ như Webpack, Babel (cho build), React Router (cho định tuyến), và tự quản lý các tính năng như SEO, SSR.

2. Next.js
Mô tả: Next.js là một framework dựa trên React, cung cấp giải pháp toàn diện để phát triển ứng dụng web hiện đại. Nó mở rộng React bằng các tính năng tích hợp sẵn.

Tính năng chính:

* Server-Side Rendering (SSR) và Static Site Generation (SSG): Tích hợp sẵn, giúp cải thiện SEO và hiệu suất.
* File-based Routing: Định tuyến dựa trên cấu trúc thư mục (pages/ hoặc app/), không cần cài thêm thư viện như React Router.
* API Routes: Tạo endpoint API dễ dàng trong cùng dự án.
* Tối ưu hóa: Tự động tối ưu hình ảnh, code splitting, và lazy loading.
* Hỗ trợ React Server Components: (từ Next.js 13) cho phép render phía server hiệu quả hơn.

|Tiêu chí|React|Next.js|
|--------|-----|-------|
|Loại|Thư viện (library)|Framework (dựa trên React)|
|Định tuyến|Không có, cần thêm React Router|Tích hợp sẵn (file-based)|
|Rendering|Client-side Rendering (CSR)|Hỗ trợ CSR, SSR, SSG|
|API|Không có, cần backend riêng|Tích hợp API Routes|
|SEO|Yếu (vì CSR)|Tốt (nhờ SSR và SSG)|
|Cấu hình|Cần tự setup (Webpack, Babel)|Tích hợp sẵn, ít cấu hình|
|Hiệu suất|Tùy thuộc cách triển khai|Tối ưu hóa tự động|
|Độ phức tạp|Linh hoạt nhưng cần nhiều công cụ|Dễ dùng hơn cho ứng dụng hoàn chỉnh|
|Ứng dụng phù hợp|SPA đơn giản, linh hoạt|Web phức tạp, cần SEO, SSR|