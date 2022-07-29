import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Helvetica, sans-serif;
    border-bottom: 1px solid grey;
    padding-button: 20px;

    div {
        flex: 1;
        margin: 0.5rem 0;
    }

    .info, .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        display: flex;
        max-width: 80px;
        object-fit: cover;
        margin: 0 auto;
    }
`;