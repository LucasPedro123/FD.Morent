import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 32px;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 5%;

  @media (max-width: 1020px) {
    flex-direction: column-reverse;
  }
`;

export const PaymentTitle = styled.h2`
  ${({ theme }) => theme.fontSize.bold["type@20"]}
  color:  ${({ theme }) => theme.colors.black};

  @media (max-width: 480px) {
  ${({ theme }) => theme.fontSize.bold["type@16"]}
  }
`;

export const PaymentDescription = styled.p`
  ${({ theme }) => theme.fontSize.regular["type@16"]}
  color:  ${({ theme }) => theme.colors.secondary.light300};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 56px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  padding-inline: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.secondary.default};
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  max-height: 600px;
  width: 30%;
  height: 100%;
  border-radius: 10px;

  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const CartTitle = styled.h1`
  ${({ theme }) => theme.fontSize.bold["type@24"]}
  color:  ${({ theme }) => theme.colors.black};

  @media (max-width: 480px) {
    ${({ theme }) => theme.fontSize.bold["type@20"]}
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  border-bottom: 1px solid rgba(195, 212, 233, 0.4);
  padding-bottom: 32px;
`;

export const CartImage = styled.img`
  width: 132px;
  height: 108px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartInfoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CartInfoTitle = styled.h1`
  ${({ theme }) => theme.fontSize.medium["type@16"]}
  color:  ${({ theme }) => theme.colors.secondary.light300};
`;

export const CartValue = styled.p<{ isPointer?: boolean }>`
  ${({ theme }) => theme.fontSize.semibold["type@16"]}
  color:  ${({ theme }) => theme.colors.secondary.default};
  cursor: ${({ isPointer }) => (isPointer ? "pointer" : "default")};
`;

export const CartBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 10px;
`;

export const BlingInfoRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

export const ConfirmationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  width: 100%;
`;

export const ConfirmationInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ConfirmationCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ConfirmationCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 32px;
  gap: 22px;
`;

export const ButtonContainer = styled.div`
  max-width: 140px;
  width: 100%;
  height: 56px;
`;

export const InputCheck = styled.input`
  cursor: pointer;
`;

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
