import Layout from '@/components/Layout';
import Table from '@/components/Table';

import Client from '@/core/Client';

export default function Home() {

  const clients = [
    new  Client('Ana', 23, 1),
    new  Client('Bia', 45, 2),
    new  Client('Carlos', 40, 3),
    new  Client('Pedro', 25, 4),
  ];

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro simples">
        <Table clients={clients} />
      </Layout>
    </div>
  );
}
