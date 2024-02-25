import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 10px 2px rgba(120, 120, 120, 0.75);
    width: 100%;
    border-radius: 8px; 
    padding: 20px;
    gap: 16px;
`;

export const FriendStatus = styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;

    background-color: ${({ color }) => color};
    animation: ${({ color }) => (color === "green" ? pulseAnimation : "none")} 1s infinite;
`;

export const FriendAvatar = styled.img`
    width: 48px;
    box-shadow: 0px 0px 10px 2px rgba(120, 120, 120, 0.75);
    padding: 8px;
    transition: transform 0.3s ease;

    &:hover,
    &:focus {
        transform: scale(1.1); 
    }
`;

export const FriendName = styled.p`
    font-size: 18px;
    font-weight: bold;
`;