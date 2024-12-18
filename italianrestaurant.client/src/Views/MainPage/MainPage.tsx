import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustonInput';
import SidePanel from '../../components/SidePanel/SidePanel';
import { ISelectItems } from '../../components/CustomSelect/CustomSelectTypes';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import CustomRadioGroup from '../../components/CustomRadioGroup/CustomRadioGroup';
import CustomList from '../../components/CustomList/CustomList';
import { customListItems } from '../../components/CustomListItem/CustomListItemTypes';

export default function MainPage() {
    const [inp1, changeInp1] = useState('');
    const mockedItems: ISelectItems[] = [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' },
        { value: 4, text: 'Option 4' },
        { value: 5, text: 'Option 5' },
    ];
    // const [checked, radioCheck] = useState<boolean>(false);

    // const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     radioCheck(!!event.target.value);
    // };

    // Groups
    const [typeOfSomething, setTypeOfSomething] = useState<number>(0);

    const mockedRadioOptions = [
        {
            value: 1,
            label: 'Option 1',
            checked: typeOfSomething == 1,
        },
        {
            value: 2,
            label: 'Option 2',
            checked: typeOfSomething == 2,
        },
        {
            value: 3,
            label: 'Option 3',
            checked: typeOfSomething == 3,
        },
    ];

    const handleRadioGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeOfSomething(+event.target.value);
        console.log(typeOfSomething);
    };

    const content = (
        <>
            <SidePanel />
            <CustomInput label="test" onValueChange={changeInp1} />
            <span>{inp1}</span>

            <CustomSelect label="test" items={mockedItems} />

            {/* <CustomRadio
                checked={checked}
                label="test"
                onChange={(e) => handleRadio(e)}
                value={1}
                key="blabla"
            /> */}
            <CustomRadioGroup
                groupOptions={mockedRadioOptions}
                onChange={handleRadioGroup}
                label="typeofsomething"
                key={'yey'}
            />

            {typeOfSomething}

            <CustomList listItems={customListItems} />
        </>
    );

    return content;
}
