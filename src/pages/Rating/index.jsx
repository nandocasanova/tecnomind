import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Input from '../../components/Input';

function Rating() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    description: yup.string().required('Descrição obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    history.push('/');
    // handleLogin(data);
  };
  return (
    <main>
      <h2> AVALIAÇÃO</h2>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Fale o que acha do nosso site/produto:</h3>

        <Input
          label='Nos diga oque achou'
          error={!!errors.description?.message}
          helperText={errors.description?.message}
          name='description'
          register={register}
        />

        <span>Deixe sua nota:</span>
        <button type='submit'>Enviar</button>
        <button type='button' onClick={() => history.push('/')}>
          Voltar
        </button>
      </form>
    </main>
  );
}

export default Rating;
