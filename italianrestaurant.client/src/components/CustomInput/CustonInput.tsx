import { ICustomInputPropsModel } from "../../models/ICustomInputPropsModel";

function CustomInput({ label, onValueChange }: ICustomInputPropsModel) {
const handleChange = (value: string) => {
        onValueChange(value);
    }

    const content = <>
        <label>{label}</label>
        <input onChange={(val) => handleChange(val.target.value)}></input>
    </>

    return content;
}

export default CustomInput;