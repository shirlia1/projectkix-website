import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowRight, Footprints } from "lucide-react";

const SESSION_KEY = "pk_popup_seen";
const DELAY_MS = 10_000;

/**
 * Gentle, once-per-session conversion popup. Appears after 10s or on exit
 * intent (desktop), never immediately. Radix Dialog provides the accessible
 * modal behavior (focus trap, Escape to close, focus return, aria-modal,
 * scroll lock). Animations are CSS-based and so are disabled automatically for
 * users who prefer reduced motion.
 */
export function ConversionPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let shown = false;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — fall back to showing once per load.
    }

    const trigger = () => {
      if (shown) return;
      shown = true;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      cleanup();
      setOpen(true);
    };

    const timer = window.setTimeout(trigger, DELAY_MS);

    // Exit intent: cursor leaves the top of the viewport. Desktop pointers only;
    // mobile relies on the timer.
    const supportsHover = window.matchMedia?.("(pointer: fine)").matches;
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) trigger();
    };

    function cleanup() {
      window.clearTimeout(timer);
      if (supportsHover) document.removeEventListener("mouseout", onMouseOut);
    }

    if (supportsHover) document.addEventListener("mouseout", onMouseOut);
    return cleanup;
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="pk-popup-overlay fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm" />
        <Dialog.Content
          className="pk-popup-content fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md card-soft p-7 sm:p-8 focus:outline-none"
        >
          <Dialog.Close
            aria-label="Close"
            className="absolute right-4 top-4 w-9 h-9 rounded-full inline-flex items-center justify-center text-body hover:text-ink hover:bg-canvas transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand"
          >
            <X size={18} />
          </Dialog.Close>

          <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center">
            <Footprints size={24} />
          </div>

          <Dialog.Title className="mt-5 text-2xl font-extrabold text-ink leading-tight">
            Ready to turn unused sneakers into impact?
          </Dialog.Title>

          <Dialog.Description className="mt-3 text-body">
            Host a shoe drive, request a donation bag, or partner with ProjectKix to support adaptive athletes and reduce sneaker waste.
          </Dialog.Description>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/contribute" onClick={() => setOpen(false)} className="btn-red group justify-center">
              Request a Donation Bag
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/partners" onClick={() => setOpen(false)} className="btn-black justify-center">
              Partner With Us
            </Link>
          </div>

          <p className="mt-4 text-xs text-body text-center sm:text-left">
            Free prepaid shipping · Takes about a minute
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
