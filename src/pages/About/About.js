import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";
import logo from "../../assets/logo_hacking_etico.png";
import React from "react";
import presentation from "../../components/Members/CoreTeam";
import { Box } from "@mui/system";
import Promo from "../../components/Promo/Promo"
const AboutPage = () => {
  return (
    <>
    <AboutSection>
      <img src={logo} alt="Logo Hacking Ético" width={"50%"} align="right" padding="auto" />

      <PageHeader title="Nosotros" />
      
      <article>
        <AboutP>
          Somos una comunidad de estudiantes enfocados en aprender y compartir
          conocimientos sobre el mundo del hacking y la seguridad informática. 
          Nuestro objetivo es crear un espacio donde todos puedan explotar sus
          habilidades y aprender de los demás en un ambiente de colaboración y
          respeto.
          
        </AboutP>
        <AboutP>
          Nuestro Club tiene como objetivo principal la difusión de la cultura
          del hacking ético, la seguridad informática y la programación. Para
          ello, realizamos actividades como charlas, talleres, cursos y
          competencias. Además, contamos con un equipo de trabajo dividido en 
          diferentes áreas que son la de Technology, Logistic, Design y Social 
          Media que se encarga de mantener el sitio web y las redes sociales 
          activas. 
        </AboutP>
        
      </article>
      <presentation />
      
    </AboutSection>
    <Promo/>
    </>
  );
};

export default AboutPage;