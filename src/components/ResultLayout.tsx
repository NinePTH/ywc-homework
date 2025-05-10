import type { AllCandidateData, CandidateInformation } from "../types";

interface Props {
  results?: AllCandidateData | null;
  searchResults?: CandidateInformation[] | null;
  isLoading?: boolean;
  error?: string | null;
}

const ResultLayout: React.FC<Props> = ({
  results,
  searchResults,
  isLoading,
  error,
}) => {
  return (
    <>
      {isLoading ? (
        <p className="text-white font-bold">Loading please wait</p>
      ) : error ? (
        <p className="text-white">{error}</p>
      ) : (
        <div className="w-full px-4 sm:px-12 md:px-24 lg:px-42 flex flex-col gap-12">
          {results &&
            Object.entries(results).map(([major, candidates]) => (
              <div
                key={major}
                className="w-full p-0.5 rounded-xl bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]"
              >
                <div className="w-full bg-[#0F0F0F] py-6 rounded-xl">
                  <h2 className="text-white text-4xl text-center capitalize font-bold">
                    {major}
                  </h2>
                  <div className="w-full h-[1px] my-6 bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]"></div>
                  <div className="text-white text-center">
                    <div className="grid grid-cols-3 pb-4 font-semibold">
                      <h3>Interview ID</h3>
                      <h3>First Name</h3>
                      <h3>Last Name</h3>
                    </div>
                    {candidates.map((item: CandidateInformation) => (
                      <div
                        key={item.interviewRefNo}
                        className="grid grid-cols-3 odd:bg-black even:bg-[#0F0F0F] py-4"
                      >
                        <p>{item.interviewRefNo}</p>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          {searchResults && searchResults.length > 0 ? (
            <div className="w-full p-0.5 rounded-xl bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]">
              <div className="w-full bg-[#0F0F0F] py-6 rounded-xl">
                <div className="text-white text-center">
                  <div className="grid grid-cols-3 pb-4 font-semibold">
                    <h3>Interview ID</h3>
                    <h3>First Name</h3>
                    <h3>Last Name</h3>
                  </div>
                  <div className="w-full h-[1px] mt-2 mb-6 bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]"></div>
                  {searchResults.map((item: CandidateInformation) => (
                    <div
                      key={item.interviewRefNo}
                      className="grid grid-cols-3 even:bg-black odd:bg-[#0F0F0F] py-4"
                    >
                      <p>{item.interviewRefNo}</p>
                      <p>{item.firstName}</p>
                      <p>{item.lastName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : searchResults && searchResults.length === 0 ? (
               <div className="w-full p-0.5 rounded-xl bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]">
              <div className="w-full bg-[#0F0F0F] py-6 rounded-xl">
                <div className="text-white text-center font-semibold">
                  <p>No Search Result</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default ResultLayout;
