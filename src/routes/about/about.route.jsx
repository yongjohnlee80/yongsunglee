import { Container, Row, Col, Image } from "react-bootstrap";

import Profile from "../../assets/profile-picture.jpg";
import { Resume } from "./resume.styles";

import ResumeContent from "../../data/resume.data";

const ExperienceCard = ({ item }) => {
    const projects = item.projects;
    return (
        <>
            <Resume.Container>
                <Resume.Section>{item.title}</Resume.Section>
                <Resume.P style={{ textAlign: "end", marginRight: "3rem" }}>
                    <em>{item.company}</em>
                </Resume.P>
            </Resume.Container>
            <Resume.P style={{ textAlign: "end", marginRight: "3rem" }}>
                ({item.period})
            </Resume.P>
            {projects.map((work) => (
                <>
                <div key={work.title}>
                    <Resume.P style={{fontWeight:"bold"}}>{work.title}</Resume.P>
                    <Resume.P>{work.stack}</Resume.P>
                    {work.link && (
                        <Resume.Link
                            href={work.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {work.link}
                        </Resume.Link>
                    )}
                </div>
                <div style={{paddingTop:"2rem"}}/>
                </>
            ))}
            <div style={{ padding: "1rem" }} />
        </>
    );
};

const EducationCard = ({ item }) => {
    return (
        <>
            <Resume.Container>
                <Resume.Section>{item.degree} </Resume.Section>
                <Resume.P style={{ textAlign: "end", marginRight: "3rem" }}>
                    <em>{item.school}</em>
                </Resume.P>
            </Resume.Container>
            <Resume.P style={{ textAlign: "end", marginRight: "3rem" }}>
                ({item.period})
            </Resume.P>
            <Resume.P>
                {item.grade} {item.study}
            </Resume.P>
            <div style={{ padding: "1rem" }} />
        </>
    );
};

const SkillCard = ({ item }) => {
    return (
        <>
            <Resume.P>{item}</Resume.P>
        </>
    );
};

const ActivityCard = ({ item }) => {
    return (
        <>
            <Resume.Container>
                <Resume.Section>{item.title}</Resume.Section>
                <Resume.P style={{ textAlign: "end", marginRight: "3rem" }}>
                    ({item.period})
                </Resume.P>
            </Resume.Container>

            <Resume.P>{item.desc}</Resume.P>
            {item.link && (
                <Resume.Link href={item.link} target="_blank" rel="noreferrer">
                    Project Link
                </Resume.Link>
            )}
            <div style={{ padding: "1rem" }} />
        </>
    );
};

const About = () => {
    let smLeft = 4,
        smRight = 8;
    let sxLeft = 12,
        sxRight = 12;

    const experiences = ResumeContent.experiences;
    const educations = ResumeContent.educations;
    const skills = ResumeContent.skills;
    const activities = ResumeContent.activities;

    return (
        <>
            <Container
                fluid
                style={{
                    padding: "1rem",
                    color: "#202020",
                    backgroundColor: "#00000030",
                }}
            >
                <Row>
                    <Col sm={smLeft - 1} xs={sxLeft}>
                        <Image src={Profile} roundedCircle fluid />
                    </Col>
                    <Col
                        sm={smRight + 1}
                        style={{ paddingLeft: "5rem", paddingTop: "4rem" }}
                    >
                        <Resume.Title>Yong Sung John Lee</Resume.Title>
                        <Resume.SubTitle>Software Engineer</Resume.SubTitle>
                    </Col>
                </Row>
                <div style={{ padding: "2rem" }} />
                <Row style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
                    <Col
                        sm={smLeft}
                        xs={sxRight}
                        style={{ paddingBottom: "4rem" }}
                    >
                        <Resume.SubTitle>SUMMARY</Resume.SubTitle>
                        <Resume.P>{ResumeContent.summary}</Resume.P>
                    </Col>
                    <Col sm={smRight} style={{ paddingBottom: "1rem" }}>
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
                    <Col
                        sm={smLeft}
                        xs={sxLeft}
                        style={{ paddingBottom: "4rem" }}
                    >
                        <Resume.SubTitle>SKILLS</Resume.SubTitle>
                        {skills.map((item) => (
                            <SkillCard key={item} item={item} />
                        ))}
                    </Col>
                    <Col
                        sm={smRight}
                        xs={sxRight}
                        style={{ paddingBottom: "1rem" }}
                    >
                        <Resume.SubTitle style={{}}>EDUCATION</Resume.SubTitle>
                        <div>
                            {educations.map((item) => (
                                <EducationCard key={item.school} item={item} />
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "2rem", paddingLeft: "1rem" }}>
                    <Col sm={smLeft} xs={sxLeft}></Col>
                    <Col
                        sm={smRight}
                        xs={sxRight}
                        style={{ paddingBottom: "1rem" }}
                    >
                        <Resume.SubTitle style={{}}>
                            PROJECTS/ACTIVITIES
                        </Resume.SubTitle>
                        <div>
                            {activities.map((item) => (
                                <ActivityCard key={item.title} item={item} />
                            ))}
                        </div>
                    </Col>
                </Row>
                <div style={{ padding: "5%" }} />
            </Container>
        </>
    );
};

export default About;
