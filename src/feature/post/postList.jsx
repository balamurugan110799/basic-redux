import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";

export default function PostList() {
  console.log(useSelector((state) => state.posts));
  const posts = useSelector(selectAllPost);

  const renderPosts = posts.map((post) => (
    <article className="border p-3  border-[#000] mb-2" key={post.id}>
      <h3 className=" text-[20px]">{post.title}</h3>
      <p className=" text-[18px]">{post.content.substring(0, 100)}</p>
      <p>by {post?.userID}</p>
    </article>
  ));
  return (
    <div className="p-3">
      <section className="">
        <h2 className=" text-[26px]">Posts</h2>
      </section>
      <div>{renderPosts}</div>
    </div>
  );
}
