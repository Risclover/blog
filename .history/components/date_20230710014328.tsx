import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString).toDateString();
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
