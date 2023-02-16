import { colors } from "../../constants";
import persona1 from "../../assets/persona1.jpeg";
import persona2 from "../../assets/persona2.jpeg";
import persona3 from "../../assets/persona3.jpeg";
import persona4 from "../../assets/persona4.jpeg";
import persona5 from "../../assets/persona5.jpeg";
import persona6 from "../../assets/persona6.jpeg";
import persona7 from "../../assets/persona7.jpeg";
import persona8 from "../../assets/persona8.jpeg";
import persona9 from "../../assets/persona9.jpeg";
import persona10 from "../../assets/persona10.jpeg";
import {
  StyledSection,
  StyledHeading,
  StyledPlanet,
  StyledCelestialObject,
  StyledPlanetParagraph
} from "./StyledPromo";

const PromoSection = () => (
  <StyledSection>
    <StyledHeading>Nuestro objetivo es crear un espacio donde todos puedan explotar sus
          habilidades y aprender de los demás... </StyledHeading>
          <StyledHeading>MAIN TEAM </StyledHeading>
      <StyledPlanet>
      <img src={persona7} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Joseph Meneses</StyledPlanetParagraph>
      <StyledPlanetParagraph>Lead de la Comunidad</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona1} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Joel Jarro</StyledPlanetParagraph>
      <StyledPlanetParagraph>Co-lead de la Comunidad</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona2} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Camila Grandy</StyledPlanetParagraph>
      <StyledPlanetParagraph>Lead Technology</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona3} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Hugo Apaza</StyledPlanetParagraph>
      <StyledPlanetParagraph>Co-lead Technology</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona4} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Maria Celeste Valdivia</StyledPlanetParagraph>
      <StyledPlanetParagraph>Lead Logistics</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona5} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Ariane Garrett</StyledPlanetParagraph>
      <StyledPlanetParagraph>Co-lead Logistics</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona6} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Alison Pillay</StyledPlanetParagraph>
      <StyledPlanetParagraph>Lead Design</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona8} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Carolina Gironda</StyledPlanetParagraph>
      <StyledPlanetParagraph>Co-lead Design</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona9} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />
      <StyledPlanetParagraph >Luana Cruz</StyledPlanetParagraph>
      <StyledPlanetParagraph>Lead Social Media</StyledPlanetParagraph>
    </StyledPlanet>
    <StyledPlanet>
      <img src={persona10} alt="Logo Hacking Ético" width={"50%"} align="center" padding="auto" />
      <StyledPlanetParagraph >Najla Duranboger</StyledPlanetParagraph>
      <StyledPlanetParagraph>Co-lead Social Media</StyledPlanetParagraph>
    </StyledPlanet>
  </StyledSection>
)

export default PromoSection;