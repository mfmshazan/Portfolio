// One-off: renders app/icon.svg into favicon.ico (PNG-in-ICO) + apple-icon.png
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "app", "icon.svg"));

const sizes = [16, 32, 48];

const pngs = await Promise.all(
  sizes.map((s) => sharp(svg, { density: 384 }).resize(s, s).png().toBuffer())
);

// Build an ICO that embeds PNG frames (supported by all modern browsers).
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);

const dirSize = 16 * sizes.length;
let offset = 6 + dirSize;
const dirEntries = [];
pngs.forEach((png, i) => {
  const s = sizes[i];
  const e = Buffer.alloc(16);
  e.writeUInt8(s === 256 ? 0 : s, 0); // width
  e.writeUInt8(s === 256 ? 0 : s, 1); // height
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // color planes
  e.writeUInt16LE(32, 6); // bpp
  e.writeUInt32LE(png.length, 8); // size
  e.writeUInt32LE(offset, 12); // offset
  offset += png.length;
  dirEntries.push(e);
});

const ico = Buffer.concat([header, ...dirEntries, ...pngs]);
writeFileSync(join(root, "app", "favicon.ico"), ico);

// Apple touch icon
await sharp(svg, { density: 512 })
  .resize(180, 180)
  .png()
  .toFile(join(root, "app", "apple-icon.png"));

console.log("Generated favicon.ico (", sizes.join(","), ") + apple-icon.png");
