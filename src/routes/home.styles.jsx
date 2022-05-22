import { Container } from "react-bootstrap";
import styled from "styled-components";

export const ImageBanner = styled(Container)`
    height: 35rem;

    width: 100%;
    max-width: 100%;

    display: flex;
    flex-wrap: wrap;
    flex: 1 auto;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;


    background-image: ${props=>props.img});
    .background-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
      }

    &:hover {
        & background-image {
            transform: scale(1.1);

            transition: transform 20s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            max-width: 100%;
        }
    }
`;
