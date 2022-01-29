// 동적페이지 할당할때 '[]' 로 파일명 생성

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
