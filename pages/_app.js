// 파일 이름이 무조건 _app.js 이어야 한다!!!
// NextJS 는 index 렌더링되기 가장먼저 전에 먼저 _app 을 보기 때문. 렌더링 되기 전에 진행

import "../styles/globals.css";
import NavBar from "../componets/NavBar";

// NextJS 기본적으로 App에 Component 와 pageProps 두 개의 Prop 을 가지고 있음
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}
