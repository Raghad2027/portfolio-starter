import { tr } from "@/lib/i18n";
import Tilt from "@/components/ui/Tilt";

// A talk as an event ticket: the talk on the body, the year and city on the
// stub, with a perforation between them. It tilts in 3D under the pointer.
// After the idea of dqnamo's Ticket (dqnamo.com/kitchen); built here in CSS.
export default function Ticket({ talk, locale, open, close }) {
  return (
    <Tilt max={5}>
      <article className="ticket">
        <div className="ticket-body">
          <p className="t-meta">{tr(talk.kind, locale)}</p>
          <h3 className="t-h3 mt-1">
            {open}
            {tr(talk.title, locale)}
            {close}
          </h3>
          <p className="mt-auto pt-5">{tr(talk.event, locale)}</p>
        </div>
        <div className="ticket-stub">
          <p className="t-num">{talk.year}</p>
          <p className="mt-1">{tr(talk.city, locale)}</p>
        </div>
      </article>
    </Tilt>
  );
}
