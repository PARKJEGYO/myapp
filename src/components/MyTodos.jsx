import { useState } from "react";

const MyTodos = () => {

    // useState
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState(''); // 새로 추가할 todo 상태관리

    // handleInputChange Fuction
    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    // handleAddTodo Function
    const handleAddTodo = () => {
        setTodos([...todos, { id: Date.now(), text: newTodo, isUpdating: false }]);
        setNewTodo(''); // 입력 폼 비우기

    };

    // handleDelete Function 
    // 삭제 구현 프로세스
    // 1. Filter 메서드를 사용하여 삭제할 항목을 일단 제외하고 새 배열 생성
    // 2. 새 배열로 반환된 상태를 업데이트하여 화면에 새롭게 반영 => setTodos(새 배열);
    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    // handleUpdate Function
    const handleUpdate = (id) => {
        const updatedTodos = todos.map(todo => {    
    return (
        <>

            {newTodo}
            <ul style={{ listStyle: 'none' }}>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {
                                todo.isUpdating ? (
                                    <>
                                        <input type="text" />
                                        <button>Save</button> <button>Delete</button> &nbsp;
                                    </> 
                                ) : (
                                    <>
                                        13413134134134 : 마트에서 장보기 <button>Update</button>
                                        <button onClick={ () => handleUpdate(todo.id) }>Update</button> &nbsp;
                                    </>
                                )
                            }
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>

                        </li>
                    ))
                }
            </ul >
            <input type="text" value={newTodo} onChange={handleInputChange} /> 
            <button onClick={handleAddTodo}>나의 할 일 추가하기</button>
        </>
    );
};

export default MyTodos;