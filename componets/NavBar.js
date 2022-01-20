import Link from "next/link"; // <a> 태그 대신 NextJS 에서 네비게이션 이동할 때 사용하는 Router
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* public 폴더 안의 이미지 파일은 그냥 '/'뒤에 파일명만 붙여주면 된다 */}
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      {/* Styled JSX */}
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
