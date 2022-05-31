import { LinkBarStyle } from "./link-bar.styles";
import { Image } from "react-bootstrap";

import GithubIcon from "../../assets/github.svg";
import LinkedInIcon from "../../assets/linkedin.svg";

const LinkBar = () => {
    const LinkedInAddr =
        "https://www.linkedin.com/in/yong-sung-john-lee-a4a9591bb/";
    const GitHubAddr = "https://github.com/yongjohnlee80";
    return (
        <>
            <LinkBarStyle.Container>
                <LinkBarStyle.Item>
                    <Image src={GithubIcon} height="30px" />
                    <LinkBarStyle.Link
                        href={GitHubAddr}
                        target="_blank"
                        rel="noreferrer"
                    >{" "}
                        GitHub
                    </LinkBarStyle.Link>
                </LinkBarStyle.Item>
                <LinkBarStyle.Item>
                    <Image src={LinkedInIcon} height="30px" />
                    <LinkBarStyle.Link
                        href={LinkedInAddr}
                        target="_blank"
                        rel="noreferrer"
                    >{" "}
                        LinkedIn
                    </LinkBarStyle.Link>
                </LinkBarStyle.Item>
            </LinkBarStyle.Container>
        </>
    );
};

export default LinkBar;
