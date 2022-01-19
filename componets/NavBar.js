import Link from "next/link"; // <a> 태그 대신 NextJS 에서 네비게이션 이동할 때 사용하는 Router
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css"; // style 모듈 import

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? styles.active : ""}>
          About
        </a>
      </Link>
    </nav>
  );
}
