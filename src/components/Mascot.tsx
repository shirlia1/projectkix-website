export function Mascot() {
  return (
    <div className="fixed bottom-5 right-5 z-30 hidden sm:flex flex-col items-end gap-2 pointer-events-none">
      <div className="bg-white card-soft px-3 py-1.5 text-xs font-bold text-ink uppercase tracking-wide">Let's Meet</div>
      <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center text-2xl shadow-lg" aria-label="ProjectKix mascot">
        👟
      </div>
    </div>
  );
}
