import { NextPage } from 'next';
import { Layout } from '@/layout/Layout';

const NotFound: NextPage = () => {
  return (
    <Layout title='404' description='Страница не найдена!'>
      404 ошибка
    </Layout>
  );
};

export default NotFound;
