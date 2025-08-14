import { useState } from "react";

// TODO: add more types. This is just simple for project use case.

export interface InputProps {
    type: string,
    name?: string,
    id?: string,
    value?: string,
    labeledBy?: string,
    placeholder?: string,
    required?: boolean,
}

const InputField = (props: InputProps) => {

    // Extract all props
    const {type, name, id, value, placeholder, required} = props
    // Declare useState for input values
    const [inputVal, setInputVal] = useState(value);

    // Switch output based on type of input
    switch (type) {
        case 'textarea':            
            return <textarea id={id||name} name={name} onChange={e=>setInputVal(e.currentTarget.value)} required={required} value={inputVal}></textarea>
            break;
        case 'submit':
            return (
                <>
                    <span className="throbber"></span>
                    <input type={type} value={value||'Submit'} id={id||name} name={name} />
                </>
            )
            break;
        default:
            return (
                <input 
                    type={type}
                    id={id||name}
                    name={name}
                    value={inputVal}
                    placeholder={placeholder}
                    onChange={e=>setInputVal(e.currentTarget.value)}
                    required={required}
                />
            )
    }
}
export default InputField;