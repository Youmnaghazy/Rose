import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, signUp } from "../queries/auth";
import { RegisterResponse } from "@/types";

const useSignUp = ({
  onSuccess,
}: {
  onSuccess?: (data: RegisterResponse) => void;
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.clear();
    },
  });

  return mutation;
};

const useLoginMutation = ({
  onSuccess,
}: {
  onSuccess?: (data: RegisterResponse) => void;
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      onSuccess?.(data);
      queryClient.clear();
    },
  });

  return mutation;
};

export { useSignUp, useLoginMutation };
