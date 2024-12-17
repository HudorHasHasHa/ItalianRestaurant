import { useState } from 'react';

export interface ISelectItems {
    value: string | number;
    text: string;
}

export interface ICustomSelectPropsModel {
    label: string;
    items: ISelectItems[];
}

export default function CustomSelect({
    label,
    items,
}: ICustomSelectPropsModel) {
    const [selectedOption, setSelectedOption] = useState<
        string | number | undefined
    >(undefined);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="d-flex flex-column">
            <label htmlFor={label}>{label}</label>
            <select
                id={label}
                value={selectedOption ?? ''}
                onChange={handleChange}
                className="form-control"
            >
                <option value="" disabled>
                    - select -
                </option>
                {items.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
}
