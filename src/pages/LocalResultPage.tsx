import NavBar from "../components/NavBar";
import ResultLayout from "../components/ResultLayout";
import { candidateData } from "../data";
import type { AllCandidateData } from "../types";

const LocalResultPage: React.FC = () => {
  const candidates = candidateData as AllCandidateData;

  return (
    <>
      <NavBar />
      <div className="bg-[#190200] min-h-[100dvh] h-fit font-[LINESeedSansTH]">
        <div className="w-full flex flex-col items-center pt-42 gap-16 pb-16">
          <div className="flex flex-col items-center gap-4">
            <span className="text-4xl text-center bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)] text-transparent bg-clip-text font-bold">
              <h1>รายชื่อผู้มีสิทธิ์สัมภาษณ์</h1>
            </span>
            <span className="text-sm text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-md border border-yellow-400/30">
              Local Data version
            </span>
          </div>
          <ResultLayout results={candidates} />
        </div>
      </div>
    </>
  );
};

export default LocalResultPage;
