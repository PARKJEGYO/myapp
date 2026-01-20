import MyCompo from "./MyCompo";
import MyTodos from "./MyTodos";

const Header = () => {
    return (
        <>
            
            <header style={{
                border: '0px red',
                backgroundColor: 'lightblue',
                textAlign: 'center',
                padding: '10px'
            }}  >
                Header
                <MyCompo color='purple'>Welcome to Seoul</MyCompo>
                <MyTodos />
            </header>
        </>
    );
};

export default Header;