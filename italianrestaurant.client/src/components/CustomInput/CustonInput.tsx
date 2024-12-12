interface CustomInputProps {
    onValueChange: (value: string) => void; // Define prop type for the callback
}

function CustomInput({ onValueChange }: CustomInputProps) {
const handleChange = (value: string) => {
        onValueChange(value);
    }

    const content = <input onChange={(val) => handleChange(val.target.value)}></input>

    return content;
}

export default CustomInput;