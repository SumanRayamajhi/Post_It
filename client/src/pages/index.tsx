"use client";
import CreatePost from "@/components/addPost";
import Head from "next/head";
import { useEffect, useState } from "react";
import GetPost from "@/components/getPost";
import { useSession } from "next-auth/react";

type Data = {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  id: number;
  createdAt: string;
  updatedAt: string;
};

export default function Home() {
  const [posts, setPosts] = useState([]);
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

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="flex justify-center items-center mt-8">
        <div>
          <CreatePost />
        </div>
        <div>
          {posts.map((post) => (
            <GetPost />
          ))}
        </div>
      </div>
    </div>
  );
}
/*    key={post.id}
              avatar={session?.user?.image || ""}
              name={session?.user?.name || ""}
              title={post.title}
              content={post.content}
              post_id={0}
              createdAt={post.created_at}
              created_at={""}
              updated_at={""} */
