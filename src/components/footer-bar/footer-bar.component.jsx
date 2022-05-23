import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <div class="py-4 bg-dark">
                <Container className="px-4">
                    <p
                        class="text-center text-white"
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
