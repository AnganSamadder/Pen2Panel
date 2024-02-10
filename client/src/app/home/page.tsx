import Image from 'next/image';

export default function Landing({}) {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Image src="/logo.png" alt="Logo" width={780} height={260} />
      </div>
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-7 rounded-full border border-white border-opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 mt-4"
      >
        Login
      </button>
      <video className="w-full h-full object-cover fixed top-0 left-0 z-0" src="/videoBg.mp4" autoPlay loop muted />
    </div>


  );
}