import Link from "next/link";
import logo from "../public/Asset 4.svg";
import Image from "next/image";
import iconSound from "../public/music-solid.svg";
import iconLight from "../public/circle-half-stroke-solid.svg";
import { useState } from "react";
export default function Navbar({ func, a, toggleLight, isaLightOn }) {
  const [sound1, setSound] = useState(false);
  function toggleSound() {
    let song = new Audio("/jazzy-abstract-beat-11254_2.mp3");
    setSound((e) => !e);
    if (sound1) {
      song.pause();
    } else {
      song.play();
    }

    song.currentTime = 0;
    song.resume;
  }

  const styles = {
    backgroundColor: isaLightOn ? "hsl(230,37%,91%)" : "#636e72",
    color: isaLightOn ? "black" : "hsl(230,37%,91%)",
  };
  return (
    <div className="Navbar" style={styles}>
      <div className="logo">
        <Link href={`/`}>
          <a>
            <Image src={logo} alt="Logo of the author" />
          </a>
        </Link>
      </div>
      <div className="navbar-in">
        <Link href={`/`}>
          <a>{a === "en" ? "Home" : "خانه"}</a>
        </Link>
        <Link href={`/About`}>
          <a>{a === "en" ? "About" : "بیشتر"}</a>
        </Link>
        <Link href={`/Service`}>
          <a>{a === "en" ? "Service" : "سرویس"}</a>
        </Link>

        <Link href={`/Resume`}>
          <a>{a === "en" ? "Resume" : "رزومه"}</a>
        </Link>
        <Link href={`/Blog`}>
          <a>{a === "en" ? "Blog" : "بلاگ"}</a>
        </Link>
      </div>
      <span className="language">
        <span onClick={() => func("fa")} className={`btn`}>
          فارسی
        </span>
        <span onClick={() => func("en")} className={`btn`}>
          english
        </span>
        <span className="sound-light">
          <Image src={iconLight} alt="icon" onClick={toggleLight} />
          <Image src={iconSound} alt="icon" onClick={toggleSound} />
        </span>
      </span>
    </div>
  );
}
