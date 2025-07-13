import axiosConfig from "@/config/axiosConfig";

export async function fetchInterviewQuestion(data) {
    try {
        const response = await axiosConfig.post("/interview/question", data);
        return response.data;
    } catch (error) {
        console.log("error in fetchInterviewQuestion:", error);
        throw error;
    }
}

export async function fetchInterviewResponse(data) {
    try {
        const response = await axiosConfig.post("/interview/response", data);
        return response.data;
    } catch (error) {
        console.log("error in fetchInterviewResult:", error);
        throw error;
    }
}

export async function fetchInterviewFeedback(data) {
    try {
        const response = await axiosConfig.post("/interview/feedback", data);
        return response.data;
    } catch (error) {
        console.log("error in fetchInterviewFeedback:", error);
        throw error;
    }
}