"use client";
import CreatePost from "@/components/addPost";
import Head from "next/head";
import { useEffect, useState } from "react";
import GetPost from "@/components/getPost";
import { useSession } from "next-auth/react";
import { PostType } from "../../types/PostType";
import DeletePost from "@/components/deletePost";
import EditPost from "@/components/editPost";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data: session } = useSession();

  const getPost = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts");
      const result = await response.json();
      setPosts(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  const deletePost = async (id: number) => {
    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.post_id !== id));
      console.log("delete", id);
    } catch (error) {
      console.error(error);
    }
  };

  /*   const onEditPost = async (e: Event) => {
    e.preventDefault();
    try {
      const body = { content };
      const response = await fetch(
        `http://locahost:5000/todos/${post.post_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }; */

  const isUserAvailable =
    !!session && !!session.user?.name && !!session.user.image;

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="flex justify-center items-center flex-col mt-8">
        <div>
          <CreatePost
            session={session}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          />
        </div>
        <div className="bg-white my-8 p-8 rounded-lg">
          {isUserAvailable &&
            posts?.map((post) => (
              <div className="bg-gray-200  my-8 p-8 rounded-lg">
                <GetPost
                  key={post.post_id}
                  userName={session?.user?.name!}
                  avatar={session?.user?.image!}
                  post_id={post.post_id}
                  title={post.title}
                  content={post.content}
                  updated_at={post.updated_at}
                  created_at={post.created_at}
                  createdAt={post.created_at}
                />
                <DeletePost id={post.post_id} onDelete={deletePost} />
                <EditPost post={post} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
