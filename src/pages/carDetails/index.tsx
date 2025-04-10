import { useEffect, useState } from "react";
import { Button, CardItem, Footer, Header } from "../../components";
import * as S from "./style";
import { useNavigate } from "react-router";

export const CarDetails: React.FC = () => {
  const carLink =
    "https://static.vecteezy.com/system/resources/thumbnails/029/913/154/small/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png";

  const carInfo = {
    id: 1,
    images: [
      {
        url: "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1637082926/autoexpress/2021/11/BMW%20M3%20Competition%20xDrive%20review-11.jpg",
      },
      {
        url: "https://s3.sa-east-1.amazonaws.com/revista.mobiauto/BMW/S%C3%A9rie+3+-+320i+M+Sport+2023+-+Avalia%C3%A7%C3%A3o/BMW+320i+M+Sport+2023+-+interior+bancos.jpg",
      },
      {
        url: "https://s3.sa-east-1.amazonaws.com/revista.mobiauto/BMW/S%C3%A9rie+3+-+320i+MSport+-+Avalia+/BMW_S%C3%A9rie+3_2023_+banco_traseiro.jpeg",
      },
    ],
    title: "BMW M3",
    description:
      "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the ",
    type: "Sport",
    price: 100,
    detailsGas: 50,
    detailsSteering: "Automatic",
    detailsCapacity: 5,
  };
  const [selectedImage, setSelectedImage] = useState(carInfo.images[0]);

  const catalogInfo = [
    {
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
  const navigate = useNavigate();

  useEffect(() => {
    const topElement = document.getElementById("header");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.Line>
          <S.CarImageGroup>
            <S.MainImage src={selectedImage.url} />
            <S.ThumbnailContainer>
              {carInfo.images.map((car, index) => {
                return (
                  <S.ThumbnailWrapper
                    key={index}
                    isSelected={selectedImage.url == car.url}
                    onClick={() => setSelectedImage(car)}
                  >
                    <S.ThumbnailImage src={car.url} />
                  </S.ThumbnailWrapper>
                );
              })}
            </S.ThumbnailContainer>
          </S.CarImageGroup>
          <S.Wrapper>
            <S.CarContent>
              <S.CarTitle>{carInfo.title}</S.CarTitle>
              <S.CarDescription>{carInfo.description}</S.CarDescription>
              <S.CarEspecificationsContainer>
                <S.CarEspecificationGroup>
                  <S.CarEspecificationItem>
                    <S.CarText isLight>Type Car</S.CarText>
                    <S.CarText>{carInfo.type}</S.CarText>
                  </S.CarEspecificationItem>
                  <S.CarEspecificationItem>
                    <S.CarText isLight>Steering</S.CarText>
                    <S.CarText>{carInfo.detailsSteering}</S.CarText>
                  </S.CarEspecificationItem>
                </S.CarEspecificationGroup>
                <S.CarEspecificationGroup>
                  <S.CarEspecificationItem>
                    <S.CarText isLight>Capacity</S.CarText>
                    <S.CarText>{carInfo.detailsCapacity}</S.CarText>
                  </S.CarEspecificationItem>
                  <S.CarEspecificationItem>
                    <S.CarText isLight>Gasolina</S.CarText>
                    <S.CarText>{carInfo.detailsGas}L</S.CarText>
                  </S.CarEspecificationItem>
                </S.CarEspecificationGroup>
              </S.CarEspecificationsContainer>
            </S.CarContent>
            <S.BottomContent>
              <S.CarPrice>
                R${carInfo.price}/<S.Span>dia</S.Span>
              </S.CarPrice>
              <S.ButtonContainer>
                <Button
                  fontSize={16}
                  label="Alugar agora"
                  primary={true}
                  onClick={() => navigate("/payment")}
                />
              </S.ButtonContainer>
            </S.BottomContent>
          </S.Wrapper>
        </S.Line>
        <S.CatalogSection>
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
              />
            ))}
          </S.CatalogItems>
        </S.CatalogSection>
      </S.Container>
      <Footer />
    </>
  );
};
