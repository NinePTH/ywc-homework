import { useEffect, useState } from "react";
import type { AllCandidateData } from "../types";
import fetchCandidates from "../services/candidate";

const useFetchCandidates = () => {
    const [candidates, setCandidates] = useState<AllCandidateData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getAllCandidates = async () => {
            setIsLoading(true)
            console.log("Fetching candidates...");
            try {
                const candidates = await fetchCandidates()
                console.log("Candidates fetched:", candidates);
                setCandidates(candidates)
            }
            catch (err: unknown) {
                console.log(err)
                setError("Cannot Fetch Candidates Data")
            } finally {
                setIsLoading(false)
            }
        }
        getAllCandidates()
    }, [])
    return { candidates, isLoading, error }
}

export default useFetchCandidates