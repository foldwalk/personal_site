import { ComponentProps } from "react"

import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import remarkGfm from "remark-gfm"
import rehypePrettyCode, { Options } from "rehype-pretty-code"
import rehypeImgSize from "rehype-img-size"

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
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  },

  img: (props: any) => (
    <Image
      width={props.width || 800}
      height={props.height || 600}
      {...props}
    />
  )
}

const PrettyCodeOptions: Options = {
  theme: {
    light: "night-owl-light",
    dark: "night-owl",
  },
}

export default async function PostContent({ post, className = "" }: Props) {
  if (post) {
    return (
      <div className={className}>
        <Link className="return-link" href="/posts">Return to Articles</Link>

        <h1 className="mt-4">{post.meta.title}</h1>

        <span className="publish-date">
          {post.meta.publishedAt.toLocaleDateString('en-US',
            { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }
          )}
        </span>

        {post.meta.modifiedAt &&
          <span className="modify-date">
            (modified {post.meta.modifiedAt.toLocaleDateString('en-US',
              { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }
            )})
          </span>
        }

        <MDXRemote
          source={post.content}
          components={MDXComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [rehypePrettyCode, PrettyCodeOptions],
                [rehypeImgSize, { dir: "public" }],
              ],
            }
          }}
          />
      </div>
    )
  } else {
    return notFound();
  }
}