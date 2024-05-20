import { Menu } from "@/components/Menu";
import { useState } from "react";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="mainSec">
      <Fade style={{ width: "100%", zIndex: 100 }}>
        <Menu showdropdown={false} />
      </Fade>

      <div className="wrapper">
        <div className="content">
          <Fade cascade damping={0.3} duration={1500}>
            <h1>
              <Fade
                cascade
                damping={0.02}
                duration={800}
                style={{ whiteSpace: "normal" }}
              >
                Dê um novo destino para seu personagem
              </Fade>
            </h1>

            <p>
              Nossa plataforma ainda está em desenvolvimento! Neste meio tempo,
              aproveite as informações disponibilizadas em nosso Discord. Dentro
              de algumas semanas vamos disponibilizar a plataforma completa em
              Live para vocês.
            </p>

            <button
              className="download"
              onClick={() =>
                (window.location.href = "https://discord.gg/rocketrp")
              }
            >
              ACESSAR DISCORD
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};
