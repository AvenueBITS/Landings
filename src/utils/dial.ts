import type { MouseEvent } from "react";

let toastTimer: number | undefined;

function showToast(message: string) {
  const id = "dial-toast";
  document.getElementById(id)?.remove();
  window.clearTimeout(toastTimer);
  const el = document.createElement("div");
  el.id = id;
  el.setAttribute("role", "status");
  el.textContent = message;
  Object.assign(el.style, {
    position: "fixed",
    left: "50%",
    bottom: "max(20px, env(safe-area-inset-bottom, 0px))",
    transform: "translateX(-50%)",
    zIndex: "200",
    maxWidth: "calc(100vw - 32px)",
    padding: "12px 18px",
    borderRadius: "14px",
    background: "var(--color-ink-900)",
    color: "var(--color-white)",
    border: "1px solid rgba(128,140,160,0.35)",
    boxShadow: "0 12px 40px -12px rgba(0,0,0,0.45)",
    font: "500 14px/1.4 Inter, system-ui, sans-serif",
    textAlign: "center",
  } as Partial<CSSStyleDeclaration>);
  document.body.appendChild(el);
  toastTimer = window.setTimeout(() => el.remove(), 5000);
}

/**
 * Click-to-call: intenta abrir el marcador del sistema (3CX) sin navegar la página.
 * Navegar directo a `tel:` en un marco aislado deja la UI en blanco, así que se
 * dispara desde un iframe oculto. Además copia el número y avisa, porque dentro
 * de una vista previa embebida el navegador puede bloquear el protocolo.
 */
export function dialPhone(e: MouseEvent<HTMLAnchorElement>) {
  const url = e.currentTarget.href;
  if (!url.startsWith("tel:")) return;
  e.preventDefault();
  const label = e.currentTarget.textContent?.match(/\(\d{3}\)\s?\d{3}-\d{4}/)?.[0] ?? url.replace("tel:", "");
  try {
    const frame = document.createElement("iframe");
    frame.style.display = "none";
    frame.setAttribute("aria-hidden", "true");
    frame.src = url;
    document.body.appendChild(frame);
    window.setTimeout(() => frame.remove(), 1500);
  } catch {
    /* ignorar */
  }
  const done = (copied: boolean) =>
    showToast(
      copied
        ? `Abriendo 3CX… Número copiado: ${label}. Si no se abre, pégalo en 3CX.`
        : `Abriendo 3CX… Si no se abre, marca ${label} desde 3CX.`
    );
  try {
    navigator.clipboard.writeText(label).then(() => done(true), () => done(false));
  } catch {
    done(false);
  }
}
