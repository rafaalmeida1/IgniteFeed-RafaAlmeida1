import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rafaalmeida1.png",
      name: "Rafael Almeida",
      role: "Web Developer at HandR-Solves",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-28 13:20:07'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Gipria.png",
      name: "Giovana Alves",
      role: "Frontend Developer at IBM",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-29 13:19:57'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className="max-w-[70rem] my-[2rem] mx-auto py-0 px-[1rem] grid grid-cols-wrapper gap-[2rem] items-start maxMd:grid-cols-wrapperReduce ">
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </>
  )
}