import React from "react";

import { Container } from "./styles";
import LogoRocket from "@/assets/@rocketlogo.webp";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Tooltip, Fade } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="Wrapper">
        <div className="ContentTop">
          <img src={LogoRocket} alt="Beautifull Logo Rocket <3" />
          <ul>
            <li>
              <a href="https://github.com/rocketmta" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Como funciona
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Reviews
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                FAQ
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Criadores
              </a>
            </li>
          </ul>
        </div>
        <hr className="divisor" />
        <div className="ContentBottom">
          <div className="WrapperBottom">
            <div className="Social">
              <a
                className="Twitter"
                href="https://twitter.com/rocketmta"
                target="_blank"
              >
                <FaTwitter color="white" size={16} />
              </a>
              <a
                className="Instagram"
                href="https://www.instagram.com/rocketrp/"
                target="_blank"
              >
                <FiInstagram color="white" size={16} />
              </a>
              <a
                className="Facebook"
                href="https://discord.gg/rocketrp"
                target="_blank"
              >
                <FaDiscord color="white" size={16} />
              </a>
            </div>
            <div className="RightDivisor"></div>
            <div className="AddressCopyright">
              <span className="Address">
                Avenida Frederico Prudente 521, (11) 91648-6695
              </span>
              <span className="Copyright">
                Todos os direitos reservados a{" "}
                <a href="https://www.varsel.com.br/" target="_blank">
                  Varsel Agency
                </a>{" "}
              </span>
            </div>
          </div>
          <Tooltip
            title="9 Anos de muita dedicação!"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            color="#f3f3"
          >
            <span className="NineYears">MMXIII</span>
          </Tooltip>
        </div>
      </div>
    </Container>
  );
};
