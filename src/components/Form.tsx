import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

import Client from '@/core/Client';

interface FormProps{
    client: Client;
    canceled: () => void;
    changed?: (client: Client) => void;
}

export default function Form(props: FormProps) {
    const id = props.client?.id;
    const [name, setName] = useState(props.client?.name ?? '');
    const [age, setAge] = useState(props.client?.age ?? 0);

    return (
        <div>
            { id && <Input 
                text="Code"
                value={ id }
                readOnly
                className="mb-2"
            /> }

            <Input 
                text="Name"
                value={ name }
                valueChanged={ setName }
                className="mb-2"
            />

            <Input 
                text="Age"
                value={ age }
                type="number"
                valueChanged={ setAge }
            />

            <div className="flex justify-end mt-7">
                <Button 
                    color="blue" 
                    className="mr-2"
                    onClick={ () => props.changed?.(new Client(name, +age, id)) }>
                    { id ? 'Alterar' : 'Salvar' }
                </Button>
                <Button onClick={ props.canceled }>Cancelar</Button>
            </div>
        </div>
    );
}