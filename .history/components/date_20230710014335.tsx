import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString).toDate();
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
