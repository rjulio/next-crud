interface InputProps{
    label: string;
    type: 'text' | 'number';
    value: any;
    readOnly?: boolean;
    valueChanged?: (value: any) => void;
    className?: string;
}

export default function Input(props: InputProps) {
    return (
        <div className={`
            flex flex-col ${ props.className }
        `}>
            <label 
                htmlFor=""
                className="mb-4">
                { props.text }
            </label>
            <input 
                type={ props.type || 'text' } 
                value={ props.value } 
                readOnly={ props.readOnly }
                className={`
                    bg-gray-100
                    border border-purple-500 rounded-lg
                    focus:outline-none ${ !props.readOnly ? 'focus:bg-white' : '' }
                    px-4 py-2
                `}
                onChange={ (e) => props.valueChanged(e.target.value) }
            />
        </div>
    );
}