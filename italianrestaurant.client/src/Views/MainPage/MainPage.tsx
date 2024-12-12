import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustonInput";

export default function MainPage() {
    const [inp1, changeInp1] = useState("")
    
    const content  = 
    <>
        <CustomInput onValueChange={changeInp1}/>
        <span>{ inp1 }</span>
    </>

    return content;
}