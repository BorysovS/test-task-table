import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { logIn } from '../../redux/Authorization/operation';
import { useAppDispatch } from '../../hooks/hook';


interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();
    



  const onSubmit: SubmitHandler<LoginFormValues> = async (data: LoginFormValues) => {
    try {
        dispatch(logIn(data));
        console.log(data)
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            {...register('username', { required: true })}
          />
          {errors.username && <span>Email is required</span>}
        </div>
        <div>
          <input
            placeholder="Confirm a password"
            type="text"
            {...register('password', { required: true })}
          />

          {errors.password && <span>Password is required</span>}
        </div>
        <button type="submit">Log In Now</button>
      </form>
    </div>
  );
};
