import { useState } from "react";

const MyCounter = () => {
    // useState
    const [num, setNum] = useState(0);

    // onClick Event = > Count Up/Down
    // const onClickCntUp = () => {
    //     setNum(num + 1);
    // };
    // const onClickCntDown = () => {
    //     setNum(num - 1);
    // }; 테스트
    const onClickCntUp = () => setNum(num => num + 1);
    const onClickCntDown = () => setNum(num => num - 1);

    return (
        <>
            <p>{num}</p>
            <button onClick={onClickCntUp}>Count up</button> &nbsp;
            <button onClick={onClickCntDown}>Count down</button>
        </>
    );
};


export default MyCounter;