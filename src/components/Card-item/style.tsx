import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 16px;
  background-color: #fff;
  border-radius: 10px;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BottomContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 44px;
`;

export const Wrapper = styled.div<{ isLine: boolean }>`
  display: flex;
  flex-direction: ${({ isLine }) => (isLine ? "column" : "row")};
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  max-width: 136px;
  width: 100%;
  height: 44px;
`;

export const CardInfo = styled.div<{ isLine: boolean }>`
  display: flex;
  margin-bottom: ${({ isLine }) => (isLine ? "-px10%" : "0px")};
  flex-direction: ${({ isLine }) => (isLine ? "row" : "column")};
  gap: 19px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontSize.bold["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.default};
`;

export const Subtitle = styled.h2`
  ${({ theme }) => theme.fontSize.bold["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.light300};
`;

export const Price = styled.p`
  ${({ theme }) => theme.fontSize.bold["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.default};
`;

export const Image = styled.img`
  width: 151px;
  height: 64px;
  object-fit: cover;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.secondary.light300};
`;

export const Span = styled.span`
  ${({ theme }) => theme.fontSize.bold["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.light300};
`;

export const Icon = styled.i`
  color: ${({ theme }) => theme.colors.secondary.light300};
  font-size: 16px;
`;

export const Text = styled.span`
  ${({ theme }) => theme.fontSize.bold["type@12"]}
  color: ${({ theme }) => theme.colors.secondary.light300};
`;

export const ContentLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;
