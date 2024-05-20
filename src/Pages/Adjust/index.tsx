import { Menu } from "@/components/Menu";
import { Container } from "./styles";
import DisplayImg from "@/assets/blackholeFill.webp";
import RocketLogo from "@/assets/@rocketlogo.webp";

const Adjust = () => {
  return (
    <Container>
      <div className="main">
        <img
          src={
            "https://cdn.discordapp.com/attachments/1005212566244565144/1056857503662620763/deter_contagem.png"
          }
          className="blackHl"
        />

        <div className="content">
          <img
            src={
              "https://cdn.discordapp.com/attachments/1046964529482977280/1046964890755141682/rocketcommunity.png"
            }
            className="content--logo"
          />

          <h1>321...</h1>

          <h2>Espere, detenham a contagem!</h2>
          <label>PICA-PAU APARECE E AVISA:</label>
          <p>
            A página que você solicitou ainda não está finalizada. Lembre-se:
            esta é uma versão Beta e logo logo estará online e apitando
          </p>

          <a href="/">VOLTAR À HOME</a>
        </div>
      </div>
    </Container>
  );
};

export default Adjust;
