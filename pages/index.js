import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../componets/Seo";

export default function Home({ results }) {
  const router = useRouter();
  // 영화 이미지 클릭했을 때
  const onClick = (id, title) => {
    // 두번째 인자는 'as'. 마스킹할 url
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title: title,
        },
      },
      `/movies/${id}`
    );
  };

  return (
    <div className="container">
      <Seo title="Home"></Seo>
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: movie.original_title,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// Server side redering, function 이름 중요!! 그대로 써야함. getServerSideProps
// 오직 백엔드 서버에서만 실행됨. API 키를 여기에 적어주어도 됨
// 데이터를 받은 후 화면에 렌더링 함
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000//api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
