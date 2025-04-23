const InputBox = () => {

    const capitalizeInput = (e) =>{
        const letter = e.target.value
        console.log(letter)
    }
    return ( 
        <>
            <input 
            className="w-[55px] h-[55px] border-[#d4d1d1] border rounded-[4px] text-center mr-2 font-bold text-[30px]" 
            maxLength={1}
            onChange={capitalizeInput}>
            </input>
        </>
     );
}
 
export default InputBox;