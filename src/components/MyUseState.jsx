import { useState } from "react";

const MyPerson = () => {
    // useState
    const [person, setPerson] = useState({ name: "Superman", age: 20 }); // 객체 초기값 지정

    // 상태 업데이트 함수 정의
    const handleNameChange = (e) => {
        console.log(e.target.value); // 이 값은 무엇? => 입력 폼에 사용자가 입력하는 값
        setPerson({ ...person, name: e.target.value });
        // 위에서 ...person 이렇게 복사를 하지 않아도 에러는 없지만, 이것은 객체를 직접 수정하기때문에 권장x


    };

    return (
        <>
            <p>Name : {person.name}</p>
            <p>Age: {person.age}</p>
            <input type="text" value={person.name} onChange={handleNameChange} />
        </>

    );
};

export default MyPerson;