import { memo } from "react";
import { BLOG, type BlogPost } from "../data/content";
import { useReveal, useTilt } from "../hooks/useInteractions";
import SplitTitle from "./SplitTitle";
import SmartImage from "./SmartImage";
import { ArrowRight, ArrowUpRight, Scribble } from "./Decorations";

const PostCard = ({ post, index, onOpen }: { post: BlogPost; index: number; onOpen: (p: BlogPost) => void }) => {
  const ref = useTilt<HTMLAnchorElement>(5);
  return (
    <a
      ref={ref}
      href="#blog"
      className="post tilt rv rv-up"
      style={{ ["--d" as string]: `${0.15 + index * 0.12}s` }}
      onClick={(e) => {
        e.preventDefault();
        onOpen(post);
      }}
    >
      <div className="post__media">
        <SmartImage src={post.image} alt="" width={1200} height={700} />
        <span className="post__tag">{post.tag}</span>
      </div>
      <div className="post__body">
        <span className="post__meta">
          {post.date} <i aria-hidden="true" /> {post.read} read
        </span>
        <h3>
          <span>{post.title}</span>
        </h3>
        <p>{post.excerpt}</p>
        <span className="post__cta">
          Read Article <ArrowUpRight />
        </span>
      </div>
    </a>
  );
};

type Props = { onOpen: (p: BlogPost) => void; onViewAll: () => void };

const Blog = ({ onOpen, onViewAll }: Props) => {
  const ref = useReveal<HTMLElement>(0.12);
  return (
    <section ref={ref} id="blog" className="section blog container" aria-labelledby="blog-title">
      <div className="card blog__card">
        <div className="projects__head">
          <div>
            <span className="eyebrow rv rv-up">Notes &amp; Tutorials</span>
            <SplitTitle id="blog-title" text="From The Blog">
              <Scribble className="blog__scribble rv-draw" color="var(--blue)" />
            </SplitTitle>
          </div>
          <button type="button" className="text-link text-link--plain rv rv-up" onClick={onViewAll}>
            View All Posts <ArrowRight className="text-link__arrow" />
          </button>
        </div>
        <div className="blog__grid">
          {BLOG.map((p, i) => (
            <PostCard key={p.title} post={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Blog);
