"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import ClientOnlyComponent from "./ClientComponent"
// 클라이언트에서만 렌더링되는 컴포넌트
const ClientOnlyComponent = dynamic(() => import("./ClientComponent"), {
  ssr: false, // 서버 사이드 렌더링 비활성화
});

function SafeComponent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsClient(true);
    }, 0);
  }, []);

  return <div>{isClient ? <ClientOnlyComponent /> : <p>로딩 중...</p>}</div>;
}
