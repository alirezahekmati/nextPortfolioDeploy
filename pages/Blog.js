import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Blog({ a }) {
  // export default function Blog({ a, posts }) {
  async function getStrapiData() {
    const resp = await fetch(
      "http://130.185.78.118:1337/api/blogs?populate=*",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const posts = await resp.json();
    setTexts(posts.data);
    console.log(posts);
  }

  const [texts, setTexts] = useState([]);
  const code =
    "60b976b00f921d121db9e8ecdf618ed3144edd5f52f9aff703092858e63f53e7ea17034614c78f57e13e219bb55f5ae1d84a646e8adfe6d70fc658ca31bf4612f3b28ab3dd1c032786e04452d61327d71792962bfbce611eb5d557c59c54e858dbcb569bbe292b67abbaeb1ab89b541faa68f0851856317000f41f888fba9178";

  useEffect(() => {
    getStrapiData();
  }, []);
  return (
    <div className="App" dir={a === "en" ? "ltr" : "rtl"}>
      <div>Blog</div>
      {texts.map((e, id) => (
        <div key={id}>
          <h1>{e.attributes.Header}</h1>
          {e.attributes.Image.data && (
            <Image
              src={`http://130.185.78.118:1337${e.attributes.Image.data.attributes.url}`}
              alt="an image from starpi api"
              width={400}
              height={400}
            />
          )}
          <p>{e.attributes.Description}</p>
        </div>
      ))}
      <Link href={`/`}>
        <a target={`_blank`}>add blog</a>
      </Link>
      <br />
      <Link href={`/`}>
        <a>back to home</a>
      </Link>
    </div>
  );
}
// export function getServerSideProps() {
//   async function boo() {
//     const res = await fetch("http://localhost:1337/api/blogs?populate=*");
//     const posts = await res.json();
//     return posts;
//   }
//   const post = boo();
//   return {
//     props: {
//       post,
//     },
//   };
// }
