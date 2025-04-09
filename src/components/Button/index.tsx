import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

type ButtonProp = {
  label: string;
  fontSize: 12 | 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 72;
  primary?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<
  ButtonProp & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, primary, fontSize, ...props }) => {
  return (
    <S.Container primary={primary} {...props}>
      <S.Text fontSize={fontSize}>{label}</S.Text>
    </S.Container>
  );
};
