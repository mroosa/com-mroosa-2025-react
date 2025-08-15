import { type ReactElement } from "react";
import InputField, {type InputProps} from "./InputField";
import styles from "./Input.module.css"



const Input = (props:InputProps) => {

    // Extract label-only props
    const {name, type, labeledBy} = props;

    // Set wrapper class(es)
    let wrapperClasses = "input-wrap";
    if (type === 'submit') wrapperClasses += " submit-wrap";

    function generateNameFromLabel(inputLabel:string):string {
        // Create friendly name w/o uppercase/space/symbols
        // TODO: fix concurrent "_"
        let newLabel = inputLabel.trim().toLowerCase().replaceAll(" ","_").replaceAll(/[^a-zA-Z0-9_]/g,"");
        return newLabel;
    }
    let newName = (labeledBy && !name) ? generateNameFromLabel(labeledBy) : name;

    // Build Label
    function Label():ReactElement|undefined {
        if (labeledBy) {
            return <label htmlFor={newName}>{labeledBy}</label>
        }
    }

    return (
        <div className={(type!=="hidden") ? wrapperClasses : styles.hidden}>
            <Label />
            <InputField 
                name={newName}
                id={props.id}
                type={type}
                value={props.value||""}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    )
};

export default Input;
