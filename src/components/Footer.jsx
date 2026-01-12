import MyCompo from "./MyCompo";


const Footer = () => {
    return (
        <>
            <footer style={{
                backgroundColor: 'lightblue',
                textAlign: 'center',
                padding: '10px'
            }}>
                Footer
                <MyCompo color='purple'><div>
                    <ul>
                        <li>Lorem.</li>
                        <li>Porro!</li>
                        <li>Laboriosam.</li>
                        <li>Maiores.</li>
                    </ul>
                </div></MyCompo>

            </footer>

        </>
    );
};

export default Footer;