import { ComponentProps } from "react"

import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"

import { PostInfo } from "@/lib/posts/posts"

type Props = { post: PostInfo | null, className?: string }

const MDXComponents = {
  a: ({href, children, ...props}: ComponentProps<'a'>) => {
    // no link set
    if (!href) return <a {...props}>{children}</a>

    // check for internal links
    if (href.startsWith('/') || href.startsWith('#')) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      )
    }

    // default to standard link
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  },

  Image: (props: ComponentProps<typeof Image>) => (
    <Image {...props} />
  )
}

export default async function PostContent({ post, className = "" }: Props) {
  if (post) {
    return (
      <div className={className}>
        <h1>{post.meta.title}</h1>

        <MDXRemote
          source={post.content}
          components={MDXComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypePrettyCode],
            }
          }}
          />
      </div>
    )
  } else {
    return notFound();
  }
}