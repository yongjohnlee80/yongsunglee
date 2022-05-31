import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <div className="py-4 bg-dark">
                <Container className="px-4">
                    <p
                        className="text-center text-white"
                        style={{
                            fontFamily: "Bree Serif",
                        }}
                    >
                        Copyright &copy; Yong Sung John Lee 2022
                    </p>
                </Container>
            </div>
        </>
    );
};

export default Footer;
