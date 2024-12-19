import CustomRadio from '../CustomRadio/CustomRadio';
import { CustomRadioGroupProps } from './CustomRadioGroupTypes';

export default function CustomRadioGroup({
    label,
    groupOptions,
    onChange,
}: CustomRadioGroupProps) {
    return (
        <div>
            <label>{label}</label>
            {groupOptions.map((radio) => (
                <CustomRadio key={radio.value} onChange={onChange} {...radio} />
            ))}
        </div>
    );
}
