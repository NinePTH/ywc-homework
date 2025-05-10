export interface AllCandidateData {
    design: CandidateInformation[]
    content: CandidateInformation[]
    marketing: CandidateInformation[]
    programming: CandidateInformation[]
}

export interface CandidateInformation {
    firstName: string;
    lastName: string;
    interviewRefNo: string;
    major: string;
}