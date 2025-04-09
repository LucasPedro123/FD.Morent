import styled from "styled-components";

export const Container = styled.button<{ primary?: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: ${({ primary, theme }) =>
    primary == true
      ? theme.colors.primary.default
      : theme.colors.information.default};
`;

export const Text = styled.span<{
  fontSize: 12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 72;
}>`
  ${({ theme, fontSize }) => theme.fontSize.bold[`type@${fontSize}`]}
  color: #fff;
`;
