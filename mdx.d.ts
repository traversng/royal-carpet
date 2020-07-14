interface FrontMatter {
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

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}
