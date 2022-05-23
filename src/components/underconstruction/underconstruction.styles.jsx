import styled from "styled-components";

import buildImg from "../../assets/images/build1.jpg";

export const BuildBanner = {
    Container: styled.div`
        min-height: 500px;
        max-height: 950px;

        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex: 1 auto;
        flex-grow: 3;

        justify-content: space-between;

        padding: 3%;
        background-image: url(${buildImg});
        background-size: cover;
        opacity: 0.85;

        .background-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
        }

        &:hover {
            & .background-image {
                transform: scale(1.2);
                transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            }
        }
    `,
    Message: styled.h1`
        min-width: 30%;
        flex-grow: 4;
        padding: 20%;
        justify-content: center;

        overflow: hidden;
        text-align: center;

        font-weight: light;
        color: white;
        text-shadow: 2px 2px #000000;
    `,
};
