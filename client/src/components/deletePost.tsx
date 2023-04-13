import { AiFillDelete } from "react-icons/ai";

export default function DeletePost({ id, onDelete }) {
  return (
    <button
      className="text-pink-600 flex items-center justify-center gap-2 py-2 text-sm"
      onClick={() => onDelete(id)}
    >
      <AiFillDelete className="text-2xl" />
      Delete
    </button>
  );
}
