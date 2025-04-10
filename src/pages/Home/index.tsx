import {
  BackgroundCircle,
  BackgroundImage,
  HeroImage,
} from "../../assets/Images/index";
import { Button, CardItem, Header, Footer } from "../../components";
import * as S from "./style";

export const Home: React.FC = () => {
  const carLink =
    "https://static.vecteezy.com/system/resources/thumbnails/029/913/154/small/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png";

  const catalogInfo = [
    {
      id: 1,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 5,
      isLine: true,
    },
    {
      id: 2,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 5,
      isLine: true,
    },
    {
      id: 3,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 5,
      isLine: true,
    },
    {
      id: 4,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 5,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 6,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 7,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 8,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 9,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 10,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 11,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
    {
      id: 12,
      title: "Carro 1",
      subtitle: "Carro 1 Subtitle",
      imageSrc: carLink,
      price: 100,
      detailsGas: 50,
      detailsSteering: "Automatic",
      detailsCapacity: 2,
      isLine: true,
    },
  ];

  return (
    <>
      <Header />
      <S.Main>
        <S.Wrapper>
          <S.Content>
            <S.Title>Nós preparamos um carro para sua viagem</S.Title>
            <S.Subtitle>
              A confiança que te leva além, o conforto que te acompanha..
            </S.Subtitle>
          </S.Content>
          <S.ButtonGroup>
            <Button
              fontSize={20}
              label="Alugue em um clique"
              primary={true}
              onClick={() => {
                const section = document.getElementById("catalog");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <S.Button>Seu Carro</S.Button>
          </S.ButtonGroup>
        </S.Wrapper>
        <S.ImageMain src={`${HeroImage}`} />
      </S.Main>
      <S.Container>
        <S.CardsSection>
          <S.Card>
            <S.ImageBackground src={`${BackgroundCircle}`} />
            <S.CardContent>
              <S.CardTitle>A melhor plataforma para se alugar</S.CardTitle>
              <S.CardSubtitle>
                Fácil e seguro para alugar carros.
              </S.CardSubtitle>
              <S.ButtonCard>
                <Button fontSize={20} label="Alugue agora" primary={true} />
              </S.ButtonCard>
            </S.CardContent>
            <S.CardImage src={carLink} />
          </S.Card>
          <S.Card primary={true}>
            <S.ImageBackground src={`${BackgroundImage}`} />
            <S.CardContent>
              <S.CardTitle>
                Melhor forma de alugar um carro por um preço baixo
              </S.CardTitle>
              <S.CardSubtitle>
                O jeito mais confortável e barato de se alugar um carro
              </S.CardSubtitle>
              <S.ButtonCard>
                <Button fontSize={20} label="Alugue agora" />
              </S.ButtonCard>
            </S.CardContent>
            <S.CardImage src={carLink} />
          </S.Card>
        </S.CardsSection>
        <S.CatalogSection id="catalog">
          <S.CatalogTop>
            <S.CatalogTitle>Catalogo</S.CatalogTitle>
          </S.CatalogTop>
          <S.CatalogItems>
            {catalogInfo.map((item, index) => (
              <CardItem
                key={index}
                isLine={true}
                title={item.title}
                subtitle={item.subtitle}
                imageSrc={item.imageSrc}
                price={item.price}
                detailsGas={item.detailsGas}
                detailsSteering={
                  item.detailsSteering == "Automatic" ? "Automatic" : "Manual"
                }
                detailsCapacity={item.detailsCapacity}
                redirect={`/car-details/${item.id}`}
              />
            ))}
          </S.CatalogItems>
        </S.CatalogSection>
      </S.Container>
      <Footer />
    </>
  );
};
