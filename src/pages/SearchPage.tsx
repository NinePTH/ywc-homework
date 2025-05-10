import NavBar from "../components/NavBar";
import ResultLayout from "../components/ResultLayout";
import SearchForm from "../components/SearchForm";
import useSearchCandidates from "../hooks/useSearchCandidate";

const SearchPage: React.FC = () => {
  const { candidates, handleSearchCandidates } = useSearchCandidates();
  const searchResults = candidates && candidates.length > 0 ? candidates : null
  console.log(candidates)
  return (
    <>
      <NavBar />
      <div className="bg-[#190200] min-h-[100dvh] h-fit font-[LINESeedSansTH]">
        <div className="w-full flex flex-col items-center pt-42 gap-16 pb-16">
          <span className="text-4xl text-center bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)] text-transparent bg-clip-text font-bold">
            ค้นหาผู้มีสิทธิ์สัมภาษณ์
          </span>
          <SearchForm handleSearch={handleSearchCandidates} />
          <ResultLayout searchResults={searchResults} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
