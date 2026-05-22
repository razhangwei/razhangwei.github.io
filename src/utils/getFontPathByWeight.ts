import type { FontData } from "astro:assets";

export function getFontPathByWeight(
  fonts: FontData[],
  weight: number,
  options?: {
    style?: "normal" | "italic";
    format?: string;
  }
): string | undefined {
  const style = options?.style ?? "normal";
  const format = options?.format ?? "truetype";

  for (const font of fonts) {
    if (font.weight !== String(weight) || font.style !== style) continue;
    const file = font.src.find(f => f.format === format);
    if (file) return file.url;
  }
  return undefined;
}
