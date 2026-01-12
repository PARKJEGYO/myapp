import MyCompo from "./MyCompo";

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
            </header>
        </>
    );
};

export default Header;