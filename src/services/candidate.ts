import api from "./api";

const fetchCandidates = async () => {
    const response = await api.get("/candidates");
    const candidatesData = response.data
    return candidatesData;
};

export default fetchCandidates;