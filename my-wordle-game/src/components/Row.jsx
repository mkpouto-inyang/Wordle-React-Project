import InputBox from "./InputBox";

const Row = () => {
    return ( 
        <>
            <div className="flex gap-[4px] mb-[12px]">
                <InputBox></InputBox>
                <InputBox></InputBox>
                <InputBox></InputBox>
                <InputBox></InputBox>
                <InputBox></InputBox>
            </div>
        </>
     );
}
 
export default Row;