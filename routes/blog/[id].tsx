import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../../types.d.ts";
import { loadPost } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;

    const post = await loadPost(id);

    return ctx.render(post);
  },
};

export default function PagePost(props: PageProps<Post>) {
  const post = props?.data || {};

  console.log({ props });

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
      <h1>{post.body}</h1>
    </article>
  );
}
