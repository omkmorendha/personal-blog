import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  readingTime?: string;
  timestamp: number;
}

function estimateReadingTime(content: string): string {
  const words = content.trim() ? content.trim().split(/\s+/).length : 0;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

function parseTimestamp(date: unknown): number {
  if (!date) return 0;
  const parsed = date instanceof Date ? date.getTime() : new Date(String(date)).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}

function formatDate(timestamp: number, style: 'short' | 'long'): string {
  if (!timestamp) return '';
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: style === 'short' ? 'short' : 'long',
    day: 'numeric',
  }).format(new Date(timestamp));
}

function readMeta(file: string): PostMeta {
  const slug = file.replace(/\.(mdx|md)$/, '');
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const { data, content } = matter(raw);
  const timestamp = parseTimestamp(data.date);
  return {
    slug,
    title: data.title ?? slug,
    date: formatDate(timestamp, 'short'),
    description: data.description ?? '',
    tags: data.tags ?? [],
    readingTime: estimateReadingTime(content),
    timestamp,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  return files.map(readMeta).sort((a, b) => b.timestamp - a.timestamp);
}

export function getRecentPosts(n: number): PostMeta[] {
  return getAllPosts().slice(0, n);
}

export function getPostMeta(slug: string): PostMeta | null {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  const file = candidates.find((f) => fs.existsSync(path.join(postsDir, f)));
  if (!file) return null;
  const meta = readMeta(file);
  return { ...meta, date: formatDate(meta.timestamp, 'long') };
}
