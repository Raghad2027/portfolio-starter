// Technology names stay in Latin script in both languages.
export default function TechList({ items, label }) {
  if (!items?.length) return null;
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="chip" dir="ltr">
          {item}
        </li>
      ))}
    </ul>
  );
}
