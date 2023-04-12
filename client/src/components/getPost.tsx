"use client";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

interface Data {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  avatar: string;
  name: string;
  createdAt: string;
}

export default function GetPost({}) {
  /*   const [posts, setPosts] = useState([]);
  console.log("posts", posts);

  const getPost = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []); */

  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      {/*    <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
          alt="avatar"
          priority
        />
        <h3 className="font-bold text-gray-700">{name}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{title}</p>
      </div>
      <div className="">{content}</div>
      <div className="">{createdAt}</div> */}
    </div>
  );
}
