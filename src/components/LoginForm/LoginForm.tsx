import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { logIn } from '../../redux/Authorization/operation';
import { useAppDispatch } from '../../hooks/hook';
import { Button, ErrorMessage, Form, FormContainer, Input } from './LoginForm.styled';


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
    <FormContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="text"
            placeholder="Enter your name"
            {...register('username', { required: true })}
          />
          {errors.username && <ErrorMessage>Email is required</ErrorMessage>}
        </div>
        <div>
          <Input
            placeholder="Confirm a password"
            type="text"
            {...register('password', { required: true })}
          />

          {errors.password && <ErrorMessage>Password is required</ErrorMessage>}
        </div>
        <Button type="submit">Log In Now</Button>
      </Form>
    </FormContainer>
  );
};
