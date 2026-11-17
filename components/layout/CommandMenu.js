"use client";

// Ctrl/Cmd + K: one box that finds anything on the site.
// Adapted to plain JavaScript from the "Command Menu" component by uvain
// (Layro System, retrieved through 21st.dev). Like the original it is built on
// the cmdk library for ranking and keyboard handling, inside a Radix dialog
// for focus trapping and Escape. Restyled with this site's color variables.
import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { useEffect, useRef } from "react";

export default function CommandMenu({ open, onOpenChange, groups, labels, dir, onSelect }) {
  const listRef = useRef(null);

  // cmdk wraps the groups in a sizing div with no role. Marking it
  // presentational keeps the listbox → group → option chain intact.
  useEffect(() => {
    listRef.current?.querySelector("[cmdk-list-sizer]")?.setAttribute("role", "presentation");
  });

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="cmd-overlay" />
        <Dialog.Content className="cmd-panel" aria-describedby={undefined} dir={dir}>
          <Dialog.Title className="sr-only">{labels.title}</Dialog.Title>
          <Command loop label={labels.title} className="flex w-full flex-col overflow-hidden">
            <div className="flex items-center gap-3 border-b border-line px-4">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                aria-hidden="true"
                className="shrink-0 text-muted"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              <Command.Input
                placeholder={labels.placeholder}
                className="h-14 w-full bg-transparent text-[1rem] outline-none placeholder:text-muted"
              />
            </div>

            <Command.List ref={listRef} className="max-h-[min(24rem,60dvh)] overflow-y-auto overscroll-contain p-2">
              <Command.Empty className="px-3 py-9 text-center text-muted">{labels.empty}</Command.Empty>
              {groups.map((group) => (
                <Command.Group key={group.heading} heading={group.heading} className="cmd-group">
                  {group.items.map((item) => (
                    <Command.Item
                      key={group.heading + item.label + (item.hint || "")}
                      value={`${group.heading} ${item.label} ${item.hint || ""} ${item.keywords || ""}`}
                      onSelect={() => onSelect(item)}
                      className="cmd-item"
                    >
                      <span className="grid min-w-0 flex-1">
                        <span className="truncate">{item.label}</span>
                        {item.hint && <span className="truncate text-[0.82rem] text-muted">{item.hint}</span>}
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
