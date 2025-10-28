"use client";

import { deleteComment } from "@/lib/services/actions/comments";

export default function CommentItem({ comment }) {
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
            {new Date(comment.createdAt).toLocaleString()}
          </p>
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
