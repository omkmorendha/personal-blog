import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ComponentType } from 'react';

const postsDir = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  readingTime?: string;
}

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const mins = Math.ceil(words / 200);
  return `${mins} min read`;
}

function readMeta(file: string): PostMeta {
  const slug = file.replace(/\.(mdx|md)$/, '');
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date
      ? new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    readingTime: estimateReadingTime(content),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  return files
    .map(readMeta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentPosts(n: number): PostMeta[] {
  return getAllPosts().slice(0, n);
}

export function getPostMeta(slug: string): PostMeta | null {
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  const file = candidates.find((f) => fs.existsSync(path.join(postsDir, f)));
  if (!file) return null;
  const meta = readMeta(file);
  return { ...meta, date: formatLong(meta.date) };
}

function formatLong(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return isNaN(d.getTime())
    ? dateStr
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

interface MDXModule {
  default: ComponentType;
}

export async function loadPostComponent(slug: string): Promise<ComponentType | null> {
  try {
    const mod: MDXModule = await import(`@/content/posts/${slug}.mdx`);
    return mod.default;
  } catch {
    return null;
  }
}
