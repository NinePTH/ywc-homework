import { useState } from "react";
import type { CandidateInformation } from "../types";
import { candidateData } from "../data";

const useSearchCandidates = () => {
    const [candidates, setCandidates] = useState<CandidateInformation[] | null>([]);

    const handleSearchCandidates = (formData: CandidateInformation) => {
        if (formData.interviewRefNo === "" && formData.major === "" && formData.firstName === "" && formData.lastName === "") {
            setCandidates(null);
            return { candidates, handleSearchCandidates }
        }
        const allEntries = Object.values(candidateData).flat();

        const filtered = allEntries.filter((entry) => {
            return (
                (!formData.interviewRefNo ||
                    entry.interviewRefNo
                        .toLowerCase()
                        .includes(formData.interviewRefNo.toLowerCase())) &&
                (!formData.major ||
                    entry.major.toLowerCase().includes(formData.major.toLowerCase())) &&
                (!formData.firstName ||
                    entry.firstName
                        .toLowerCase()
                        .includes(formData.firstName.toLowerCase())) &&
                (!formData.lastName ||
                    entry.lastName
                        .toLowerCase()
                        .includes(formData.lastName.toLowerCase()))
            );
        });
        setCandidates(filtered);
    };
    return { candidates, handleSearchCandidates }
}

export default useSearchCandidates