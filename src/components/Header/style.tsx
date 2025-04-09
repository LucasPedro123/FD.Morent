import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 124px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 60px;
`

export const Title = styled.h1`
    ${({ theme }) => theme.fontSize.bold["type@32"]}
    color: ${({ theme }) => theme.colors.primary.default};
`

export const ImageUser = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`