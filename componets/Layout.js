// _app.js 가 너무 길어지는 것을 방지하기 위해 Layout Component를 만들어 감싸준다.

import NavBar from "./NavBar";

// 'children' 은 react가 제공하는 prop. Component 안에 다른 Component를 넣을 때
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
