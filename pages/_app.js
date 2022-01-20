// 파일 이름이 무조건 _app.js 이어야 한다!!!
// 각 페이지가 렌더링 될때마다 들르는 곳.

import Layout from "../componets/Layout";
import "../styles/globals.css";

// NextJS 기본적으로 App에 Component 와 pageProps 두 개의 Prop 을 가지고 있음
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
