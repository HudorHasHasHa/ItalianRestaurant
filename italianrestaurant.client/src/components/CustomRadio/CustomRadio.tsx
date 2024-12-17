import { ICustomRadioPropsModel } from './CustomRadioTypes';

export default function CustomRadio({
    label,
    value,
    checked,
    onChange,
}: ICustomRadioPropsModel) {
    return (
        <div className="form-check">
            <input
                type="radio"
                checked={checked}
                value={value}
                onChange={onChange}
            ></input>
            <label className="form-check-label">{label}</label>
        </div>
    );
}
