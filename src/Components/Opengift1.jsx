import React, { useState, useEffect } from "react";
import { AddToWallet } from "./Addtowallet";

export const OpenGift = () => {
  const [showAddToWallet, setShowAddToWallet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleAddToWallet = () => {
    setShowAddToWallet(true);
  };

  const handleCloseAddToWallet = () => {
    setShowAddToWallet(false);
  };

  if (showAddToWallet) {
    return <AddToWallet onClose={handleCloseAddToWallet} />;
  }
  
  return isMobile ? 
    <MobileGiftCard onAddToWallet={handleAddToWallet} /> : 
    <DesktopOpenGift onAddToWallet={handleAddToWallet} />;
};

export const MobileGiftCard = ({ onAddToWallet }) => {
  return(
    <div className="w-[390px] min-h-screen bg-[#d0f4de] overflow-x-hidden">
      {/* Header */}
      <header className="w-full h-[72px] bg-white border-b border-[#001d3d26] flex items-center justify-between px-6 sticky top-0 z-10">
        <h1 className="text-2xl font-bold [font-family:'Quicksand',Helvetica]">
          <span className="text-[#001d3d]">Loop</span>
          <span className="text-[#789af7]">Joy</span>
        </h1>
        <div className="flex items-center gap-1.5 px-2.5 py-2 border border-[#789af7] rounded-[10px]">
          <div className="w-3.5 h-3.5">
            <img
              className="w-3.5 h-[13px]"
              alt="Vector"
              src="https://c.animaapp.com/md7218yiCPIBL3/img/vector.svg"
            />
          </div>
          <span className="text-[#001d3d] text-sm font-semibold [font-family:'Quicksand',Helvetica]">
            245 Moments of kindness
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full">
        {/* Video Section */}
        <section className="w-full p-6">
          <div className="w-full aspect-[4/5] max-h-[600px] bg-gradient-to-br from-yellow-200 to-green-200 rounded-3xl overflow-hidden shadow-xl">
            <div className="w-full h-full bg-cover bg-center bg-[url('https://c.animaapp.com/md7218yiCPIBL3/img/frame-48095871.png')] flex flex-col justify-between p-5">
              {/* Top Controls */}
              <div className="flex justify-between items-start">
                <button className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </button>
              </div>

              {/* Center Play Button */}
              <div className="flex justify-center items-center">
                <button className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>

              {/* Bottom Message Bar */}
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                <span className="text-white font-medium text-[17.6px] [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Hey there 👋
                </span>
                <button className="text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Card Section */}
        <section className="w-full px-6 pb-6">
          <div className="w-full bg-white rounded-3xl p-6 border border-[#001d3d26]">
            {/* Header Message */}
            <p className="text-[#001d3d] opacity-60 text-sm text-center mb-8 [font-family:'Plus_Jakarta_Sans',Helvetica]">
              José thought of you (and sent $50 💌)
            </p>

            {/* Gift Card Visual */}
            <div className="w-full h-[149px] rounded-2xl border border-black mb-7 bg-cover bg-center bg-[url('https://c.animaapp.com/md7218yiCPIBL3/img/frame-48095681.svg')]"></div>

            {/* Card Details */}
            <div className="space-y-2 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-[#001d3d80] text-lg [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Card number:
                </span>
                <span className="text-[#001d3d] text-lg font-bold [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  b2fe2d79
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#001d3d80] text-lg [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  Expiration date:
                </span>
                <span className="text-[#001d3d] text-lg font-bold [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  09/26
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#001d3d80] text-lg [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  CVV:
                </span>
                <span className="text-[#001d3d] text-lg font-bold [font-family:'Plus_Jakarta_Sans',Helvetica]">
                  1234
                </span>
              </div>
            </div>

            {/* Security Message */}
            <p className="text-[#001d3d] opacity-60 text-sm text-center mb-8 [font-family:'Plus_Jakarta_Sans',Helvetica]">
              🔒 This gift card is secure and ready to use anywhere Visa/Mastercard is accepted online.
            </p>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button 
                className="w-full h-[54px] bg-[#789af7] text-white font-semibold rounded-2xl [font-family:'Quicksand',Helvetica] transition-colors hover:bg-[#6a8bf5]"
                onClick={onAddToWallet}
              >
                Add to Wallet
              </button>
              <button className="w-full h-[54px] bg-white text-[#007aff] font-semibold rounded-2xl border border-[#007aff] [font-family:'Quicksand',Helvetica] transition-colors hover:bg-[#007aff] hover:text-white">
                Spread the Joy
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};



const DesktopOpenGift = ({ onAddToWallet }) => {
  return (
    <div
      className="w-full h-screen bg-[#d0f4de] overflow-x-hidden"
      data-model-id="2111:30681"
    >
      <div className="relative h-full w-full bg-[url(https://c.animaapp.com/md70dn4wo71iCZ/img/frame-48095759.svg)] bg-cover bg-center">
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
                src="https://c.animaapp.com/md70dn4wo71iCZ/img/vector.svg"
              />
            </div>

            <p className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#001d3d] text-sm tracking-[-0.28px] leading-[22.6px] whitespace-nowrap">
              245 Acts of kindness shared
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[554px] items-center justify-center gap-[22px] px-12 py-8 absolute top-[100px] right-[15%] bg-white rounded-[30px]">
          <p className="relative self-stretch mt-[-1.00px] opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-lg text-center tracking-[0] leading-[27px]">
            [Name] just sent you $50 of pure delight!
          </p>

          <div className="flex flex-col items-center justify-center gap-[22px] p-8 relative self-stretch w-full flex-[0_0_auto] bg-[#f6f8fa] rounded-[32px]">
            <div className="relative self-stretch w-full h-[199.59px] rounded-[15px] border border-solid border-black bg-[url(https://c.animaapp.com/md70dn4wo71iCZ/img/frame-48095681.svg)] bg-cover bg-[50%_50%]" />

            <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-transparent text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                  <span className="text-[#001d3d80]">Card number:</span>

                  <span className="text-[#001d3d]">&nbsp;</span>
                </p>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                  b2fe2d79
                </div>
              </div>

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d80] text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                  Expiration date:
                </div>

                <div className="relative w-[83px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                  09/26
                </div>
              </div>

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d80] text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
                  CVV:
                </div>

                <div className="relative w-[83px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#001d3d] text-lg tracking-[0] leading-[27px]">
                  1234
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-[405px] opacity-60 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#001d3d] text-base text-center tracking-[0] leading-6">
            🔒 This gift card is secure and ready to use anywhere
            Visa/Mastercard is accepted online.
          </p>

          <div className="flex items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div 
              className="flex h-[54px] items-center justify-center gap-1.5 px-6 py-0 relative flex-1 grow bg-[#789af7] rounded-2xl overflow-hidden cursor-pointer"
              onClick={onAddToWallet}
            >
              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-white text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Add to Wallet
              </div>
            </div>

            <div className="flex h-[54px] items-center justify-center gap-1.5 px-6 py-0 relative flex-1 grow bg-white rounded-2xl overflow-hidden border border-solid border-[#007aff]">
              <div className="relative w-fit [font-family:'Quicksand',Helvetica] font-semibold text-[#007aff] text-base tracking-[0] leading-[22.6px] whitespace-nowrap">
                Spread the Joy
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[320px] h-[600px] items-center justify-between p-[19.16px] absolute top-[100px] left-[15%] rounded-[30px] overflow-hidden shadow-[14.37px_14.37px_0px_#0000001a] [background:url(https://c.animaapp.com/md70dn4wo71iCZ/img/frame-48095871.png)_50%_50%_/_cover]">
          <img
            className="relative self-stretch w-full flex-[0_0_auto]"
            alt="Frame"
            src="https://c.animaapp.com/md70dn4wo71iCZ/img/frame-48095879.svg"
          />

          <div className="flex w-[85.07px] h-[85.07px] items-center justify-center gap-[21.27px] pl-[4.25px] pr-0 py-0 relative bg-[#ffffff4a] rounded-[2124.61px]">
            <img
              className="relative w-[26.72px] h-[32.81px]"
              alt="Play arrow"
              src="https://c.animaapp.com/md70dn4wo71iCZ/img/play-arrow.svg"
            />
          </div>

          <div className="flex w-[325.75px] h-[57.49px] items-center gap-[86.23px] pl-[114.97px] pr-[15.57px] py-[21.56px] relative ml-[-19.76px] mr-[-19.76px] bg-[#171717ba] backdrop-blur-[2.4px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.4px)_brightness(100%)]">
            <div className="relative w-fit mt-[-0.01px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[16.8px] text-center tracking-[-0.34px] leading-[23.5px] whitespace-nowrap">
              Hey there 👋
            </div>

            <div className="relative w-[14.37px] h-[14.37px]">
              <img
                className="absolute w-[9px] h-[9px] top-[3px] left-[3px]"
                alt="Vector"
                src="https://c.animaapp.com/md70dn4wo71iCZ/img/vector-1.svg"
              />
            </div>
          </div>

          <img
            className="absolute w-[325px] h-[484px] top-[138px] left-0"
            alt="Group"
            src="https://c.animaapp.com/md70dn4wo71iCZ/img/group-9482.png"
          />
        </div>
      </div>
    </div>
  );
};