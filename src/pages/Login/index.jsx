import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Logo from '../../assets/images/Logo.jpg';
import Input from '../../components/Input';
// import { useAuth } from '../../provider/Auth';
// import { Container } from './styles';

function Login() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha inválida'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const { handleLogin } = useAuth();

  const onSubmitFunction = (data) => {
    console.log(data);
    history.push('/rating');
    // handleLogin(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <main>
        <img src={Logo} alt='Logo' />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Acesso de Usuário</h2>
          <Input
            label='Seu e-mail'
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            name='email'
            register={register}
          />
          <Input
            label='Sua senha'
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            name='password'
            register={register}
            type='password'
          />
          <button type='submit'>Entrar</button>
          <p>Não possui uma conta?</p>
          <button type='button' onClick={() => history.push('/register')}>
            Cadastre-se
          </button>
        </form>
      </main>
    </motion.div>
  );
}

export default Login;
