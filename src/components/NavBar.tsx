import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconContext } from "react-icons";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";

const NavBar: React.FC = () => {
  const [isExpand, setIsExpand] = useState(false);
  console.log(isExpand);

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-10">
      <div className="w-full flex justify-between items-center px-6 md:px-20 lg:px-28 py-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            animateScroll.scrollToTop();
            setIsExpand(false);
          }}
        >
          <img src="/logo-ywc20-mono.webp" alt="logo" className="h-8" />
        </Link>

        <div className="lg:hidden" onClick={() => setIsExpand(!isExpand)}>
          <IconContext.Provider value={{ color: "#FFFFFFFF" }}>
            {isExpand ? (
              <RxCross2 className="size-8" />
            ) : (
              <RxHamburgerMenu className="size-8" />
            )}
          </IconContext.Provider>
        </div>

        <Link
          to="/search"
          className="hidden lg:block text-center"
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          <p className="text-white text-lg">Search Candidates</p>
        </Link>

        <Link
          to="/sponsors"
          className="hidden lg:block text-center"
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          <p className="font-semibold text-white py-1 px-2 rounded-md bg-[linear-gradient(90deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]">
            Sponsors
          </p>
        </Link>
      </div>

      <AnimatePresence>
        {isExpand && (
          <motion.div
            className="h-dvh py-10 lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-14">
              <Link
                to="/search"
                onClick={() => setIsExpand(false)}
                className="text-2xl lg:text-lg font-medium text-white active:text-gray-600"
              >
                Search Candidates
              </Link>
              <Link
                to="/sponsors"
                onClick={() => {
                  animateScroll.scrollToTop();
                  setIsExpand(false);
                }}
              >
                <p className="font-semibold text-white text-2xl lg:text-base py-2 px-8 lg:py-1 lg:px-2  rounded-md bg-[linear-gradient(90deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]">
                  Sponsors
                </p>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
