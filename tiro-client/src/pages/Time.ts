import { format } from "date-fns";
import { de, enGB } from "date-fns/locale";

// TODO choose correct date
export const currentDateDe = format(new Date(), "dd.MM.yyyy", { locale: de });
export const currentDateEnGb = format(new Date(), "MM/dd/yyyy", {
  locale: enGB,
});

const dateArray = [currentDateDe, currentDateEnGb];

console.log({ dateArray });
