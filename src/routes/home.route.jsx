import { Carousel } from "react-bootstrap";

import HomeImg from "../assets/images/code-everywhere.jpg";
import HomeImg3 from "../assets/images/code-light.jpg";
import HomeImg2 from "../assets/images/design2.jpg";
import { MajorMono, Montserrat, FiraCode } from "../styles/text-types.styles";

const HomeCarousel = () => (
    <Carousel fade>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={HomeImg}
                alt="First slide"
                style={{ maxHeight: "1080px" }}
            />
            <Carousel.Caption style={{ marginBottom: "30%" }}>
                <Montserrat.Title
                    style={{
                        color: "#ffffff",
                        backgroundColor: "#ff00ff15",
                        textShadow: "1px 1px #6d6d14",
                        fontWeight: "bold",
                    }}
                >
                    Hi, I'm John, a software engineer.
                </Montserrat.Title>
            </Carousel.Caption>
            <Carousel.Caption>
                <Montserrat.SubTitle
                    style={{
                        fontSize: "1.2rem",
                        textShadow: "1px 1px #6d6d14",
                        backgroundColor: "#ff00ff20",
                    }}
                >
                    I work smart and relentlessly to meet your requirements and
                    expectations to yield business values.
                </Montserrat.SubTitle>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={HomeImg2}
                alt="Second slide"
                style={{ maxHeight: "1080px" }}
            />

            <Carousel.Caption style={{ marginBottom: "10%" }}>
                <MajorMono.Title
                    style={{
                        color: "#ff0000bb",
                        backgroundColor: "#55550030",
                        textShadow: "1px 1px #303030",
                        fontWeight: "bold",
                    }}
                >
                    From planning, design, and development to deployment.
                </MajorMono.Title>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={HomeImg3}
                alt="Third slide"
                style={{ maxHeight: "1080px" }}
            />

            <Carousel.Caption>
                <h1
                    style={{
                        color: "#ffffff",
                        textShadow: "2px 2px #6d6d14",
                        fontWeight: "bold",
                    }}
                >
                    Creative and Maintainable Solution
                </h1>
                <FiraCode.Text
                    style={{
                        color: "#ffffff",
                        background: "#30303070",
                        textShadow: "1px 1px #505050",
                        fontSize: "1.2rem",
                    }}
                >
                    by creating reusable components with simple responsibility
                    that represents a part of entire automation flow
                </FiraCode.Text>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

const Home = () => {
    return (
        <>
            <HomeCarousel />
        </>
    );
};

export default Home;
