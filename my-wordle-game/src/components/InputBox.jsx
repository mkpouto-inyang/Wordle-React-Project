import { useState } from "react"


const InputBox = () => {
    const [inputLetter, setInputLetter] = useState("")

    const capitalizeInput = (e) => {
        const letter = e.target.value
        console.log(letter)
        const capitalizedLetter = letter.toUpperCase()
        setInputLetter(capitalizedLetter)
    }
    return ( 
        <>
            <input 
            className="w-[55px] h-[55px] border-[#d4d1d1] border rounded-[4px] text-center mr-2 font-bold text-[30px]" 
            value={inputLetter}
            maxLength={2}
            onChange={capitalizeInput}>
            </input>
        </>
     );
}
 
export default InputBox;