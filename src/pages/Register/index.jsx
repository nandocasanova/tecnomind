import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../components/Input';

function Register() {
  // const { handleRegister } = useAuth();
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .min(3, 'Nome mínimo com três letras')
      .max(50, 'Nome máximo com 50 letras')
      .matches(/^[ a-zA-Z áãàâ]*$/, 'Nome apenas com letras'),

    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),

    confirmarEmail: yup
      .string()
      .required('Confirmação de e-mail obrigatória')
      .oneOf([yup.ref('email')], 'E-mails precisam coincidir'),

    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'No mínimo 6 caracteres'),

    confirmPassword: yup
      .string()
      .required('Confirmação de senha obrigatória')
      .min(6, 'No mínimo 6 caracteres')
      .oneOf([yup.ref('password')], 'Senhas precisam coincidir'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    const newPost = {
      name: data.name,
      password: data.password,
      email: data.email,
    };
    console.log(newPost);
    history.push('/login');

    // handleRegister(newPost);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <h2>Cadastro</h2>
        <Input
          label='Nome'
          error={!!errors.name?.message}
          register={register}
          helperText={errors.name?.message}
          name='name'
        />

        <Input
          label='E-mail'
          error={!!errors.email?.message}
          register={register}
          helperText={errors.email?.message}
          name='email'
        />

        <Input
          label='Confirme seu e-mail'
          error={!!errors.confirmarEmail?.message}
          register={register}
          helperText={errors.confirmarEmail?.message}
          name='confirmarEmail'
        />

        <Input
          label='Senha'
          error={!!errors.password?.message}
          register={register}
          helperText={errors.password?.message}
          name='password'
          type='password'
          id='outlined-adornment-password'
        />

        <Input
          label='Confirme sua senha'
          error={!!errors.confirmPassword?.message}
          register={register}
          helperText={errors.confirmPassword?.message}
          name='confirmPassword'
          type='password'
        />

        <button type='submit'> Cadastrar</button>
      </form>
    </motion.div>
  );
}

export default Register;
