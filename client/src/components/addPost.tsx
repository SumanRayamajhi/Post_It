"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import EditPost from "./editPost";

export default function CreatePost({
  session,
  title,
  setTitle,
  content,
  setContent,
}: any) {
  const [isDisabled, setIsDisabled] = useState(false);
  let toastPostID: string;

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
      </div>
      <button
        disabled={isDisabled}
        className="text.sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
        type="submit"
      >
        Create a post
      </button>
    </form>
  );
}
