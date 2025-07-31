import React, { useState, useEffect } from "react";
import { Enterpin1 } from "./Enterpin1";

// Desktop component
const DesktopEnterpin = ({ onUnlock }) => {
  return (
    <div
      className="w-full h-full bg-[#d0f4de]"
      data-model-id="2111:30212"
    >
      <div className="relative h-screen bg-[url(https://c.animaapp.com/md6xgnxhljZvbV/img/frame-48095759.svg)] bg-[100%_100%]">
        <div className="flex w-full h-[83px] items-center justify-between px-8 py-0 absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-[#001d3d26]">
          <p className="relative w-fit [font-family:'Quicksand',Helvetica] font-bold text-transparent text-2xl tracking-[0] leading-[28.8px] whitespace-nowrap">
            <span className="text-[#001d3d]">Loop</span>
            <span className="text-[#789af7]">Joy</span>
          </p>

          <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-[14px] border border-solid border-[#789af7]">
            <div className="relative w-[19px] h-[19px]">
              <img
                className="absolute w-[19px] h-[17px] top-px left-0"
                alt="Vector"
                src="https://c.animaapp.com/md6xgnxhljZvbV/img/vector.svg"
              />
            </div>

            <p className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
              245 Acts of kindness shared
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[685px] items-center gap-[57px] p-12 absolute top-[100px] left-[400px] bg-[#f8f9fa] rounded-[40px]">
          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[83px] h-[78px]"
              alt="Image"
              src="https://c.animaapp.com/md6xgnxhljZvbV/img/image.png"
            />

            <div className="flex flex-col items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#635bff] text-lg text-center tracking-[0] leading-[27px]">
                GOT A CODE?
              </div>

              <div className="relative self-stretch [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-[40px] text-center tracking-[-2.00px] leading-[48.0px]">
                YOU'VE GOT A SURPRISE…
              </div>
            </div>

            <p className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg text-center tracking-[0] leading-[27px]">
              Pop in your 4-digit code to unlock a special surprise custom-made
              especially for you.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[17px] relative flex-[0_0_auto]">
                <div className="relative w-[65px] h-[75px] rounded-[15px] border-2 border-solid border-[#001d3d45]" />
                <div className="relative w-[65px] h-[75px] rounded-[15px] border-2 border-solid border-[#001d3d45]" />
                <div className="relative w-[65px] h-[75px] rounded-[15px] border-2 border-solid border-[#001d3d45]" />
                <div className="relative w-[65px] h-[75px] rounded-[15px] border-2 border-solid border-[#001d3d45]" />
              </div>

              <p className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6">
                Keep this code safe. Seriously, don't lost it. Unless you want
                someone else to get what's yours…
              </p>
            </div>

            <div className="inline-flex h-[61px] items-center justify-center gap-1.5 px-6 py-0 relative bg-[#789af7] rounded-2xl overflow-hidden cursor-pointer" onClick={onUnlock}>
              <button className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Unlock my gift
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile component
const MobileEnterpin = ({ onUnlock }) => {
  return (
    <div
      className="w-[390px] h-[844px] bg-[#d0f4de]"
      data-model-id="2111:32965"
    >
      <div className="relative h-[844px]">
        <img
          className="absolute w-[390px] h-[787px] top-[57px] left-0"
          alt="Frame"
          src="https://c.animaapp.com/md6y8jevf1pdnp/img/frame-48095759.svg"
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
                src="https://c.animaapp.com/md6y8jevf1pdnp/img/vector.svg"
              />
            </div>

            <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
              245 Moments of kindness
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[342px] items-start gap-[47px] p-6 absolute top-[129px] left-6 bg-white rounded-2xl">
          <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <img
              className="relative w-[62px] h-[58px]"
              alt="Image"
              src="https://c.animaapp.com/md6y8jevf1pdnp/img/image.png"
            />

            <div className="flex flex-col items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
              <p className="mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-bold text-[#635bff] text-[15px] leading-[22.5px] relative self-stretch text-center tracking-[0]">
                ENTER YOUR 4 DIGIT CODE
              </p>

              <p className="relative self-stretch [font-family:'Quicksand',Helvetica] font-bold text-[#001d3d] text-[27px] text-center tracking-[-0.54px] leading-[35.1px]">
                Something special is waiting for you
              </p>
            </div>

            <p className="opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base leading-6 relative self-stretch text-center tracking-[0]">
              Enter your 4-digit code to unlock the surprise made just for you.
              Because joy's best when it's personal.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 grow h-[65px] rounded-[11px] border-2 border-solid border-[#001d3d45]" />
                <div className="relative flex-1 grow h-[65px] rounded-[11px] border-2 border-solid border-[#001d3d45]" />
                <div className="relative flex-1 grow h-[65px] rounded-[11px] border-2 border-solid border-[#001d3d45]" />
                <div className="relative flex-1 grow h-[65px] rounded-[11px] border-2 border-solid border-[#001d3d45]" />
              </div>

              <p className="relative self-stretch opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-sm text-center tracking-[0] leading-[21px]">
                To avoid unnecessary redemtion, please do not share this code.
              </p>
            </div>

            <div className="flex h-[61px] items-center justify-center gap-1.5 px-6 py-0 relative self-stretch w-full bg-[#789af7] rounded-2xl overflow-hidden cursor-pointer" onClick={onUnlock}>
              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Unlock my gift
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component that decides which view to show
export const Enterpin = () => {
  const [showEnterpin1, setShowEnterpin1] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleUnlockClick = () => {
    setShowEnterpin1(true);
  };
  
  if (showEnterpin1) {
    return <Enterpin1 />;
  }
  
  return isMobile ? 
    <MobileEnterpin onUnlock={handleUnlockClick} /> : 
    <DesktopEnterpin onUnlock={handleUnlockClick} />;
};