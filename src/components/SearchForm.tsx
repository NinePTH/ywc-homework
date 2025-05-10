import React, { useState } from "react";
import type { CandidateInformation } from "../types";

interface Props {
  handleSearch: (formData: CandidateInformation) => void;
}

const SearchForm: React.FC<Props> = ({ handleSearch }) => {
  const [formData, setFormData] = useState({
    interviewRefNo: "",
    major: "",
    firstName: "",
    lastName: "",
  });

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      interviewRefNo: "",
      major: "",
      firstName: "",
      lastName: "",
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(formData);
    setFormData({
      interviewRefNo: "",
      major: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <form className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 px-16 md:px-42 font-bold">
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md text-white">Interview ID</label>
        <div className="p-[1px] rounded-md bg-gradient-to-l from-[#f81a64] via-[#f52222] from-50% via-[#ff691d] via-86% to-[#ffb623]">
          <input
            type="text"
            value={formData.interviewRefNo}
            onChange={(e) =>
              setFormData({ ...formData, interviewRefNo: e.target.value })
            }
            placeholder="PG42"
            className="w-full text-sm text-white bg-[#0F0F0F] rounded-md py-2 px-2 md:py-4 md:px-4 caret-white"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md text-white">Major</label>
        <div className="p-[1px] rounded-md bg-gradient-to-l from-[#f81a64] via-[#f52222] from-50% via-[#ff691d] via-86% to-[#ffb623]">
          <input
            type="text"
            value={formData.major}
            onChange={(e) =>
              setFormData({ ...formData, major: e.target.value })
            }
            placeholder="programming, marketing, design, content"
            className="w-full text-sm text-white bg-[#0F0F0F] rounded-md py-2 px-2 md:py-4 md:px-4 caret-white"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md text-white">First Name</label>
        <div className="p-[1px] rounded-md bg-gradient-to-l from-[#f81a64] via-[#f52222] from-50% via-[#ff691d] via-86% to-[#ffb623]">
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            placeholder="John"
            className="w-full text-sm text-white bg-[#0F0F0F] rounded-md py-2 px-2 md:py-4 md:px-4 caret-white"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-1">
        <label className="text-sm lg:text-md text-white">Last Name</label>
        <div className="p-[1px] rounded-md bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]">
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            placeholder="Doe"
            className="w-full text-sm text-white bg-[#0F0F0F] rounded-md py-2 px-2 md:py-4 md:px-4 caret-white"
          />
        </div>
      </div>

      <div className="col-span-full flex items-center justify-center md:justify-start gap-4 mt-4 lg:mt-4">
        <div className="p-[1px] rounded-md bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)]">
          <button
            onClick={handleClear}
            type="button"
            className="px-8 py-2 rounded-md text-white bg-[#0F0F0F] hover:bg-white  hover:text-black active:text-white active:bg-[#0F0F0F] transition duration-150 ease-in-out cursor-pointer"
          >
            Clear
          </button>
        </div>
        <button
          onClick={onSubmit}
          type="button"
          className="px-8 py-2 bg-[linear-gradient(270deg,#f81a64,#f52222_50%,#ff691d_86%,#ffb623)] text-white rounded-md hover:text-black active:scale-95 active:text-white transition duration-150 ease-in-out cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
