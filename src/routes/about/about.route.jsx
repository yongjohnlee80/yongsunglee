import { Container, Row, Col, Image } from "react-bootstrap";

import Profile from "../../assets/profile-picture.jpg";
import { Resume } from "./resume.styles";

const freelanceWorks = [
    {
        title: "New Look Autobody Ltd. (2022)",
        link: "https://www.newlook-autobody.com",
    },
];

const resumeExperiences = [
    {
        title: "Freelance",
        company: "",
        period: "2022 - Present",
        projects: freelanceWorks,
    },
];

const resumeSkills = [
    "•	C#, C/C++, Java, Python, and JavaScript.",
    "•	Visual Studio, VS Code, Git, NUnit Framework, React.js, Docker, R Studio, Godot, Firebase, and Netlify.",
    "•	Critical thinking in analyzing algorithms, data, and design principles.",
    "•	OOP and design patterns.",
    "•	Excellent communication skills",
];

const resumeEducations = [
    {
        school: "University of the People",
        degree: "Bachelor of Science",
        study: "in Computer Science",
        grade: "Summa Cum Laude (CGPA: 3.89)",
        period: "Sept. 2018 - Nov. 2021",
    },
    {
        school: "Harvard Business School Online",
        degree: "Credential Of REadiness (certificate)",
        study: "in Business Analytics, Economics for Managers, Financial Accounting",
        grade: "Pass with High Honors",
        period: "Jun. 2021 - Sept. 2021 ",
    },
];

const resumeContent = {
    summary:
        "I'm a critical thinker and creative problem solver. Trained as a software engineer with passion to learn and grow with my clients, I welcome fresh challenges that will enhance your marketting and automation.",
    experiences: resumeExperiences,
    skills: resumeSkills,
    educations: resumeEducations,
};

const ExperienceCard = ({ item }) => {
    const projects = item.projects;
    return (
        <>
            <Resume.SubTitle>
                {item.title} {item.company}
            </Resume.SubTitle>
            <Resume.P>({item.period})</Resume.P>
            {projects.map((work) => (
                <div key={work.title}>
                    <Resume.P>{work.title}</Resume.P>
                    <Resume.Link>{work.link}</Resume.Link>
                </div>
            ))}
        </>
    );
};

const EducationCard = ({ item }) => {
    return (
        <>
            <Resume.SubTitle>
                {item.degree} - {item.school}
            </Resume.SubTitle>
            <Resume.P>({item.period})</Resume.P>
            <Resume.P>{item.grade} {item.study}</Resume.P>
        </>
    );
};

const SkillCard = ({item}) => {
    return (
        <>
            <Resume.P>{item}</Resume.P>
        </>
    )
}

const About = () => {
    let smLeft = 3,
        smRight = 9;
    let sxLeft = 12,
        sxRight = 12;

    const experiences = resumeContent.experiences;
    const educations = resumeContent.educations;
    const skills = resumeContent.skills;

    return (
        <>
            <Container
                fluid
                style={{
                    padding: "1rem",
                    color: "#202020",
                    backgroundColor: "#00000050",
                }}
            >
                <Row>
                    <Col sm={smLeft} xs={sxLeft}>
                        <Image src={Profile} roundedCircle fluid />
                    </Col>
                    <Col
                        sm={smRight}
                        style={{ paddingLeft: "5rem", paddingTop: "4rem" }}
                    >
                        <Resume.Title>Yong Sung John Lee</Resume.Title>
                        <Resume.SubTitle>Software Engineer</Resume.SubTitle>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
                    <Col sm={smLeft} xs={sxRight}>
                        <Resume.SubTitle>SUMMARY</Resume.SubTitle>
                        <p>{resumeContent.summary}</p>
                    </Col>
                    <Col sm={smRight}>
                        <Resume.SubTitle style={{}}>
                            WORK EXPERIENCE
                        </Resume.SubTitle>
                        <div>
                            {experiences.map((item) => (
                                <ExperienceCard key={item.title} item={item} />
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
                    <Col sm={smLeft} xs={sxLeft}>
                        <Resume.SubTitle>SKILLS</Resume.SubTitle>
                        {skills.map((item)=>(
                            <SkillCard key={item} item={item}/>
                        ))}
                    </Col>
                    <Col sm={smRight} xs={sxRight}>
                        <Resume.SubTitle style={{}}>EDUCATION</Resume.SubTitle>
                        <div>
                            {educations.map((item) => (
                                <EducationCard key={item.school} item={item} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;

// {cartItems.map((item) => (
//     <CartItem key={item.id} cartItem={item} />
// ))}
