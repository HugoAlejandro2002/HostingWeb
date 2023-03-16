import { signInWithEmailAndPassword } from "firebase/auth";
import PageHeader from "../../components/PageHeader/PageHeader";
import { auth } from "../../services/firebase";
import { StyledInput, StyledLabel } from "../Contact/StyledContact";
import { StyledForm, StyledSubmitButton } from "./StyledLogin";

const LoginPage = () => {
  const submit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(user.email);
        alert("Inicio de seión exitoso");
        // ...
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <PageHeader title={"Inicio de Sesión!"} />

      <section>
        <StyledForm onSubmit={submit}>
          <StyledLabel>
            E-mail:
            <StyledInput type="email" name="email" required />
          </StyledLabel>

          <StyledLabel>
            Contraseña:
            <StyledInput type="password" name="password" required />
          </StyledLabel>

          <StyledSubmitButton type="submit" value="Iniciar Sesion" />
        </StyledForm>
      </section>
    </>
  );
};

export default LoginPage;
