import { Carousel } from "react-bootstrap";

import HomeImg from "../assets/images/code-everywhere.jpg";
import HomeImg3 from "../assets/images/code-light.jpg";
import HomeImg2 from "../assets/images/design2.jpg";
import { Koulen, Montserrat, FiraCode } from "../styles/text-types.styles";
import ResumeContent from "../data/resume.data";

const MAX_HEIGHT = "950px";
const MIN_HEIGHT = "400px";

const HomeCarousel = () => (
    <Carousel fade>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={HomeImg}
                alt="First slide"
                style={{ maxHeight: MAX_HEIGHT, minHeight: MIN_HEIGHT }}
            />
            <Carousel.Caption style={{ marginBottom: "25%" }}>
                <Montserrat.Title
                    style={{
                        color: "#ffffff",
                        background: "#30303070",

                        textShadow: "1px 1px #000000",
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
                        color: "#ffffff",
                        background: "#30303070",
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
                style={{ maxHeight: MAX_HEIGHT, minHeight: MIN_HEIGHT }}
            />

            <Carousel.Caption style={{ marginBottom: "5%" }}>
                <Koulen.Title
                    style={{
                        color: "#2536ae",
                        textShadow: "1px 1px #303030",
                        fontWeight: "bold",
                    }}
                >
                    FROM PLANING, DESIGN, AND DEVELOPMENT TO CONTINOUS
                    DEPLOYMENT.
                </Koulen.Title>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={HomeImg3}
                alt="Third slide"
                style={{ maxHeight: MAX_HEIGHT, minHeight: MIN_HEIGHT }}
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
            <div sytle={{ padding: "5rem" }}>
                <h3
                    style={{
                        margin: "10%",
                        textAlign: "center",
                        color: "#202020aa",
                    }}
                >
                    {ResumeContent.summary}
                </h3>
                <h3
                    style={{
                        margin: "10%",
                        textAlign: "center",
                        color: "#202020aa",
                    }}
                >
                    {ResumeContent.slogan}
                </h3>
            </div>
        </>
    );
};

export default Home;
