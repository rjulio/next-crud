import { useEffect, useState} from 'react';

import Client from '@/core/Client';
import ClientRepo from '@/core/ClientRepo';
import ClientCollection from '@/backend/db/ClientCollection';
import useVisible from '@/hooks/useVisible';

export default function useClients() {
    const [client, setClient] = useState<Client>(Client.empty);
    const [clients, setClients] = useState<Client[]>([]);

    const { showTable, showForm, isFormVisible, isTableVisible } = useVisible();

    const repo: ClientRepo = new ClientCollection();

    useEffect(getAll, []);

    function getAll() {
        repo.getAll().then((clients) => {
            setClients(clients);
            showTable();
        });
    }

    function selectedClient(client: Client) {
        setClient(client);
        showForm();
    }

    async function deletedClient(client: Client) {
        await repo.delete(client);
        getAll();
    }

    async function saveClient(client: Client) {
        await repo.save(client);
        getAll();
    }

    function newClient() {
        setClient(Client.empty());
        showForm();
    }

    return {
        client,
        clients,
        saveClient,
        selectedClient,
        deletedClient,
        saveClient,
        newClient,
        isFormVisible,
        isTableVisible,
        showTable
    }
}