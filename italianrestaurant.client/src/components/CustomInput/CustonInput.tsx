import { ICustomInputPropsModel } from "../../models/ICustomInputPropsModel";

function CustomInput({ onValueChange }: ICustomInputPropsModel) {
const handleChange = (value: string) => {
        onValueChange(value);
    }

    const content = <input onChange={(val) => handleChange(val.target.value)}></input>

    return content;
}

export default CustomInput;