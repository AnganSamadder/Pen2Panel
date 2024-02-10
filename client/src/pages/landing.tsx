import Image from 'next/image';

export default function Landing({}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="flex items-center justify-center">
      <Image src="/logo.png" alt="Logo" width={557} height={180} />
    </div>
    <video className="w-full h-full object-cover fixed top-0 left-0 z-20" className="video" src="/videoBg.mp4" autoPlay loop muted />
  </div>


  );
}
