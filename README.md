# QLSB

## Frontend qlsb system

## Nháp

**NNQ**

*Nguyen Nhat Quang*

- a
- b
- c

1. A
2. B
3. C

[Youtube](https://www.youtube.com)

Đây là `chim` trong lồng

Chim|Rank|
|---|----|
|Rặt rặt|SSS|

> Đây là một trích dẫn

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
- Dùng để đồng bộ code giữa nhiều developer thông qua git push và git pull.

### 2. Objects Database (Cơ sở dữ liệu đối tượng)
Git lưu trữ dữ liệu dưới dạng objects (đối tượng) thay vì lưu trữ từng file riêng lẻ. Các loại objects quan trọng gồm:

**Blob (Binary Large Object)**: Lưu trữ nội dung file.

**Tree**: Lưu trữ cấu trúc thư mục.

**Commit**: Ghi lại trạng thái của project tại một thời điểm, liên kết với tree.

**Tag**: Đánh dấu một commit quan trọng (ví dụ: phiên bản release).

Git sử dụng SHA-1 Hash để định danh từng object.
