import { useEffect, useState } from "react";

export default function Service({ a, posts }) {
  const [image, setImage] = useState([]);
  useEffect(() => {
    setImage(posts);
  }, []);

  return (
    <div className="App" dir={a === "en" ? "ltr" : "rtl"}>
      {a === "en" ? (
        <>
          <h1>Services</h1>

          <h2>Front End Developer</h2>
          <h2>Back End Developer</h2>
          <h2>Web Designer</h2>
        </>
      ) : (
        <>
          <h1>سرویس ها </h1>

          <h2>توسعه دهنده فرانت</h2>
          <h2>توسعه دهنده بک اند</h2>
          <h2>طراحی سایت</h2>
        </>
      )}
    </div>
  );
}
