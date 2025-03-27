// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <header>Đây là Header chung</header>
        <main>{children}</main> {/* Nội dung trang sẽ hiện ở đây */}
        <footer>Đây là Footer chung</footer>
      </body>
    </html>
  );
}