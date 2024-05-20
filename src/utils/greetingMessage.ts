export const greetingMessage = () => {
  let h = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    hour12: false,
  }) as unknown as number;

  if (h >= 0 && h <= 5) {
    return "Hey!! Boa madrugada meu nome é Isadora, tudo bem?";
  } else if (h >= 6 && h < 12) {
    return "Oie! Bom dia Meu nome é Isadora, tudo bem?";
  } else if (h >= 12 && h < 18) {
    return "Oii!! Boa tarde Meu nome é Isadora, tudo bem?";
  } else if (h >= 18 && h <= 23) {
    return "Olá!! Boa noite Meu nome é Isadora, tudo bem?";
  }
};
