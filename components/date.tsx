export default function FormattedDate({ dateString }) {
  const [month, day, year] = dateString.split("-");
  const date = new Date(year, month - 1, day);
  const monthName = date.toLocaleString("default", { month: "long" });

  return (
    <time dateTime={dateString}>
      {monthName} {day}, {year}
    </time>
  );
}
