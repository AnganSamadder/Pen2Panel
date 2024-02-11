import Image from 'next/image';
import Login from '../login';

export default function Landing({}) {

  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mb-4">
        <Image src="/logo.png" alt="Logo" width={400} height={133} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 mt-10">
        <a href="/projects">
          <button
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-16 rounded-full border border-white border-opacity-50"
            style={{ minWidth: '100px' }}>
            Get Started
          </button>
        </a>
      </div>
      <video className="w-full h-full object-cover fixed top-0 left-0 z-0" src="/videoBg.mp4" autoPlay loop muted />
    </div>
  );
}
