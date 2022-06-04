const freelanceWorks = [
    {
        title: "Rick McNary. (June, 2022)",
        stack: "{JS, HTML5, CSS, SCSS, React, Next.js & Bootstrap}",
        link: "https://www.RickMcNary.com",
    },
    {
        title: "New Look Autobody Ltd. (May, 2022)",
        stack: "{Javascript, HTML5, StyledComponent & React}",
        link: "https://www.newlook-autobody.com",
    },

];

const resumeExperiences = [
    {
        title: "Freelancer",
        company: "",
        period: "2022 - Present",
        projects: freelanceWorks,
    },
    {
        title: "Sr. Technician",
        company: "Dozyn Dezyn Properties",
        period: "June 2015 - October 2021",
        projects: [
            {title: "Running day to day operations: scheduling and conducting inspections, maintenances, repairs, overseeing contractors, and handling tenant complaints.",}
        ],
    }
];

const resumeSkills = [
    "•	C#, C/C++, Java, Python, and JavaScript.",
    "•	Visual Studio, VS Code, Git, NUnit Framework, React, Node, jQuery, Express.js, Docker, R Studio, Godot, Firebase, and Netlify.",
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
        school: "Harvard Business School",
        degree: "Credential Of REadiness (certificate)",
        study: "in Business Analytics, Economics for Managers, Financial Accounting",
        grade: "Pass with High Honors",
        period: "Jun. 2021 - Sept. 2021 ",
    },
];

const resumeActivities = [
    {
        title: "A 2D Platformer game",
        period: "current",
        desc: "Currently in the process of publishing an indie platfomer game, created with Godot Engine3",
    },
    {
        title: "Advent of Code 2020",
        period: "Nov., 2021 - Dec., 2021",
        desc: "Completed AOC 2020 problems with C# and NUnit test framework. It was a friendly code showoff with an industry veteran, Kee Nam (Sr. Software Engineer with Lucidea) who has shown and guided me through ins and outs of C# and NUnit test framework.",
        link: "https://github.com/yongjohnlee80/AdventOfCode2020",
    },
];

const ResumeContent = {
    summary:
        "I'm a critical thinker and a creative problem solver. Trained as a software engineer with passion to learn and grow, I welcome fresh challenges that will enhance your marketing needs and automation requirements.",
    experiences: resumeExperiences,
    skills: resumeSkills,
    educations: resumeEducations,
    activities: resumeActivities,
    slogan: "My goal is to provide you with creative and maintainable solution via reusable components with a simple responsibility that represents a part of entire automation flow",
};

export default ResumeContent;