import { format } from "date-fns";
import { de, enGB } from "date-fns/locale";

// TODO choose coorect date
export const currentDateDe = format(new Date(), "dd.MM.yyyy", { locale: de });
export const currentDateEnGb = format(new Date(), "MM/dd/yyyy", {
  locale: enGB,
});
