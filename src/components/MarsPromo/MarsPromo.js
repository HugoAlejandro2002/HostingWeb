import { colors } from "../../constants";
import Button from "../Button/Button";

import {
  StyledContentContainer,
  StyledDeimos,
  StyledHeading,
  StyledMars,
  StyledMarsAndMoonsContainer,
  StyledParagraph,
  StyledPhobos,
  StyledSection
} from "./StyledMarsPromo";

const MarsPromo = () => (
  <StyledSection>
    <StyledContentContainer>
      <StyledHeading>Se parte de </StyledHeading>
      <StyledParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledParagraph>
      <Button $isRed to="/body/mars">Explore Mars</Button>
    </StyledContentContainer>
    <StyledMarsAndMoonsContainer>
      <StyledMars color={colors.mars}/>
      <StyledPhobos />
      <StyledDeimos />
    </StyledMarsAndMoonsContainer>
  </StyledSection>
);

export default MarsPromo;