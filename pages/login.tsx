import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AuthFields } from '@/components/common/auth-fields/AuthFields';
import { Button } from '@/components/common/ui/Button';
import { AuthContext } from '@/context/AuthContext';
import { useAuthForm } from '@/hooks/useAuthForm';
import { Layout } from '@/layout/Layout';
import { AuthService } from '@/services/auth/auth.service';
import { SimpleUser } from '@/services/auth/auth.types';
import styles from '@/styles/Auth.repeat.module.css';

const Login: NextPage = () => {
  const [error, setError] = useState('');
  const { register, errors, handleSubmit } = useAuthForm();

  const { push } = useRouter();
  const { setAuthToken } = useContext(AuthContext);

  const login: SubmitHandler<SimpleUser> = async ({ username, password }) => {
    setError('');

    try {
      const user = await AuthService.login(username.trim(), password.trim());

      if (user.id) {
        setAuthToken(user.id);
        push('/rezumator');
      } else {
        setError('Такого пользователя не существует!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout title='Авторизация' description='Авторизация'>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit(login)}>
          <AuthFields register={register} errors={errors} />
          {error && <span className={styles.error}>{error}</span>}
          <Button type='submit' className={styles.btn}>
            Войти
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
