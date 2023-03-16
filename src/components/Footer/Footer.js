import { planets } from "../../constants";
import {
  Border,
  FooterA,
  FooterLink,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
} from "./StyledFooter";

import instagramIcon from "../../assets/insta.png";
import facebookIcon from "../../assets/face.png";
import whatsappIcon from "../../assets/whats.png";
const Footer = () => {
  return (
    <StyledFooterSection>
      <Border />
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2023 EHSC, All rights reserved.
        </FooterP>
        <StyledFooterRow bottomDiv>
          <FooterA href="https://www.instagram.com/ehsc.upb/?igshid=YmMyMTA2M2Y%3D">
            <img src={instagramIcon} alt="Instagram" width="50px" height="20px" />
          </FooterA>
          <FooterA href="https://www.facebook.com/profile.php?id=100088525065927">
          <img src={facebookIcon} alt="Facebook" width="50px" height="20px" />
          </FooterA>
          <FooterA href="https://wa.link/0v3x9t">
          <img src={whatsappIcon} alt="Whatsapp" width="50px" height="20px" />
          </FooterA>
        </StyledFooterRow>
      </StyledFooterRow>
    </StyledFooterSection>
  );
};

export default Footer;




