export interface Review {
  reviewer: string
  quote: string
  source: string
  date: string
  link: string
  rating: number
  title?: string
}

export interface FrontMatter {
  layout: string
  title: string
  excerpt: string
  timestamp: string
  date: string
  __resourcePath: string
  tags: string[]
  postImage?: string
  altText?: string
  readingTime: any
  author: string
}

declare module '@mdx-js/react' {
  import * as React from 'react'
  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul'
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{children: React.ReactNode}>
  }
  export interface MDXProviderProps {
    children: React.ReactNode
    components: Components
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

// types/next-optimized-images.d.ts
declare module '*.png';
declare module '*.png?include';
declare module '*.png?webp';
declare module '*.png?inline';
declare module '*.png?url';
declare module '*.png?original';

declare module '*.jpg';
declare module '*.jpg?include';
declare module '*.jpg?webp';
declare module '*.jpg?inline';
declare module '*.jpg?url';
declare module '*.jpg?original';

declare module '*.jpeg';
declare module '*.jpeg?include';
declare module '*.jpeg?webp';
declare module '*.jpeg?inline';
declare module '*.jpeg?url';
declare module '*.jpeg?original';

declare module '*.webp';
declare module '*.webp?include';
declare module '*.webp?webp';
declare module '*.webp?inline';
declare module '*.webp?url';
declare module '*.webp?original';

declare module '*.svg';
declare module '*.svg?include';
declare module '*.svg?webp';
declare module '*.svg?inline';
declare module '*.svg?url';
declare module '*.svg?original';
declare module '*.svg?sprite';

declare module '*.gif';
declare module '*.gif?include';
declare module '*.gif?webp';
declare module '*.gif?inline';
declare module '*.gif?url';
declare module '*.gif?original';
