import { useState } from "react";

const MyTodos = () => {

    // useState
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState(''); // 새로 추가할 todo 상태관리
    const [updatingTodoId, setUpdatingTodoId] = useState(null);
    const [updatedText, setUpdatedText] = useState('');

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
        setUpdatingTodoId(id);

        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    // handleUpdate Function
    const handleUpdate = (id) => {
        setUpdatingTodoId(id);
        setUpdatedText(todos.find(todo => todo.id === id).text);
        // todos 배열에서 해당 todo 항목의 isUpdating을 true로 변경
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, isUpdating: true } : todo)
        );
    };
    return (
        <>

            {newTodo}
            <ul style={{ listStyle: 'none' }}>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.id}_[{todo.isUpdating ? 'true' : 'false'}]_[{ updatingTodoId}]
                            {
                                todo.isUpdating ? (
                                    <>
                                        <input type="text" value={updatedText} />
                                        <button>Save</button> <button>Cancel</button> &nbsp;
                                    </>
                                ) : (
                                    <>
                                        {todo.text} &nbsp;
                                        <button onClick={() => handleUpdate(todo.id)}>Update</button> &nbsp;
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