// An award seal: a foil disc with the year pressed into it.
// The light on the foil is moved by FoilDriver.
export default function Seal({ year, className = "" }) {
  return (
    <span className={`seal foil ${className}`} aria-hidden="true">
      <span className="seal-year">{year}</span>
    </span>
  );
}
