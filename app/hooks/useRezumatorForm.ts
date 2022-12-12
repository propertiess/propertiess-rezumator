import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppSelector } from '@/store';
import { useActions } from '@/store/hooks/useActions';
import { RezumatorState } from '@/store/slices/rezumator/rezumator';
import { useSaveRezumatorToStorage } from './useSaveRezumatorToStorage';

export const useRezumatorForm = () => {
  const rezumator = useAppSelector(state => state.rezumator);

  const { register, handleSubmit, setValue, getValues } = useForm<{
    rezumator: RezumatorState;
  }>({ mode: 'onChange', defaultValues: { rezumator } });
  const { setRezumator } = useActions();

  useSaveRezumatorToStorage({ rezumator }, setValue, getValues);

  const onSubmit: SubmitHandler<{ rezumator: RezumatorState }> = data => {
    setRezumator(data.rezumator);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit)
  };
};
