"use client";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Project from "../projects/page";

export default function Home({}) {
  const { user, isLoading } = useUser();

  return user ? (
    <Project />
  ) : (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <Image src="/logo.png" alt="Logo" width={780} height={260} />
      </div>
      <a href="/api/auth/login">
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-7 rounded-full border border-white border-opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 mt-4">
          Get Started
        </button>
      </a>
      <video
        className="w-full h-full object-cover fixed top-0 left-0 z-0"
        src="/videoBg.mp4"
        autoPlay
        loop
        muted
      />
      <a href="/api/auth/login">
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-7 rounded-full border border-white border-opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 mt-4">
          Get Started
        </button>
      </a>
      <video
        className="w-full h-full object-cover fixed top-0 left-0 z-0"
        src="/videoBg.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
}

