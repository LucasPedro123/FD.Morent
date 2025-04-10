import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 32px;
  padding-inline: 5%;
  padding-bottom: 105px;
`;

export const Line = styled.section`
  display: flex;
  gap: 5%;
  width: 100%;
  height: 100%;

  @media (max-width: 1020px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 10px;

  @media (min-width: 1280px) {
    width: 50%;
  }
`;

export const Span = styled.span`
  ${({ theme }) => theme.fontSize.bold["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.light300};
`;

export const CarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  width: 100%;
  gap: 34px;
`;

export const CarTitle = styled.h1`
  ${({ theme }) => theme.fontSize.bold["type@32"]}
  color:  ${({ theme }) => theme.colors.black};
`;

export const CarDescription = styled.p`
  ${({ theme }) => theme.fontSize.regular["type@20"]}
  color:  ${({ theme }) => theme.colors.secondary.light400};
`;

export const CarEspecificationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  width: 100%;
`;

export const CarEspecificationGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 32px;
`;
export const CarEspecificationItem = styled.div`
  display: flex;
  gap: 5%;
`;

export const CarText = styled.p<{ isLight?: boolean }>`
  ${({ theme }) => theme.fontSize.regular["type@20"]}
  color:  ${({ theme, isLight }) =>
    isLight
      ? theme.colors.secondary.light300
      : theme.colors.secondary.light400};
`;

export const BottomContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 44px;
`;

export const ButtonContainer = styled.div`
  max-width: 136px;
  width: 100%;
  height: 44px;
`;

export const CarPrice = styled.p`
  ${({ theme }) => theme.fontSize.bold["type@24"]}
  color: ${({ theme }) => theme.colors.secondary.default};
`;

export const CarImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const MainImage = styled.img`
  height: 500px;
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  gap: 10px;
`;

export const ThumbnailWrapper = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 4px;
  border: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary.default : "transparent"};
`;

export const ThumbnailImage = styled.img`
  width: 148px;
  height: 124px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  height: 70px;
  }
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
`;

export const CatalogTitle = styled.h3`
  ${({ theme }) => theme.fontSize.semibold["type@20"]}
  color: ${({ theme }) => theme.colors.secondary.light300};
`;



export const CardsSection = styled.section`
  margin-top: 150px;
  display: flex;
  width: 100%;
  gap: 32px;
  justify-content: space-between;

  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;

export const Card = styled.div<{ primary?: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  color: #fff;
  border-radius: 10px;
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary.default : theme.colors.information.default};
`;

export const CardContent = styled.div`
  padding-left: 24px;
  padding-top: 24px;
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
  margin-bottom: 24px;
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

  @media (max-width: 1480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 791px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CatalogItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 100px;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
`;
