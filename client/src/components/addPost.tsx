/* "use client";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, useRef, useState } from "react";

type State = {
  text: string;
};

export default function CreatPost() {

  const [content, setContent] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const body = { content };
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };



  function handleClick(
    event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>
  ) {
    event.preventDefault();
  
    setContent((event.target as HTMLButtonElement).value);
  }

  return (
    <div className="my-15 p-10 shadow-lg rounded-lg max-w-md mx-auto">
      {content}
      <form onSubmit={onSubmitForm}>
        <h1 className="text-2xl font-bold">Post your thoughts</h1>
        <div className="py-2">
          <textarea
            className="bg-gray-800 h-48 w-full text-white rounded-lg p-2 text-small"
            value={content}
            onClick={handleClick}
          ></textarea>
          <p className="text-cyan-600 font-medium text-sm">0/300</p>
        </div>
        <button className="w-full bg-cyan-600 text-white font-medium p-2 my-2 rounded-lg text-sm">
          Submit
        </button>
      </form>
    </div>
  );
}
 */

"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  let toastPostID: string;

  const { data: session } = useSession();

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    toastPostID = toast.loading("Creating your post", { id: toastPostID });
    setIsDisabled(true);

    if (!session) {
      toast.error("Please sign in first", { id: toastPostID });
    } else {
      if (title.length > 50) {
        toast.error("Title is too long", { id: toastPostID });
      } else if (content.length > 5000) {
        toast.error("Content is too long", { id: toastPostID });
      } else if (!title.length) {
        toast.error("Title is empty!", { id: toastPostID });
      } else {
        try {
          const body = { title, content };
          const response = await fetch("http://localhost:5000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          console.log(response);
          toast.success("Post has been made successfully", { id: toastPostID });
        } catch (error) {
          console.error(error);
        }
      }
    }

    setTitle("");
    setContent("");
    setIsDisabled(false);
  };

  return (
    <form className="bg-white my-8 p-8 rounded-md" onSubmit={onSubmitForm}>
      <div>
        <div className="flex flex-col my-4">
          <textarea
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
            placeholder="What is in your thought"
            className="p-4 text-lg rounded-md my-2 bg-gray-200"
          ></textarea>
        </div>

        <div className="flex items-center justify-center gap-2">
          <p
            className={`font-bold text-sm ${
              title.length > 50 ? "text-red-700" : "text.gray-700"
            }`}
          >{`${title.length}/50`}</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col my-4">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            name="title"
            value={content}
            placeholder="What is in your thought"
            className="p-4 text-lg rounded-md my-2 bg-gray-200"
          ></textarea>
        </div>

        <div className="flex items-center justify-center gap-2">
          <p
            className={`font-bold text-sm ${
              content.length > 5000 ? "text-red-700" : "text.gray-700"
            }`}
          >{`${content.length}/5000`}</p>
        </div>
        <button
          disabled={isDisabled}
          className="text.sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Create a post
        </button>
      </div>
    </form>
  );
}
