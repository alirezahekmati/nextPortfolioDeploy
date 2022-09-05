import Image from "next/image";
import Contact from "../components/Contact";

import h from "../public/me grey 2.svg";
import Link from "next/link";

export default function Introduction({ a, isaLightOn, posts }) {
  const styles = {
    backgroundColor: isaLightOn ? "hsl(230,37%,91%)" : "#636e72",
    color: isaLightOn ? "black" : "hsl(230,37%,91%)",
  };

  return (
    <div
      className="Introduction"
      dir={a === "en" ? "ltr" : "rtl"}
      style={styles}
    >
      <div className="Introduction-text">
        <div>
          <h1>
            {a === "en" ? (
              <>
                I am <span className="accent">Alireza</span> hekmati
              </>
            ) : (
              <>
                من <span className="accent">علیرضا</span> حکمتی هستم
              </>
            )}
          </h1>
          <p>
            {a === "en"
              ? `Frontend Developer | React Developer | Next JS | The time is always
            right to do what is right. ✨`
              : `توسعه دهنده فرانت | توسعه دهنده وب | نکست | هر لحظه ای مناسبه برای انجام کار درست 
              ✨`}
          </p>
        </div>
        <button>
          <Link
            href={`https://drive.google.com/file/d/1_PJEmeWHS0uKmTPLRq2gKfEdTRkysTPL/view?usp=sharing`}
          >
            <a target={`_blank`} className="simple-a">
              {a === "en" ? "Download CV" : "دانلود cv"}
            </a>
          </Link>
        </button>

        <Contact />
      </div>
      <div className="Introduction-image">
        <Image
          src={h}
          alt="Picture of the author"
          layout="responsive"
          priority={true}
        />
      </div>
    </div>
  );
}
