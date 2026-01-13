import { useState } from "react";

const MyTodos = () => {
    return (
        <>

            <ul style={{listStyle: 'none'}}>
                <li key='1'>1 : 마트에서 장 보기</li>
                <li key='2'>2 : 유치원에서 아이들 픽업하기</li>
                <li key='3'>3 : 아이스크림 사가기</li>
            </ul>
            <input type="text" /> &nbsp;
            <button>나의 할 일 추가하기</button>
            (/*
                필요한 작업들 (최소한의 필수 기능 위주로 구현)

                1. useState() 사용하여 상태 관리
                    - 나의 할 일 저장하는 배열이 필요 =>
                    
            */)
        </>
    );
};

export default MyTodos;