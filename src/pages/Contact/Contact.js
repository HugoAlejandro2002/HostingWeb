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
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    alert("Form may or may not have been submitted :)");

    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Inicio de sesión exitoso");
        e.target.reset();
      })
      .catch((error) => {
        alert(error.message);
      });

    e.target.reset();
  }

  return (
    <>
      <PageHeader title="Contact" />
      <section>
        <StyledForm onSubmit={handleFormSubmit}>

          <StyledLabel>
            E-mail:
            <StyledInput type="email" name="email" required />
          </StyledLabel>

          <StyledLabel>
            Contraseña:
            <StyledInput type="password" name="password" required />
          </StyledLabel>

          <StyledSubmitButton type="submit" value="Iniciar sesión" />

          {/* <StyledLabel>
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

          <StyledSubmitButton type="submit" value="Send" /> */}
        </StyledForm>
      </section>
    </>
  );
}

export default ContactPage;