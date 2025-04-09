import styled from "styled-components";

export const Container = styled.div`
  padding: 0 60px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding-block: 105px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontSize.bold["type@72"]}
  color: ${({ theme }) => theme.colors.gray};
`;

export const Subtitle = styled.h2`
  ${({ theme }) => theme.fontSize.regular["type@20"]}
  color: ${({ theme }) => theme.colors.gray};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Main = styled.main`
  padding: 0 60px;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageMain = styled.img`
  width: 100%;
  margin-left: -60px;
`;

export const Button = styled.button`
  ${({ theme }) => theme.fontSize.medium["type@20"]}
  padding: 10px 25px;
  gap: 10px;
  width: 40%;
  height: 100%;
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.primary.default};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 25px rgba(180, 13, 13, 0.1);
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.default};
    color: #fff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 90%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  height: 64px;
  width: 55%;
  gap: 20px;
`;

export const CardsSection = styled.section`
  margin-top: 150px;
  display: flex;
  width: 100%;
  gap: 32px;
  justify-content: space-between;
`;

export const Card = styled.div<{ primary?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 24px;
  color: #fff;
  border-radius: 10px;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary.default : theme.colors.information.default};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 414px;
  width: 100%;
  gap: 16px;
`;

export const ButtonCard = styled.div`
  max-width: 200px;
  width: 100%;
  height: 44px;
`;

export const CardTitle = styled.h1`
  ${({ theme }) => theme.fontSize.semibold["type@36"]}
  color:  ${({ theme }) => theme.colors.white};
`;
export const CardSubtitle = styled.span`
  ${({ theme }) => theme.fontSize.medium["type@20"]}
  color:  ${({ theme }) => theme.colors.white};
`;

export const CardImage = styled.img`
  align-self: center;
  object-fit: cover;
  max-width: 406px;
  width: 100%;
  height: 120px;
`;

export const CatalogSection = styled.section`
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CatalogItems = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

export const CatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;

export const CatalogTopContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CatalogBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CatalogTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CatalogTitle = styled.h3`
  ${({ theme }) => theme.fontSize.semibold["type@20"]}
  color: ${({ theme }) => theme.colors.secondary.light300};
`;
