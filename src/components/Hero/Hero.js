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
// para agregar un video de fondo
import video from "../../assets/videofondo.gif";
import persona1 from "../../assets/persona1.jpg";
import persona2 from "../../assets/persona2.jpg";
import persona3 from "../../assets/persona3.jpg";
import persona4 from "../../assets/persona4.jpg";
import persona5 from "../../assets/persona5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonCarousel from "../../components/Carrusel/Carrusel.js";


const HeroSection = () => (
  <StyledSection>
    <video autoPlay loop muted
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}
    >
      <source src={video} type="image/gif" />
    </video>
    <StyledContentContainer>
      <StyledHeading>Se parte de nuestra gran comunidad y explota tus capacidades al máximo</StyledHeading>
      <StyledParagraph>Somos una comunidad de estudiantes enfocados en aprender y compartir conocimientos sobre el mundo del hacking ético y la ciberseguridad. </StyledParagraph>
      <StyledButton to="/contact">Unete a la comunidad</StyledButton>
    </StyledContentContainer>
    <StyledEarthAndMoonContainer>
      <img src={logo1} alt="Logo Hacking Ético" width={"100%"} align="right" padding="auto" />
    </StyledEarthAndMoonContainer>
    
    <PersonCarousel 
      persona1={persona1}
      persona2={persona2}
      persona3={persona3}
      persona4={persona4}
      persona5={persona5}
      height="100%"
      width="100%"
      
    />
  </StyledSection>
);

export default HeroSection;