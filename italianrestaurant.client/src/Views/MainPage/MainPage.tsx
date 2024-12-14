import { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustonInput';
import SidePanel from '../../components/SidePanel/SidePanel';

export default function MainPage() {
    const [inp1, changeInp1] = useState('');

    const content = (
        <>
            <SidePanel />
            <CustomInput label="test" onValueChange={changeInp1} />
            <span>{inp1}</span>
        </>
    );

    return content;
}
