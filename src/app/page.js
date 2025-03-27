import Image from 'next/image';
import profilePic from '../public/clq.jpg';

export default function Home() {
  return <h1>Chào mừng đến trang chủ!</h1>,
  <Image
      src={profilePic} // Ảnh đã import
      alt="Ảnh của tôi" // Mô tả ảnh (rất quan trọng cho SEO và accessibility)
      width={1000}
      height={600}
    />
}