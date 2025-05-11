import React from "react";
import NavBar from "../components/NavBar";

const SponsorPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="bg-[#190200] min-h-[100dvh] h-fit font-[LINESeedSansTH]">
        <div className="w-full flex flex-col items-center pt-42 gap-16 pb-16 px-4">
          <span className="text-4xl text-center bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)] text-transparent bg-clip-text font-bold">
            YWC 20's Sponsors
          </span>
          <div className="flex flex-col items-center justify-center text-[#9B9B9B] font-semibold">
            <div className="flex flex-col items-center justify-center gap-y-6">
              <p>Super VIP Sponsor</p>
              <a href="https://www.odt.co.th/" target="_blank">
                <img src="./odt.svg" alt="ODT Logo" width={100} height={40} />
              </a>
            </div>
            <div className="flex justify-center flex-col lg:flex-row gap-8 lg:gap-20 mt-10 text-center">
              <div>
                <p>PlatinumSponsor</p>
                <div className="flex gap-14 justify-center items-end mt-4">
                  <a href="https://thnic.or.th/" target="_blank">
                    <img
                      src="./dotthai.svg"
                      alt="THNIC Logo"
                      width={150}
                      height={20}
                      className="w-24 sm:w-32 md:w-40 h-auto"
                    />
                  </a>
                  <a href="https://datarockie.com/" target="_blank">
                    <img
                      src="./data.svg"
                      alt="Data Rockie & DataTH Logo"
                      width={150}
                      height={20}
                      className="w-24 sm:w-32 md:w-40 h-auto"
                    />
                  </a>
                  <div className="hidden lg:block w-[1px] bg-[#7F7F7F] h-[43px]"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p>Gold Sponsor</p>
                <div className="mt-4">
                  <a href="https://ximi-ai.com/">
                    <img
                      src="./ximi-ai-logo.svg"
                      alt="Ximi AI Logo"
                      width={140}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-10">
              <p>Silver Sponsor</p>
              <div className="flex gap-6 lg:gap-20 mt-4 justify-center items-center">
                <a href="https://www.rainmaker.in.th/">
                  <img
                    src="./rainmaker.svg"
                    alt="Rainmaker Logo"
                    width={160}
                    height={30}
                    className="w-28 h-auto"
                  />
                </a>
                <a href="https://aona.co.th/">
                  <img
                    src="./aona.svg"
                    alt="Aona Logo"
                    width={160}
                    height={30}
                    className="w-28 h-auto"
                  />
                </a>
                <a href="https://th.seedwebs.com/">
                  <img
                    src="./seed.svg"
                    alt="Seed Logo"
                    width={160}
                    height={30}
                    className="w-28 h-auto"
                  />
                </a>
                <a href="http://borntodev.com/">
                  <img
                    src="./borntodev.svg"
                    alt="borntodev Logo"
                    width={160}
                    height={30}
                    className="w-28 h-auto"
                  />
                </a>
              </div>
              <div className="flex gap-6 lg:gap-20 mt-4 justify-center items-center">
                <a href="https://www.facebook.com/tidjaruad">
                  <img
                    src="./tidjaruad.svg"
                    alt="tidjaruad Logo"
                    width={160}
                    height={30}
                    className="w-28 h-auto"
                  />
                </a>
                <a href="https://creatorsgarten.org/">
                  <img
                    src="./creatorsgarten.svg"
                    alt="creatorsgarten Logo"
                    width={160}
                    height={30}
                    className="w-28 h-auto"
                  />
                </a>
                <a href="https://www.skilllane.com/">
                  <img
                    src="./skilllane.svg"
                    alt="skilllane Logo"
                    width={160}
                    height={30}
                    className="w-28 h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorPage;
