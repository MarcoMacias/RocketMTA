import { Menu } from "@/components/Menu";
import { Container } from "./styles";
import DisplayImg from "@/assets/blackholeFill.webp";
import RocketLogo from "@/assets/@rocketlogo.webp";

const NotFoundPage = () => {
  return (
    <Container>
      <div className="main">
        <img src={DisplayImg} className="blackHl" />

        <div className="content">
          <img
            src={
              "https://cdn.discordapp.com/attachments/1046964529482977280/1046964890755141682/rocketcommunity.png"
            }
            className="content--logo"
          />

          <h1>404...</h1>

          <h2>Repito, 404. Câmbio!</h2>

          <label>ESTAÇÃO RESPONDE:</label>

          <p>
            Acho que você chegou ao limite do universo. A página que você
            requisitou não foi encontrada.
          </p>

          <a href="/home">VOLTAR À HOME</a>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
