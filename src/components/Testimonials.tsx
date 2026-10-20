import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, MapPin, Star } from "lucide-react";
import {
  GoogleIcon,
  Reveal,
  SectionHeading,
  StaggerGroup,
  staggerChild,
} from "./ui";
import { GOOGLE_REVIEWS_URL } from "../config";
import { cn } from "../utils/cn";

/* ---------------------------------------------------------------------------
 * Reseñas REALES publicadas en el perfil de Google de AvenueBits
 * (verificadas vía avenuebits.com y Trustindex · 5.0/5, 11 reseñas).
 * Textos reproducidos textualmente, sin ediciones.
 * ------------------------------------------------------------------------- */

type Review = {
  name: string;
  initials: string;
  meta: string;
  text: string;
  lang: "es" | "en";
  avatarClass: string;
};

const FEATURED: Review & { response: string; responseMeta: string } = {
  name: "Hector Sarmiento",
  initials: "H",
  meta: "Reseña de Google · Hace 2 años",
  text: "Excelente servicio. Siempre disponibles para solucionar.",
  lang: "es",
  avatarClass: "bg-sky-400/15 text-sky-300 ring-sky-400/30",
  response:
    "Gracias por su reseña y nos disculpe la respuesta tardía, nos alegra saber que valora nuestro servicio y disponibilidad. Siempre estamos aquí para ayudarle cuando lo necesite.",
  responseMeta: "Respuesta del propietario · Hace un año",
};

const REVIEWS: Review[] = [
  {
    name: "Vanessa Orozco",
    initials: "V",
    meta: "Reseña de Google",
    text: "The team at AvenueBits is very patient, knowledgeable, and quick to resolve issues. Anytime there is an update or a technical problem, they always come to my rescue! I'd like to take this opportunity to thank AvenueBits for their hard work and awesome customer service.",
    lang: "en",
    avatarClass: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  },
  {
    name: "Jaime Marcos",
    initials: "J",
    meta: "Reseña de Google",
    text: "Excellent and friendly service. We've been using this company for years for our IT solutions.",
    lang: "en",
    avatarClass: "bg-violet-400/15 text-violet-300 ring-violet-400/30",
  },
  {
    name: "Keith Tully",
    initials: "K",
    meta: "Reseña de Google",
    text: "Gustavo was quick to respond. Installed the wall jacks we needed. And he tested our connections so they worked. He was professional, on time, and did not require any hand holding to get the work done. Good pricing as well. Great experience!",
    lang: "en",
    avatarClass: "bg-amber-400/15 text-amber-300 ring-amber-400/30",
  },
  {
    name: "Diana Quiroz",
    initials: "D",
    meta: "Reseña de Google · Hace 7 años",
    text: "Exelente servicio",
    lang: "es",
    avatarClass: "bg-rose-400/15 text-rose-300 ring-rose-400/30",
  },
  {
    name: "Rosiry Cordoba",
    initials: "R",
    meta: "Reseña de Google",
    text: "Great technical support!!!",
    lang: "en",
    avatarClass: "bg-cyan-400/15 text-cyan-300 ring-cyan-400/30",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.article variants={staggerChild} className="h-full">
      <div className="flex h-full flex-col rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.16] hover:shadow-[0_24px_60px_-24px_rgba(56,189,248,0.22)]">
        <div className="flex items-center gap-3.5">
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-base font-bold ring-1",
              review.avatarClass
            )}
          >
            {review.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {review.name}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500">
              <BadgeCheck className="h-3 w-3 shrink-0 text-accent-400" />
              {review.meta}
            </p>
          </div>
          <GoogleIcon className="ml-auto h-5 w-5 shrink-0 opacity-80" />
        </div>
        <div className="mt-4">
          <Stars />
        </div>
        <blockquote
          lang={review.lang}
          className="mt-3 flex-1 text-sm leading-relaxed text-slate-300"
        >
          “{review.text}”
        </blockquote>
        {review.lang === "en" && (
          <p className="mt-4 text-[11px] text-slate-500">
            Reseña original en inglés
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section className="relative pt-24 pb-10 sm:pt-28 sm:pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reseñas verificadas"
          title={
            <>
              Calificación <span className="text-gradient">5.0 en Google</span>,
              ganada cliente a cliente
            </>
          }
        />

        {/* Summary + featured review + owner response */}
        <Reveal delay={0.1} className="mt-8">
          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
            <div className="flex flex-col justify-between gap-4 rounded-2xl glass-strong p-5">
              <div className="flex items-center gap-4">
                <GoogleIcon className="h-10 w-10 shrink-0" />
                <div>
                  <p className="font-display text-4xl font-bold tracking-tight text-white">5.0</p>
                  <div className="mt-1.5"><Stars /></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Basado en 11 reseñas de Google</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  Bohemia, NY · Desde 2015
                </p>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 ring-focus transition-colors hover:text-accent-400"
                >
                  Ver todas en Google
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-accent-400/25 bg-gradient-to-b from-accent-400/[0.07] to-transparent p-5">
              <div className="flex items-center gap-3">
                <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-base font-bold ring-1", FEATURED.avatarClass)}>
                  {FEATURED.initials}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{FEATURED.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500">
                    <BadgeCheck className="h-3 w-3 shrink-0 text-accent-400" />
                    {FEATURED.meta}
                  </p>
                </div>
                <GoogleIcon className="ml-auto h-5 w-5 shrink-0 opacity-80" />
              </div>
              <div className="mt-3"><Stars /></div>
              <blockquote lang={FEATURED.lang} className="mt-2 font-display text-lg font-medium leading-relaxed text-white">
                “{FEATURED.text}”
              </blockquote>
            </div>

            <div className="flex flex-col rounded-2xl glass p-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                <BadgeCheck className="h-4 w-4 text-emerald-400" />
                {FEATURED.responseMeta}
              </p>
              <blockquote className="mt-3 flex-1 border-l-2 border-accent-400/40 pl-4 text-sm leading-relaxed text-slate-300">
                “{FEATURED.response}”
              </blockquote>
              <p className="mt-3 text-xs font-medium text-slate-500">— AvenueBITS, Bohemia NY</p>
            </div>
          </div>
        </Reveal>

        {/* Review grid */}
        <StaggerGroup className="mx-auto mt-4 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}

          {/* Write-a-review CTA card */}
          <motion.a
            variants={staggerChild}
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-0 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 p-6 text-center ring-focus transition-all duration-300 hover:border-accent-400/40 hover:bg-accent-400/[0.04]"
          >
            <GoogleIcon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            <p className="font-display text-base font-semibold text-white">
              ¿Ya eres cliente?
            </p>
            <p className="max-w-[240px] text-sm leading-relaxed text-slate-400">
              Tu reseña en Google nos ayuda a seguir creciendo con la
              comunidad.
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300">
              Escribir reseña
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </motion.a>
        </StaggerGroup>
      </div>
    </section>
  );
}
