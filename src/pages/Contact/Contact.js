import PageHeader from "../../components/PageHeader/PageHeader";

import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSubmitButton
} from "./StyledContact";

import { auth } from '../../services/firebase';

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact" />
      <section>
        <StyledForm>
          <StyledLabel>
            Name:
            <StyledInput type="text "name="name" required />
          </StyledLabel>

          <StyledLabel>
            E-mail:
            <StyledInput type="email" name="email" required />
          </StyledLabel>

          <StyledLabel>
            Message:
            <StyledTextArea name="message" required />
          </StyledLabel>

          <StyledSubmitButton type="submit" value="Send"/>
        </StyledForm>
      </section>
    </>
  );
}

export default ContactPage;