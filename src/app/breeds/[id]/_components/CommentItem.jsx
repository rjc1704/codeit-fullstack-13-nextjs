"use client";

import { deleteComment } from "@/lib/services/actions/comments";
import { useState } from "react";

export default function CommentItem({ comment }) {
  const [randomId] = useState(() => Math.random().toString(36).slice(2, 5));

  const handleDelete = async (commentId) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    const result = await deleteComment(commentId);
    if (!result.success) {
      alert(result.error || "댓글 삭제에 실패했습니다");
    }
  };

  return (
    <li key={comment.id} className="border-b pb-2">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-700">{comment.content}</p>
          <p className="text-sm text-gray-500">
            {new Date(comment.createdAt).toLocaleTimeString()}
          </p>
          <p className="text-xs text-gray-400">ID: {randomId}</p>
        </div>
        <button
          className="text-red-500 hover:text-red-700 text-sm"
          onClick={() => handleDelete(comment.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
}
