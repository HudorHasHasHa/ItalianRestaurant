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
        <>
            <label>{label}</label>
            <select value={selectedOption} onChange={handleChange}>
                {items.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        </>
    );
}
