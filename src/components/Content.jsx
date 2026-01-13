import MyCounter from "./MyCounter";
import MyPerson from "./MyUseState";

const Content = () => {
    return (
    <>
        <main style={{
            backgroundColor: 'lightgreen',
            textAlign: 'center',
            padding: '50px',
            // height: '100px',
            // lineHeight: '100px'
        }}>
            <MyCounter />
            <MyPerson />

        </main>

    </>

    );
};

export default Content;