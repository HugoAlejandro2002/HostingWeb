import {
  StyledSection,
  StyledContentContainer,
  StyledHeading,
  StyledParagraph,
  StyledButton,
  StyledEarthAndMoonContainer,
  StyledEarth,
  StyledMoon,
  StyledWaveBackground
} from "./StyledHero";

import { colors } from "../../constants";
import logo1 from "../../assets/logo1.png";
const HeroSection = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Se parte de nuestra gran comunidad y explota tus capacidades al máximo</StyledHeading>
      <StyledParagraph>Somos una comunidad de estudiantes enfocados en aprender y compartir
          conocimientos sobre el mundo del hacking ético y la ciberseguridad. </StyledParagraph>
      <StyledButton to="/contact">Unete a la comunidad</StyledButton>
    </StyledContentContainer>
    <StyledEarthAndMoonContainer>
      <img src={logo1} alt="Logo Hacking Ético" width={"100%"} align="right" padding="auto" />
    </StyledEarthAndMoonContainer>
    <StyledWaveBackground width="1440" height="797" viewBox="0 0 1440 797" fill="none">
      <path d="M1440 575C1025.48 572.005 817.486 0 0 0V796.5H1440V575Z" fill="#141823"/>
    </StyledWaveBackground>
  </StyledSection>
);

export default HeroSection;