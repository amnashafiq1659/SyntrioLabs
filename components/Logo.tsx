import Image from "next/image";

/**
 * Intrinsic pixel dimensions of `/public/Logo_without_background.png`
 * (a genuinely transparent RGBA PNG). These are handed to next/image purely so
 * the correct aspect ratio is reserved up front — the on-screen size is driven
 * by the `height` prop with `width: auto`, so the ratio is never distorted.
 */
const LOGO_INTRINSIC_W = 1269;
const LOGO_INTRINSIC_H = 1240;

type LogoProps = {
  /**
   * Rendered height in px. Width scales automatically (`width: auto`) so the
   * original aspect ratio stays locked. @default 30
   */
  height?: number;
  /**
   * Preload eagerly instead of lazy-loading. Set on the above-the-fold nav
   * logo so it never flashes in. @default false
   */
  priority?: boolean;
  /** Extra class names merged onto the image. */
  className?: string;
  /** Accessible name. @default "SyntrioLabs" */
  alt?: string;
};

/**
 * Brand logo — the transparent PNG (`/public/Logo_without_background.png`)
 * placed directly: no wrapping background box, no colour filter, no forced
 * square. `unoptimized` serves the original file bytes untouched (Next never
 * re-compresses or re-encodes it), and `height` + `width: auto` preserve the
 * exact original aspect ratio.
 */
export default function Logo({
  height = 30,
  priority = false,
  className = "",
  alt = "SyntrioLabs",
}: LogoProps) {
  const classNames = ["logo-img", className].filter(Boolean).join(" ");

  return (
    <Image
      src="/Logo_without_background.png"
      alt={alt}
      width={LOGO_INTRINSIC_W}
      height={LOGO_INTRINSIC_H}
      priority={priority}
      unoptimized
      className={classNames}
      style={{ height, width: "auto" }}
    />
  );
}
