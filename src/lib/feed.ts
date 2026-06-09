import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface FeedProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  oldPrice: number;
  shipping: number;
  stock: string;
  delivery: string;
  image: string;
  url: string;
}

const FEED_PATH = resolve(process.cwd(), 'data/fiskegrej-feed.xml');

let rawCache: string | null = null;
const productCache = new Map<string, FeedProduct | null>();

function loadFeed(): string {
  if (rawCache === null) {
    rawCache = readFileSync(FEED_PATH, 'latin1');
  }
  return rawCache;
}

const ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&apos;': "'",
  '&#39;': "'",
};

function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&[a-z]+;/gi, (m) => ENTITY_MAP[m] ?? m);
}

function field(block: string, tag: string): string {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? decodeEntities(m[1].trim()) : '';
}

export function getProduct(productId: string): FeedProduct | null {
  if (productCache.has(productId)) return productCache.get(productId)!;

  const xml = loadFeed();
  const idTag = `<produktid>${productId}</produktid>`;
  const idx = xml.indexOf(idTag);
  if (idx === -1) {
    productCache.set(productId, null);
    return null;
  }

  const start = xml.lastIndexOf('<produkt>', idx);
  const end = xml.indexOf('</produkt>', idx);
  if (start === -1 || end === -1) {
    productCache.set(productId, null);
    return null;
  }

  const block = xml.slice(start, end);
  const product: FeedProduct = {
    id: productId,
    name: field(block, 'produktnavn'),
    brand: field(block, 'brand'),
    category: field(block, 'kategorinavn'),
    description: field(block, 'beskrivelse'),
    price: parseFloat(field(block, 'nypris')) || 0,
    oldPrice: parseFloat(field(block, 'glpris')) || 0,
    shipping: parseFloat(field(block, 'fragtomk')) || 0,
    stock: field(block, 'lagerantal'),
    delivery: field(block, 'leveringstid'),
    image: field(block, 'billedurl'),
    url: field(block, 'vareurl'),
  };

  productCache.set(productId, product);
  return product;
}

export function formatPrice(value: number): string {
  const hasDecimals = Math.round(value * 100) % 100 !== 0;
  return new Intl.NumberFormat('da-DK', {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  }).format(value);
}
