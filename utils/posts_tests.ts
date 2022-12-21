import { loadPost } from "./posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("loadPost() returns null if the post does not exists", async () => {
  const post = await loadPost("non-existing-post");

  assertEquals(post, null);
});

Deno.test("loadPost() returns a post object type if post does exists", async () => {
  const post = await loadPost("first-post");

  assertEquals(post?.id, "first-post");
});
