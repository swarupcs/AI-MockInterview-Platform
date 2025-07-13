import {
  fetchInterviewFeedback,
  fetchInterviewQuestion,
  fetchInterviewResponse,
} from '@/apis/TextInterview/interview';
import { useMutation } from "@tanstack/react-query";

export const useInterviewQuestion = () => {
    const {
      isPending,
      isSuccess,
      error,
      mutateAsync: fetchInterviewQuestionMutation,
    } = useMutation({
      mutationFn: (data) => fetchInterviewQuestion(data),
      onSuccess: (data) => {},
      onError: (error) => {
        console.error('Error fetching interview question:', error);
      },
    });

    return { isPending, isSuccess, error, fetchInterviewQuestionMutation}
}


export const useInterviewResponse = () => {
    const {
      isPending,
      isSuccess,
      error,
      mutateAsync: fetchInterviewResponseMutation,
    } = useMutation({
      mutationFn: (data) => fetchInterviewResponse(data),
      onSuccess: (data) => {},
      onError: (error) => {
        console.error('Error fetching interview response:', error);
      },
    });

    return { isPending, isSuccess, error, fetchInterviewResponseMutation }
}


export const useInterviewFeedback = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: fetchInterviewFeedbackMutation,
  } = useMutation({
    mutationFn: (data) => fetchInterviewFeedback(data),
    onSuccess: (data) => {},
    onError: (error) => {
      console.error('Error fetching interview feedback:', error);
    },
  });

  return { isPending, isSuccess, error, fetchInterviewFeedbackMutation };
}