export function getContrastColor(hexColor: string): string {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#0f172a' : '#ffffff';
}

export function generateShades(primaryHex: string) {
  return {
    50: `${primaryHex}10`,
    100: `${primaryHex}20`,
    500: primaryHex,
    600: primaryHex,
  };
}
