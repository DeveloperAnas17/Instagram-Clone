import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "amanabbasi",
    userImg:
      "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s48-c-k-c0x00ffffff-no-rj",
    img: "https://i.ytimg.com/vi/a6Xs2Ir40OI/maxresdefault.jpg",
    caption: "Subscribe the channel go fast ",
  },
  {
    id: "124",
    username: "mdAnas",
    userImg:
      "https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s48-c-k-c0x00ffffff-no-rj",
    img: "https://i.ytimg.com/vi/cuHDQhDhvPE/hqdefault.jpg",
    caption: "I build 10 apps with different languages ",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
