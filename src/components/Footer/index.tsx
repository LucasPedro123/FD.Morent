import * as S from "./style";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Content>
          <S.Title>MORENT</S.Title>
          <S.Subtitle>
            Nossa visão é proporcionar conveniência e ajudar a aumentar seu
            negócio de vendas.
          </S.Subtitle>
        </S.Content>
        <S.NavItems>
          <S.NavItem>
            <S.NavTitle>Sobre nós</S.NavTitle>
            <S.NavLinkGroup>
              <S.NavLink to="/">Como funciona</S.NavLink>
              <S.NavLink to="/">Destaque</S.NavLink>
              <S.NavLink to="/">Parceria</S.NavLink>
              <S.NavLink to="/">Relação comercial</S.NavLink>
            </S.NavLinkGroup>
          </S.NavItem>
          <S.NavItem>
            <S.NavTitle>Comunidade</S.NavTitle>
            <S.NavLinkGroup>
              <S.NavLink to="/">Eventos</S.NavLink>
              <S.NavLink to="/">Blog</S.NavLink>
              <S.NavLink to="/">Podcast</S.NavLink>
              <S.NavLink to="/">Convide um amigo</S.NavLink>
            </S.NavLinkGroup>
          </S.NavItem>
          <S.NavItem>
            <S.NavTitle>Redes Sociais</S.NavTitle>
            <S.NavLinkGroup>
              <S.NavLink to="/">Discord</S.NavLink>
              <S.NavLink to="/">Instagram</S.NavLink>
              <S.NavLink to="/">LinkedIn</S.NavLink>
              <S.NavLink to="/">Facebook</S.NavLink>
            </S.NavLinkGroup>
          </S.NavItem>
        </S.NavItems>
      </S.Wrapper>
      <S.FooterBottom>
        <S.Copyright>© 2025 MORENT. Todos os direitos reservados.</S.Copyright>
        <S.FooterBottomContent>
          <S.TextLink to="/">Termos de uso</S.TextLink>
          <S.TextLink to="/">Política de privacidade</S.TextLink>
        </S.FooterBottomContent>
      </S.FooterBottom>
    </S.Footer>
  );
};
