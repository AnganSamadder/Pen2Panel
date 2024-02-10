import Image from 'next/image';

export default function Landing({}) {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div className="flex items-center justify-center z-10">
      <Image src="/logo.png" alt="Logo" width={390} height={130} />
    </div>
    <video className="w-full h-full object-cover fixed top-0 left-0 z-0" className="video" src="/videoBg.mp4" autoPlay loop muted />
  </div>


  );
}
