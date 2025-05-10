import NavBar from "../components/NavBar";
import ResultLayout from "../components/ResultLayout";
import useFetchCandidates from "../hooks/useFetchCandidates";

const AllResultPage: React.FC = () => {
  const { candidates, isLoading, error } = useFetchCandidates();
  return (
    <>
      <NavBar />
      <div className="bg-[#190200] min-h-[100dvh] h-fit font-[LINESeedSansTH]">
        <div className="w-full flex flex-col items-center pt-42 gap-16 pb-16">
          <span
            className="text-4xl text-center bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)] text-transparent bg-clip-text font-bold"
          >
            <h1>รายชื่อผู้มีสิทธิ์สัมภาษณ์</h1>
          </span>
          <ResultLayout
            results={candidates}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </>
  );
};

export default AllResultPage;
