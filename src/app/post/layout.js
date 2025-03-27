// app/post/layout.tsx
export default function BlogLayout({ children }) {
    return (
      <div>
        <h2>Chào mừng đến Blog</h2>
        {children} {/* Trang blog hoặc trang chi tiết bài viết */}
      </div>
    );
  }