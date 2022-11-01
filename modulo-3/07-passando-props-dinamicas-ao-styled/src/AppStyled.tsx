import styled from "styled-components";

type BotaoProps = {
    small: boolean;
}

export const BotaoG = styled.button `
    background-color: black;
    color: white;
`;

export const BotaoP = styled.button<BotaoProps> `
    background-color: green;
    color: white;
    width: ${props => props.small ? '15px' : '30px'}
`;
