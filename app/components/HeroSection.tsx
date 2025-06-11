'use client'

import Image from 'next/image';

const aboutWords = Array(100).fill('ABOUT').join(' · ');

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    {/* Profile Image */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden grayscale border-4 border-white shadow-xl mx-auto">
        <Image
          src="/images/jay.jpg"
          alt="Jay Pipaliya"
          width={224}
          height={224}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      {/* Name and Subtitle */}
      <div className="flex flex-col items-center mt-2">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-michroma">Jay Pipaliya</h1>
        <p className="text-base md:text-xl font-light tracking-wide text-white lowercase mt-1">designer - coder - developer</p>
      </div>
      {/* ABOUT Carousel Strip - now under the image, half-overlapping */}
      <div className="relative w-full flex justify-center -mt-10 md:-mt-16 z-20">
        <div className="relative h-12 flex items-center w-[120vw] max-w-none pointer-events-none">
          <div className="absolute inset-0 bg-white rounded-full shadow-lg" />
          <div className="whitespace-nowrap font-bold text-blue-700 text-2xl md:text-3xl px-4 animate-marquee overflow-hidden">
            {aboutWords}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-block;
            min-width: 200%;
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </div>
    </div>
  </section>
);

export default HeroSection; 