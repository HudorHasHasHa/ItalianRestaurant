import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustonInput';
import SidePanel from '../../components/SidePanel/SidePanel';
import CustomSelect, {
    ISelectItems,
} from '../../components/CustomSelect/CustomSelect';

export default function MainPage() {
    const [inp1, changeInp1] = useState('');
    const mockedItems: ISelectItems[] = [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' },
        { value: 4, text: 'Option 4' },
        { value: 5, text: 'Option 5' },
    ];

    const content = (
        <>
            <SidePanel />
            <CustomInput label="test" onValueChange={changeInp1} />
            <span>{inp1}</span>

            <CustomSelect label="test" items={mockedItems} />
        </>
    );

    return content;
}
