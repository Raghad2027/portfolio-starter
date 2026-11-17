"use client";

// Opens the browser's print dialog, where the CV can be printed or saved as PDF.
export default function PrintButton({ children }) {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-solid no-print">
      {children}
    </button>
  );
}
