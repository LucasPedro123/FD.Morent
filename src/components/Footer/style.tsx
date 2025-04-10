import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
  padding: 5%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 36px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 958px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
  }
`;

export const Content = styled.div`
  max-width: 292px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontSize.bold["type@32"]}
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const Subtitle = styled.h2`
  ${({ theme }) => theme.fontSize.medium["type@16"]}
  color: ${({ theme }) => theme.colors.gray};
`;

export const NavItems = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NavTitle = styled.h1`
  ${({ theme }) => theme.fontSize.bold["type@20"]}
  color: ${({ theme }) => theme.colors.secondary.default};
`;

export const NavLinkGroup = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const NavLink = styled(Link)`
  ${({ theme }) => theme.fontSize.medium["type@16"]};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block-start: 36px;
  width: 100%;
  height: 1px;
  border-top: 1px solid rgba(19, 19, 19, 0.16);

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Copyright = styled.p`
  ${({ theme }) => theme.fontSize.medium["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.default};
`;

export const FooterBottomContent = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const TextLink = styled(Link)`
  ${({ theme }) => theme.fontSize.medium["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.default};
  text-decoration: none;
`;
