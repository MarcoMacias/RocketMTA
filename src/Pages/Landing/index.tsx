import { Main } from "./Main";
import { Footer } from "@/components/Footer";
import { Sections } from "./Sections";
import { Container } from "./styles";

const Landing = () => {
  return (
    <Container>
      <Main />
      <Sections />
      <Footer />
    </Container>
  );
};

export default Landing;
