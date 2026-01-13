import { useState } from "react";

const MyPerson = () => {
    // useState
    const [person, setPerson] = useState( {name: "Superman", age: 20} ); // 객체 초기값 지정

    // 상태 업데이트 함수 정의
    const handleNameChange = (e) => {
       console.log(e.target.value);
       
       
    };
};

export default MyPerson;