import styled from "styled-components";

import networkImg from "../../assets/images/network4.jpg";

export const LinkBarStyle = {
    Container: styled.div`
        min-height: 6rem;

        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex: 1 auto;
        flex-grow: 3;

        justify-content: space-between;

        padding: 3%;
        background-image: url(${networkImg});
        background-size: cover;
        opacity: 0.85;


        &:hover {
            & .background-image {
                transform: scale(1.2);
                transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            }
        }
    `,
    Item: styled.div`
        min-width: 30%;
        flex-grow: 4;
        padding: 3%;
        justify-content: center;

        overflow: hidden;
        text-align: center;
    `,
    Link: styled.a`
        font-size: 1.3rem;
        font-weight: light;
        text-decoration: none;
        color: white;
        background-color: #55338833;
        text-shadow: 2px 2px #000000;


        font-family: "Ubuntu", sans-serif;
        &:hover {
            color: #99999999;
            text-shadow: -2px -2px #000000;

        }
    `,
};
