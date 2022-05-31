import styled from "styled-components";

export const Resume = {
    Title: styled.h1`
        font-family: "DM Serif Display", serif;
    `,
    SubTitle: styled.h5`
        font-family: "Bree Serif", serif;
        font-weight: bold;
    `,
    Section: styled.h5`
        font-family: "Bree Serif", serif;
    `,
    P: styled.p`
        font-family: "Bree Serif", serif;
        color: #303030;
    `,
    Link: styled.a`
        font-family: "Paytone One", sans-serif;
        margin-left: 2rem;
        color: #2020aa;
    `,
    Container: styled.div`
        min-width: 30%;
        display: flex;
        flex-wrap: wrap;
        flex: 1 auto;
        flex-grow: 2;
        justify-content: space-between;

        overflow: hidden;
        text-align: center;
    `,
};
