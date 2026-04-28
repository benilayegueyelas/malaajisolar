import { ImageIcon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "leaf" | "sun" | "muted";
type Ratio = "square" | "video" | "4/3" | "3/2" | "auto";

export interface MediaPlaceholderProps {
  /** Source image URL. If missing or fails to load, shows the placeholder. */
  src?: string | null;
  /** Accessible alt text (also used as aria-label for the placeholder). */
  alt: string;
  /** Optional label shown under the icon when no image. */
  label?: string;
  /** Visual style of the placeholder background. */
  variant?: Variant;
  /** Aspect ratio wrapper. Use "auto" to let the parent control sizing. */
  ratio?: Ratio;
  /** Extra classes on the wrapper. */
  className?: string;
  /** Extra classes on the <img> when shown. */
  imgClassName?: string;
  /** Native loading attr. */
  loading?: "lazy" | "eager";
}

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  auto: "",
};

const variantClass: Record<Variant, string> = {
  leaf: "bg-leaf-gradient text-primary-foreground",
  sun: "bg-sun-gradient text-accent-foreground",
  muted: "bg-secondary text-muted-foreground",
};

/**
 * MediaPlaceholder
 * Reusable wrapper that renders an image when available and falls back to a
 * branded placeholder (icon + optional label) when the source is missing or
 * fails to load. Provides a consistent media rendering across the site.
 */
export function MediaPlaceholder({
  src,
  alt,
  label = "Visuel à venir",
  variant = "leaf",
  ratio = "4/3",
  className,
  imgClassName,
  loading = "lazy",
}: MediaPlaceholderProps) {
  const hasSrc = Boolean(src && src.trim().length > 0);
  const Icon = variant === "muted" ? ImageIcon : Sun;

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-secondary", ratioClass[ratio], className)}
    >
      {hasSrc ? (
        <img
          src={src as string}
          alt={alt}
          loading={loading}
          className={cn("w-full h-full object-cover", imgClassName)}
          onError={(e) => {
            // Replace the broken image with the branded fallback.
            const img = e.currentTarget;
            const parent = img.parentElement;
            if (!parent) return;
            img.remove();
            const fb = document.createElement("div");
            fb.setAttribute("role", "img");
            fb.setAttribute("aria-label", alt);
            fb.className = cn(
              "w-full h-full flex flex-col items-center justify-center gap-2",
              variantClass[variant],
            );
            fb.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-90"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg><span class="text-xs font-medium opacity-90">${label}</span>`;
            parent.appendChild(fb);
          }}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={cn(
            "w-full h-full flex flex-col items-center justify-center gap-2",
            variantClass[variant],
          )}
        >
          <Icon className="h-10 w-10 opacity-90" aria-hidden="true" />
          <span className="text-xs font-medium opacity-90">{label}</span>
        </div>
      )}
    </div>
  );
}

export default MediaPlaceholder;
