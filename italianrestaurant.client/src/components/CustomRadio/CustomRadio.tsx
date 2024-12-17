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
                className="me-2"
                type="radio"
                checked={checked}
                value={value}
                onChange={(e) => onChange(e)}
            ></input>
            <label className="form-check-label">{label}</label>
        </div>
    );
}
