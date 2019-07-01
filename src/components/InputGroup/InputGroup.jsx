import React from 'react';
import "./InputGroup.scss";
const InputGroup = ({ field={}, type, labelContent, error, touched }) => {


    const inputClassname = () => {
        const active = field.value ? "active" : "";
        const errorClass = touched ? error ? "error" : "" : "";
        let className=''
        if (active)
            className+= active;
        if (errorClass)
            className+= " " + errorClass;
        return className;
    }

    return (
        <div className="input-group">
            <div className="input">
                <input {...field} type={type} id={field.name} className={inputClassname()} autoComplete="true" />
                <label htmlFor={field.name}>{labelContent}</label>
            </div>

            {touched && error ? <div className="error">
                {error}
            </div> : <div className="error" style={{ opacity: "0", visible: "hidden" }}>
                    1
            </div>}
        </div>
    );
};

export default InputGroup;