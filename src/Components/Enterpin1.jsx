import React, { useEffect, useState } from "react";
import { OpenGift } from "./Opengift1";

// Desktop component
const DesktopEnterpin1 = ({ onOpenGift }) => {
  return (
    <div
      className="w-full h-screen bg-[#d0f4de] overflow-x-hidden"
      data-model-id="2111:29754"
    >
      <div className="relative h-full w-full bg-[url(https://c.animaapp.com/md6x6w545OM6gw/img/frame-48095759.svg)] bg-cover bg-center">
        <div className="flex w-full h-[83px] items-center justify-between px-8 py-0 fixed top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#001d3d26] z-10">
          <p className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[28.8px] whitespace-nowrap">
            <span className="text-[#001d3d]">Loop</span>
            <span className="text-[#789af7]">Joy</span>
          </p>

          <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-[14px] border border-solid border-[#789af7]">
            <div className="relative w-[19px] h-[19px]">
              <img
                className="absolute w-[19px] h-[17px] top-px left-0"
                alt="Vector"
                src="https://c.animaapp.com/md6x6w545OM6gw/img/vector-1.svg"
              />
            </div>

            <p className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
              245 Acts of kindness shared
            </p>
          </div>
        </div>

        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <img
            className="w-[337px] h-[271px] object-cover cursor-pointer"
            alt="Image"
            src="https://c.animaapp.com/md6x6w545OM6gw/img/image-285.png"
            onClick={onOpenGift}
          />
          
          {/* Heart button */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center cursor-pointer z-10"
            onClick={onOpenGift}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF5757" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        <div className="inline-flex flex-col items-center justify-center gap-6 absolute top-[180px] left-1/2 transform -translate-x-1/2">
          <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-5xl text-center tracking-[0] leading-[67.2px] whitespace-nowrap">
              KNOCK KNOCK…
            </div>

            <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-2xl text-center tracking-[0] leading-9">
              You've Got Mail! Tap to Open…
            </p>
          </div>

          <img
            className="relative w-3.5 h-[8.5px] mb-[-1.50px]"
            alt="Vector"
            src="https://c.animaapp.com/md6x6w545OM6gw/img/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

// Mobile component
const MobileEnterpin1 = ({ onOpenGift }) => {
  return (
    <div
      className="w-[390px] h-[844px] bg-[#d0f4de] mx-auto overflow-hidden"
      data-model-id="2111:33434"
    >
      <div className="relative h-[844px] w-[390px]">
        <img
          className="absolute w-[390px] h-[787px] top-[57px] left-0"
          alt="Frame"
          src="https://c.animaapp.com/md6ydkusnh9zrR/img/frame-48095759.svg"
        />

        <div className="flex w-[390px] h-[72px] items-center justify-between px-6 py-0 absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#001d3d26]">
          <p className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[28.8px] whitespace-nowrap">
            <span className="text-[#001d3d]">Loop</span>
            <span className="text-[#789af7]">Joy</span>
          </p>

          <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-[10px] border border-solid border-[#789af7]">
            <div className="relative w-3.5 h-3.5">
              <img
                className="absolute w-3.5 h-[13px] top-px left-0"
                alt="Vector"
                src="https://c.animaapp.com/md6ydkusnh9zrR/img/vector-1.svg"
              />
            </div>

            <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
              245 Moments of kindness
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-4 absolute top-[120px]">
          <div className="flex flex-col items-center gap-3 w-full mb-8">
            <div className="w-full text-center [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-[36px] tracking-[0] leading-[46px]">
              KNOCK KNOCK…
            </div>

            <p className="w-full text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#001d3d] text-xl tracking-[0] leading-[30px]">
              You've Got Mail! Tap to Open…
            </p>
            
            <img
              className="w-3.5 h-[8.5px] mt-2"
              alt="Vector"
              src="https://c.animaapp.com/md6ydkusnh9zrR/img/vector.svg"
            />
          </div>
          
          <div className="relative mt-10">
            <img
              className="w-[200px] h-[160px] object-cover cursor-pointer"
              alt="Image"
              src="https://c.animaapp.com/md6ydkusnh9zrR/img/image-285.png"
              onClick={onOpenGift}
            />
            
            {/* Heart button */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center cursor-pointer"
              onClick={onOpenGift}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#FF5757" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component that decides which view to show
export const Enterpin1 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showOpenGift, setShowOpenGift] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleOpenGift = () => {
    setShowOpenGift(true);
  };
  
  if (showOpenGift) {
    return <OpenGift />;
  }
  
  return isMobile ? 
    <MobileEnterpin1 onOpenGift={handleOpenGift} /> : 
    <DesktopEnterpin1 onOpenGift={handleOpenGift} />;
};