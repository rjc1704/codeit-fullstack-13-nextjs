"use client";

import dynamic from "next/dynamic";

const CommentItem = dynamic(() => import("./CommentItem"), {
  ssr: false,
});

export default function DynamicCommentItem({ comment }) {
  return <CommentItem comment={comment} />;
}
