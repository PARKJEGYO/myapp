const MyCompo = ({color, msg}) => {

    // 구조 분해 할당 (분할 대입)
    // const { color, msg } = props;

    // CSS 정의
    const txtStyle = {
        fontSize: '20px', fontWeight: 'bold', color: color
    };

    return <p style={ txtStyle }>{msg}</p>

};

export default MyCompo;