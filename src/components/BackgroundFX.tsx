export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,var(--bg-top)_0%,var(--bg-base)_55%,var(--bg-base)_100%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]" />

      {/* Aurora orbs */}
      <div className="absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 animate-aurora-1">
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.13),transparent)] blur-3xl" />
      </div>
      <div className="absolute top-[38%] -left-56 h-[620px] w-[620px] animate-aurora-2">
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.1),transparent)] blur-3xl" />
      </div>
      <div className="absolute top-[64%] -right-64 h-[680px] w-[680px] animate-aurora-1">
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.08),transparent)] blur-3xl" />
      </div>
      <div className="absolute bottom-[-12%] left-[22%] h-[520px] w-[720px] animate-aurora-2">
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.07),transparent)] blur-3xl" />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
