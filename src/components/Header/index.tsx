import { useNavigate } from "react-router";
import * as S from "./style";


export const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.Container id="header">
      <S.Title onClick={()=> navigate('/')}>MORENT</S.Title>
      <S.ImageUser src="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_hybrid&w=740" />
    </S.Container>
  );
};
