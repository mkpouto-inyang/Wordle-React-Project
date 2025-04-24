import { useState } from "react"


const InputBox = () => {
    const [inputLetter, setInputLetter] = useState("")

    const wordLength = 5;
    let wordEntry = "";

    const handleNextInputFocus = (e) =>{
        const inputElement = e.target
        const letter = e.target.value

        // if input is filled, the input box is not the last, focus on the next input
        if ((letter.length != 0 && inputElement.nextSibling)){
            inputElement.nextSibling.focus()
        }
    }

    const logWordEntry = (e) =>{
        console.log('LOGWORDENTRY')
        // const letter = e.target.value
        // wordEntry = wordEntry + letter
        // console.log(wordEntry)
    }

    const capitalizeInput = (e) => {
        const letter = e.target.value
        const capitalizedLetter = letter.toUpperCase()
        setInputLetter(capitalizedLetter)
        console.log(e)
    }

    const handleChange = (e) =>{
        capitalizeInput(e);
        handleNextInputFocus(e);
        logWordEntry(e)
    }

    return ( 
        <>
            <input 
            className="w-[55px] h-[55px] border-[#d4d1d1] border rounded-[4px] text-center mr-2 font-bold text-[30px]" 
            value={inputLetter}
            maxLength={1}
            onChange={handleChange}>
            </input>
        </>
     );
}
 
export default InputBox;