export const GHOST_LOGO = `
   ▄████▄
  ██░░░░██
  ██░▀░▀░██
  ██░░░░░░██
  ██░░▄▄░░██
  ██░░░░░██
   ▀█▄██▄█▀
    ▀▀  ▀▀`;

export const SPECTER_BANNER = `╔═══════════════════════════╗
║  S P E C T E R           ║
║  Skill Graph Visualizer  ║
╚═══════════════════════════╝`;

export const BOX_CHARS = {
  topLeft: '┌',
  topRight: '┐',
  bottomLeft: '└',
  bottomRight: '┘',
  horizontal: '─',
  vertical: '│',
  teeRight: '├',
  teeLeft: '┤',
  cross: '┼',
} as const;

export function asciiBoxTop(width: number, title?: string): string {
  if (title) {
    const inner = width - 4;
    const padded = ` ${title} `;
    const remaining = inner - padded.length;
    const left = Math.floor(remaining / 2);
    const right = remaining - left;
    return `${BOX_CHARS.topLeft}${BOX_CHARS.horizontal.repeat(left)}${padded}${BOX_CHARS.horizontal.repeat(right)}${BOX_CHARS.topRight}`;
  }
  return `${BOX_CHARS.topLeft}${BOX_CHARS.horizontal.repeat(width - 2)}${BOX_CHARS.topRight}`;
}

export function asciiBoxBottom(width: number): string {
  return `${BOX_CHARS.bottomLeft}${BOX_CHARS.horizontal.repeat(width - 2)}${BOX_CHARS.bottomRight}`;
}

export function asciiBoxRow(content: string, width: number): string {
  const padded = content.padEnd(width - 4);
  return `${BOX_CHARS.vertical} ${padded} ${BOX_CHARS.vertical}`;
}
