import React from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  Accordion,
} from "@mui/material";

const Acordeon: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          bgcolor: "#121214",
          width: "100%",
          marginBottom: 1,
          border: 2,
          borderColor: "#353438",
        }}
      >
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown size={25} color="white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "400",
              color: "#F8FAFC",
              fontSize: 14,
            }}
          >
            Posso criar meu grupo ilegal? Preciso pagar algo para tê-lo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "500",
              color: "#A3A3A8",
              fontSize: 12,
            }}
          >
            Sim, você pode criar o seu próprio grupo, e acredite se quiser, não
            precisará pagar NADA para tê-lo! A Rocket não possui grupos ilegais
            oficiais, portanto, obter um reconhecimento dentro da cidade
            dependerá somente do seu grupo. Reputação é algo essencial para
            crescer no mundo do crime, então tenha em mente um bom plano e bons
            parceiros para poder contar, pois não vai ser fácil... Lembrando que
            não haverá crime no início da cidade, então tome esse tempo para
            focar nos seus passos dentro desse mundo arriscado!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          bgcolor: "#121214",
          width: "100%",
          marginBottom: 1,
          border: 2,
          borderColor: "#353438",
        }}
      >
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown size={25} color="white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "400",
              color: "#F8FAFC",
              fontSize: 14,
            }}
          >
            E a polícia? Como funciona? Como posso participar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "500",
              color: "#A3A3A8",
              fontSize: 12,
            }}
          >
            Você pode encontrar tudo sobre nossa corporação policial em nosso
            Discord. Para participar é bem simples, basta passar pelo
            recrutamento que de vez em quando será anunciado, todas as fases
            serão especificadas durante o processo.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          bgcolor: "#121214",
          width: "100%",
          marginBottom: 1,
          border: 2,
          borderColor: "#353438",
        }}
      >
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown size={25} color="white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "400",
              color: "#F8FAFC",
              fontSize: 14,
            }}
          >
            O que preciso para criar uma empresa?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "500",
              color: "#A3A3A8",
              fontSize: 12,
            }}
          >
            As empresas da Rocket levam consigo uma necessidade enorme de
            responsabilidade, e por isso não podemos deixar na mão de qualquer
            um. Como muitos sabem, as empresas são conexas de forma direta (tudo
            sobre em nosso Discord). Você pode adquirir o direito de comprar uma
            empresa pagando por uma taxa mensal. Ah, e para lembrar: no início
            da cidade as empresas serão administradas pela própria Staff, afim
            de exemplificar como deve ser a gestão.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          bgcolor: "#121214",
          width: "100%",
          marginBottom: 1,
          border: 2,
          borderColor: "#353438",
        }}
      >
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown size={25} color="white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "400",
              color: "#F8FAFC",
              fontSize: 14,
            }}
          >
            E a Whitelist? É difícil? Consigo jogar sem tê-la feito?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "500",
              color: "#A3A3A8",
              fontSize: 12,
            }}
          >
            Nossa Whitelist é consideravelmente simples, contando com 2 etapas
            sendo elas a parte escrita e a entrevista, nada complicado!
            Completando o primeiro passo, você marcará um horário para realizar
            a entrevista, sendo aprovado, poderá jogar em nosso servidor. Do
            contrário, você ainda continuará retido e não poderá jogar até
            passar nas duas fases.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Acordeon;
