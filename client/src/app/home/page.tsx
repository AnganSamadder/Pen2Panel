import Image from 'next/image';

export default function Landing({}) {
  return (
    <div className="min-h-screen relative">
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-10"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <Image src="/logo.png" alt="Logo" width={780} height={260} />
    </div>
    <video className="w-full h-full object-cover fixed top-0 left-0 z-0" src="/videoBg.mp4" autoPlay loop muted />
  </div>


  );
}