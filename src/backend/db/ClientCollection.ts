import firebase from '@/backend/config';

import Client from '@/core/Client';
import ClientRepo from '@/core/CLientRepo';

export default class ClientCollection implements ClientRepo {

    #convert = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age,
            };
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot, 
            options: firebase.firestore.SnapshotOptions
        ): Client {
            const data = snapshot.data(options);
            return new Client(data.name, data.age, snapshot.id);
        }
    };

    #collection() {
        return firebase.firestore().collection('clients').withConverter(this.#convert);
    }

    async save(client: Client): Promise<Client> {
        if (client?.id) {
            await this.#collection().doc(client.id).set(client);
            return client;
        } else {
            const docRef = await this.#collection().add(client);
            const doc = await docRef.get();
            return doc.data();
        }
    }
    
    async delete(client: Client): Promise<Client> {
        return this.#collection().doc(client.id).delete();
    }
    
    async getAll(): Promise<Client[]> {
        const query = await this.#collection().get();
        return query.docs.map((doc) => doc.data()) ?? [];
    }

}