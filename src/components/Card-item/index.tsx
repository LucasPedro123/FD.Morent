import { useNavigate } from "react-router";
import { Button } from "../Button";
import * as S from "./style";

type CardItemProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  price: number;
  detailsGas: number;
  detailsSteering: "Manual" | "Automatic";
  detailsCapacity: number;
  isLine: boolean;
  redirect?: string;
};

export const CardItem: React.FC<CardItemProps> = ({
  title,
  detailsSteering,
  detailsCapacity,
  detailsGas,
  price,
  subtitle,
  imageSrc,
  isLine,
  redirect,
}) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TopContent>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TopContent>
      <S.Wrapper isLine={isLine}>
        <S.Image src={imageSrc} />
        <S.CardInfo isLine={isLine}>
          <S.ContentLine>
            <S.Icon className="fa-solid fa-gas-pump" />
            <S.Label>{detailsGas}L</S.Label>
          </S.ContentLine>
          <S.ContentLine>
            <S.Icon className="fa-solid fa-circle-notch" />
            <S.Label>{detailsSteering}</S.Label>
          </S.ContentLine>
          <S.ContentLine>
            <S.Icon className="fa-solid fa-users" />
            <S.Label>{detailsCapacity} Pessoas</S.Label>
          </S.ContentLine>
        </S.CardInfo>
      </S.Wrapper>
      <S.BottomContent>
        <S.Price>
          R${price}/<S.Span>dia</S.Span>
        </S.Price>
        <S.ButtonContainer>
          <Button fontSize={16} label="Details" primary={true} onClick={()=>redirect && navigate(redirect)}/>
        </S.ButtonContainer>
      </S.BottomContent>
    </S.Container>
  );
};
