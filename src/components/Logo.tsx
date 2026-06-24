import { Heart } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="font-display italic font-extrabold tracking-tight text-[1.35rem] leading-none">
        <span className="text-ink">PROJECT</span>
        <span className="text-brand">KIX</span>
      </span>
      <span className="relative -mt-1">
        <Heart size={16} className="text-brand fill-brand" />
      </span>
    </span>
  );
}
