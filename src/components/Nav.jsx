const Nav = () => {

    //Alert() 기능 구현
    const onClickBtn = () => {
        alert('Hello, World~!!');
    };

    // CSS 객체 구현
    const navStyle = {
        backgrondColor: 'green',
        textAlign: 'center',
        padding: '10px'
    };

    const btnStyle = {
        backgroundColor: 'navy', color: 'white'
    };


    return (
        <>
            <nav style={ navStyle }>
                { console.log("Hello, Console~!!")}
                Nav | <button style={btnStyle} onClick={onClickBtn}>Alert() 기능 구현</button>
            </nav>

        </>

    );
};

export default Nav;