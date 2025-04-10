import { IconSecurity } from "../../assets/Images";
import { Button, Footer, Header, Input } from "../../components";
import * as S from "./style";

export const Payment: React.FC = () => {
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

  return (
    <>
      <Header />
      <S.Container id="payment">
        <S.FormContainer>
          <S.InputWrapper>
            <S.BlingInfoRow>
              <S.CartContent>
                <S.PaymentTitle>Bling Info</S.PaymentTitle>
                <S.PaymentDescription>
                  Please enter your billing info
                </S.PaymentDescription>
              </S.CartContent>
              <S.PaymentDescription>Passo 1 de 4</S.PaymentDescription>
            </S.BlingInfoRow>
            <S.InputGroup>
              <Input type="text" label="Nome" placeholder="Seu nome" />
              <Input
                type="number"
                label="Telefone"
                placeholder="Seu telefone"
              />
              <Input
                type="text"
                label="Endereço"
                placeholder="Insira seu endereço"
              />
              <Input
                type="text"
                label="Cidade/Província"
                placeholder="Insira sua cidade"
              />
            </S.InputGroup>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.BlingInfoRow>
              <S.CartContent>
                <S.PaymentTitle>Informações de Aluguel</S.PaymentTitle>
                <S.PaymentDescription>
                Selecione a data do seu aluguel
                </S.PaymentDescription>
              </S.CartContent>
              <S.PaymentDescription>Passo 2 de 4</S.PaymentDescription>
            </S.BlingInfoRow>
            <S.InputGroup>
              <Input
                type="number"
                label="Localização"
                placeholder="Selecione sua localização"
              />
              <Input
                type="date"
                label="Data de início"
                placeholder="Selecione a data de início"
              />
              <Input
                type="text"
                label="Tempo de aluguel"
                placeholder="Selecione o tempo de aluguel"
              />
            </S.InputGroup>
            <S.InputGroup>
              <Input
                type="number"
                label="Localização"
                placeholder="Selecione sua localização"
              />
              <Input
                type="date"
                label="Data de início"
                placeholder="Selecione a data de início"
              />
              <Input
                type="text"
                label="Tempo de aluguel"
                placeholder="Selecione o tempo de aluguel"
              />
            </S.InputGroup>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.BlingInfoRow>
              <S.CartContent>
                <S.PaymentTitle>Método de pagamento</S.PaymentTitle>
                <S.PaymentDescription>
                  Insira seu método de pagamento
                </S.PaymentDescription>
              </S.CartContent>
              <S.PaymentDescription>Passo 3 de 4</S.PaymentDescription>
            </S.BlingInfoRow>
            <S.InputGroup>
              <Input
                type="text"
                label="Número do cartão"
                placeholder="Seu número"
              />
              <Input type="date" label="Vencimento" placeholder="DD/MM/AAAA" />
              <Input
                type="text"
                label="Titular do cartão"
                placeholder="Insira o titular do cartão"
              />
              <Input type="number" label="CVC" placeholder="Insira seu CVC" />
            </S.InputGroup>
          </S.InputWrapper>
          <S.ConfirmationInfo>
            <S.BlingInfoRow>
              <S.CartContent>
                <S.PaymentTitle>Método de pagamento</S.PaymentTitle>
                <S.PaymentDescription>
                  Insira seu método de pagamento
                </S.PaymentDescription>
              </S.CartContent>
              <S.PaymentDescription>Passo 3 de 4</S.PaymentDescription>
            </S.BlingInfoRow>
            <S.ConfirmationCards>
              <S.ConfirmationCard>
                <S.InputCheck type="checkbox" />
                <S.CartValue>
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </S.CartValue>
              </S.ConfirmationCard>
              <S.ConfirmationCard>
                <S.InputCheck type="checkbox" />
                <S.CartValue>
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </S.CartValue>
              </S.ConfirmationCard>
            </S.ConfirmationCards>
            <S.ButtonContainer>
              <Button fontSize={16} label="Alugar Agora" primary={true} />
            </S.ButtonContainer>
            <S.ConfirmationWrapper>
              <S.Icon src={IconSecurity} />
              <S.CartContent>
                <S.PaymentTitle>
                  Todos os seus dados estão seguros
                </S.PaymentTitle>
                <S.PaymentDescription>
                  Estamos usando a segurança mais avançada para lhe proporcionar
                  a melhor experiência de todas.
                </S.PaymentDescription>
              </S.CartContent>
            </S.ConfirmationWrapper>
          </S.ConfirmationInfo>
        </S.FormContainer>
        <S.Cart>
          <S.CartContent>
            <S.PaymentTitle>Resumo do aluguel</S.PaymentTitle>
            <S.PaymentDescription>
              Os preços podem mudar dependendo da duração do aluguel e do preço
              do seu carro alugado.
            </S.PaymentDescription>
          </S.CartContent>
          <S.CartInfo>
            <S.CartImage src={carInfo.images[0].url} />
            <S.CartTitle>{carInfo.title}</S.CartTitle>
          </S.CartInfo>
          <S.CartInfoGroup>
            <S.CartInfoContent>
              <S.CartInfoTitle>Subtotal</S.CartInfoTitle>
              <S.CartValue>R$ {carInfo.price}</S.CartValue>
            </S.CartInfoContent>
            <S.CartInfoContent>
              <S.CartInfoTitle>Taxa</S.CartInfoTitle>
              <S.CartValue>R$ 0</S.CartValue>
            </S.CartInfoContent>
          </S.CartInfoGroup>
          <S.InputContainer>
            <S.Input placeholder="CUPOM" />
            <S.CartValue isPointer>Aplicar</S.CartValue>
          </S.InputContainer>
          <S.CartBottom>
            <S.CartContent>
              <S.PaymentTitle>Preço total do aluguel</S.PaymentTitle>
              <S.PaymentDescription>
                Preço total e inclui desconto de aluguel.
              </S.PaymentDescription>
            </S.CartContent>
            <S.CartTitle>R$ {carInfo.price}</S.CartTitle>
          </S.CartBottom>
        </S.Cart>
      </S.Container>
      <Footer />
    </>
  );
};
