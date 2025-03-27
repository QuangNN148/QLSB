import Image from 'next/image';
import {Inter} from 'next/font/google';
import profilePic from '../public/clq.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1>Chào mừng đến trang chủ!</h1>,
      <Image
        src={profilePic} // Ảnh đã import
        alt="Ảnh của tôi" // Mô tả ảnh (rất quan trọng cho SEO và accessibility)
        width={1000}
        height={600}
      />
    </div>
  );
}