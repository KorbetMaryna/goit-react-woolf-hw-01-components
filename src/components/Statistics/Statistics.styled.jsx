import styled, { keyframes } from "styled-components";

export const Stat = styled.section`
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 0px 10px 2px rgba(120, 120, 120, 0.75);
    margin: 0 auto;
    border-radius: 8px; 
`;

export const StatTitle = styled.h2`
    margin-top: 20px;
`;

export const StatList = styled.ul`
    display: flex;
    margin-top: 20px;
    width: 100%;
`;

const pulse = keyframes`
    0% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.9);
    }
`;

export const StatItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;

    background-color: ${props => props.color};
    border-bottom-left-radius: ${props => props.isLast ? '8px' : 0};
    border-bottom-right-radius: ${props => props.isLast ? '8px' : 0};

    &:hover,
    &:focus {
        animation: ${pulse} 2s infinite;
    }
`;

export const StatItemLabel = styled.span`
    font-size: 16px;
    margin-top: 10px;
`;

export const StatItemPercentage = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;