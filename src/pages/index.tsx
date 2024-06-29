// import { useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import Table from '@/components/Table';
import Button from '@/components/Button';
import Form from '@/components/Form';

// import Client from '@/core/Client';
// import ClientRepo from '@/core/ClientRepo';
// import ClientCollection from '@/backend/db/ClientCollection';

import useClients from '@/hooks/useClients';

export default function Home() {
  const { 
    newClient, 
    selectedClient, 
    deletedClient, 
    saveClient, 
    client, 
    clients, 
    isFormVisible, 
    isTableVisible,
    showTable
  } = useClients();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro simples">

        { isTableVisible && 
          <>
            <div className="flex justify-end">
              <Button 
                color="green" 
                className="mb-4"
                onClick={ newClient }>
                Novo cliente
              </Button>
            </div>
            
            <Table 
              clients={clients}
              selectedClient={ selectedClient }
              deletedClient={ deletedClient } />
          </>
        }

        {
          isFormVisible && 
          <Form 
            client={ client }
            canceled={ showTable }
            changed={ saveClient } />
        }
      </Layout>
    </div>
  );
}
