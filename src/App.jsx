import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Sheliga.png",
      name: "Paulo Sheliga",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir um projeto pro meu portfólio",
      },
      { type: "link", content: "https://github.com/Sheliga" },
    ],
    publishedAt: new Date("2022-10-12 11:50:02"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Sheliga.png",
      name: "Ana",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content: "Acabei de subir um projeto pro meu portfólio",
      },
      { type: "link", content: "https://github.com/Sheliga" },
    ],
    publishedAt: new Date("2022-10-13 11:50:02"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
