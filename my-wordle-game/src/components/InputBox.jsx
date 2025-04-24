import { useState } from "react"


const InputBox = () => {
    const [inputLetter, setInputLetter] = useState("")

    const wordLength = 5;
    let wordEntry = "";

    const handleNextInputFocus = () =>{
        console.log('NEXTINPUTFOCUS FUNCTION')
    }

    const logWordEntry = () =>{
        console.log('LOGWORDENTRY')

    }

    const capitalizeInput = (e) => {
        const letter = e.target.value
        const capitalizedLetter = letter.toUpperCase()
        setInputLetter(capitalizedLetter)
        console.log(e)
    }

    const handleChange = (e) =>{
        capitalizeInput(e);
        handleNextInputFocus();
        logWordEntry()
    }

    return ( 
        <>
            <input 
            className="w-[55px] h-[55px] border-[#d4d1d1] border rounded-[4px] text-center mr-2 font-bold text-[30px]" 
            value={inputLetter}
            maxLength={2}
            onChange={handleChange}>
            </input>
        </>
     );
}
 
export default InputBox;