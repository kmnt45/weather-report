import { AxiosError } from 'axios';

import { useError } from '@/hooks/useError.ts';
import { ErrorMessageType } from '@/models';

export const HandleError = (error: AxiosError<ErrorMessageType>) => {
  const { status, message } = useError(error);

  if (status !== 498 && status !== 401) {
    if (Array.isArray(message)) {
      message.forEach((nameError) => console.error(nameError, 'error'));
    } else {
      console.error(message, 'error');
    }
  }

  return { status, message };
};
