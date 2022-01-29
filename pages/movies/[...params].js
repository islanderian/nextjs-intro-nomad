// 동적페이지 할당할때 '[]' 로 파일명 생성

import { useRouter } from "next/router";
import Seo from "../../componets/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title}></Seo>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
