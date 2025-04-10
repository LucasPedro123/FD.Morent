import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.background};
  padding-inline: 32px;
  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;

  background: transparent;
  ${({ theme }) => theme.fontSize.bold["type@14"]}
  color: ${({ theme }) => theme.colors.secondary.default};

  &:focus {
    outline: none;
  }

  &:focus + label,
  &:valid + label {
    color: ${({ theme }) => theme.colors.secondary.light300};
  }
  &::placeholder{
    ${({ theme }) => theme.fontSize.medium["type@14"]}
    color: ${({ theme }) => theme.colors.secondary.light300};
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.fontSize.semibold["type@16"]}
  color: ${({ theme }) => theme.colors.secondary.default};
  transform: translateY(-50%);
  pointer-events: none;
  transition: 0.4s;
`;

export const Select = styled.select<{ isSelected: boolean }>`
  ${({ isSelected, theme }) =>
    isSelected
      ? theme.fontSize.bold["type@14"]
      : theme.fontSize.regular["type@14"]}

  color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors.gray
      : theme.colors.secondary.light300};
  width: 100%;
  height: 100%;
  border: none;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  option {
    color: ${({ theme }) => theme.colors.secondary.light300};
  }
`;
