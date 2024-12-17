import CustomRadio from '../CustomRadio/CustomRadio';
import { ICustomRadioGroupPropsModel } from './CustomRadioGroupTypes';

export default function CustomRadioGroup({
    label,
    groupOptions,
    onChange,
}: ICustomRadioGroupPropsModel) {
    return (
        <div>
            <label>{label}</label>
            {groupOptions.map((radio) => (
                <CustomRadio key={radio.value} onChange={onChange} {...radio} />
            ))}
        </div>
    );
}
