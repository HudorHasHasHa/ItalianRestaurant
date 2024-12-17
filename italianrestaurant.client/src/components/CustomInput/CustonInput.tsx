import { ICustomInputPropsModel } from './CustomInputTypes';

function CustomInput({ label, onValueChange }: ICustomInputPropsModel) {
    const handleChange = (value: string) => {
        onValueChange(value);
    };

    return (
        <div className="d-flex flex-column">
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type="text"
                className="form-control"
                onChange={(val) => handleChange(val.target.value)}
            ></input>
        </div>
    );
}

export default CustomInput;
