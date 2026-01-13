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
    // }; 
    // const onClickCntUp = () => setNum(num => num + 1);
    // const onClickCntDown = () => setNum(num => num - 1);

    return (
        <>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>Count up</button> &nbsp;
            {/* <button onClick={() => { if (num > 0) setNum(num - 1); }}>Count down</button> */}
            <button onClick={() => { setNum(num > 0 ? num - 1 : num); }}>Count down</button>

        </>
    );
};


export default MyCounter;