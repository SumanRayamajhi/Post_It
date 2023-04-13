"use client";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import EditPost from "./editPost";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface Data {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  avatar: string;
  userName: string;
  createdAt: string;
}

export default function GetPost({
  userName,
  avatar,
  title,
  content,
  post_id,
  createdAt,
}: Data) {
  return (
    <div className="bg-gray-200 my-8 p-8 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
          alt="avatar"
          priority
        />
        <h3 className="font-bold text-gray-700">{userName}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{title}</p>
        <div className="">{content}</div>
        <div className="">{createdAt}</div>
      </div>

      <div className="flex gap-4 cursor-pointer items-center">
        <Link href={`/posts/${post_id}`}>
          <p className="text-sm font-bold text-gray-700">0 Comment</p>
        </Link>
      </div>
    </div>
  );
}
