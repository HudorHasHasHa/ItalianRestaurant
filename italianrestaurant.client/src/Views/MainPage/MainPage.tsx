import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustonInput";
import Navbar from "../../components/Navbar/Navbar";

export default function MainPage() {
    const [inp1, changeInp1] = useState("")
    
    const content  = 
    <>
        <Navbar/>
        <CustomInput label="test" onValueChange={changeInp1}/>
        <span>{ inp1 }</span>
    </>

    return content;
}