import Link from "next/link";

export default function Resume({ a }) {
  return (
    <div className="App" dir={a === "en" ? "ltr" : "rtl"}>
      {/* <Navbar /> */}
      <div className="resume">
        {a === "en" ? (
          <>
            <h4 className="accent">Exprience</h4>
            <p>
              I have done programming for about 3 years or more I have worked
              with C, C#, python,mql5(finance programing language) but it starts
              to get serious with JavaScript I fall in love with JavaScript
            </p>
            <h4 className="accent">SKILLS</h4>
            <p>javaScript, React,Next,starpi,mogoDB, git, GitHub, Html, CSS</p>
            <h4 className="accent">PROJECTS</h4>
            <p>
              1. job website that uses several APIs built with vanilla js:
              <Link href={`https://alirezahekmati.github.io/api-job-website/`}>
                <a target={`_blank`}>job EasY</a>
              </Link>
              <br />
              2. Quiz app that uses random question APIs built with React:
              <Link href={`https://alirezahekmati.github.io/Quizzical/`}>
                <a target={`_blank`}>Quizzical</a>
              </Link>
              <br />
              3. color palette that uses APIs to get color scheme:
              <Link href={`https://alirezahekmati.github.io/color-peleate/`}>
                <a target={`_blank`}>color palette</a>
              </Link>
            </p>
            <h4 className="accent">CERTIFICATION</h4>
            <p>
              <Link href={``}>
                <a target={`_blank`}>1. Scrimba front end career path</a>
              </Link>
              <br />

              <Link
                href={`https://www.udemy.com/certificate/UC-82bbb907-1932-48a5-8021-550c68d2aa80/`}
              >
                <a target={`_blank`}>
                  2. The complete gsap, js,css,html course.{" "}
                </a>
              </Link>
              <br />

              <Link
                href={`https://www.udemy.com/certificate/UC-81a9ad61-cae9-4242-9360-6892f84b057f/`}
              >
                <a target={`_blank`}>3. front end web development</a>
              </Link>
            </p>
            <button>
              <Link
                href={`https://drive.google.com/file/d/1_PJEmeWHS0uKmTPLRq2gKfEdTRkysTPL/view?usp=sharing`}
              >
                <a target={`_blank`} className="simple-a">
                  Download Resume
                </a>
              </Link>
            </button>
          </>
        ) : (
          <>
            <h4 className="accent">تجربه</h4>
            <p>
              من 3 ساله برنامه نویسی میکنم یا شاید بیشتر من تا الان با سی ,سی
              شارپ ,پایتون و ام کیو ال 5 کار کردم ولی همه چیز با جاوا اسکریپت
              شروع به جدی شدن کرد و من عاشق جاوااسکریپت شدم
            </p>
            <h4 className="accent">مهارت ها</h4>
            <p>
              جاوااسکریپت, ریاکت, نکست, استراپی ,مونگو دی بی, گیت, گیت هاب, اچ
              تی ام ال , سی اس اس
            </p>
            <p>
              از اینجا به پایینو فارسی نمیکنم همینو بخونید فهمیدنش به خودتون 😂
            </p>
            <h4 className="accent">پروژه ها</h4>
            <p>
              1. job website that uses several APIs built with vanilla js:
              <Link href={`https://alirezahekmati.github.io/api-job-website/`}>
                <a target={`_blank`}>job EasY</a>
              </Link>
              <br />
              2. Quiz app that uses random question APIs built with React:
              <Link href={`https://alirezahekmati.github.io/Quizzical/`}>
                <a target={`_blank`}>Quizzical</a>
              </Link>
              <br />
              3. color palette that uses APIs to get color scheme:
              <Link href={`https://alirezahekmati.github.io/color-peleate/`}>
                <a target={`_blank`}>color palette</a>
              </Link>
            </p>
            <h4 className="accent">CERTIFICATION</h4>
            <p>
              <Link href={`https://scrimba.com/certificate/uZYgzEuz/gfrontend`}>
                <a target={`_blank`}>1. Scrimba front end career path</a>
              </Link>
              <br />

              <Link
                href={`https://www.udemy.com/certificate/UC-82bbb907-1932-48a5-8021-550c68d2aa80/`}
              >
                <a target={`_blank`}>
                  2. The complete gsap, js,css,html course.{" "}
                </a>
              </Link>
              <br />

              <Link
                href={`https://www.udemy.com/certificate/UC-81a9ad61-cae9-4242-9360-6892f84b057f/`}
              >
                <a target={`_blank`}>3. front end web development</a>
              </Link>
            </p>
            <button>
              <Link
                href={`https://drive.google.com/file/d/1_PJEmeWHS0uKmTPLRq2gKfEdTRkysTPL/view?usp=sharing`}
              >
                <a target={`_blank`} className="simple-a">
                  Download Resume
                </a>
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
