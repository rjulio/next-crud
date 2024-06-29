import Client from '@/core/Client';

export default interface ClientRepo {
    save(client: Client): Promise<Client>;
    delete(client: Client): Promise<Client>;
    getAll(client: Client): Promise<Client[]>;
}