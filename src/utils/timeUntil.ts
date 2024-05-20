import * as moment from "moment";

// A função recebe um timestamp como parâmetro
export default function timeUntil(date: number): string {
  // Convertemos o timestamp para o tipo moment
  const targetDate = moment.unix(date);

  // Verificamos se a data já passou
  if (moment().isAfter(targetDate)) {
    return "A data já passou";
  }

  // Calculamos a diferença entre a data atual e a data especificada
  const duration = moment.duration(targetDate.diff(moment()));

  // Retornamos a diferença em dias, horas e minutos
  return `${duration.hours()} horas e ${duration.minutes()} minutos`;
}
