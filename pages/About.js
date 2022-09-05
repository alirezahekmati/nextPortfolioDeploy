export default function About({ a }) {
  return (
    <div className="App" dir={a === "en" ? "ltr" : "rtl"}>
      {/* <Navbar /> */}
      <div className="about">
        <h1>{a === "en" ? "About  me" : "در مورد من"}</h1>
        <p>
          {a === "en"
            ? `Changing my career and becoming a frontend developer has enabled me to
          do what I enjoy the most as a naturally curious person: learn
          continuously. While working as a frontend developer and building web
          projects, I’ve discovered a yearning to study the relationship between
          humans and technology — two things I’ve always been fascinated (and a
          little confused) by. Reach me at
          alirezahekmati80@gmail.com`
            : ` تغییر حرفه ام و توسعه دهنده وب شدن به من این توانایی رو داد تا کاری که لذت می برم به عنوان یک فرد کنجکاو انجام بدم.در ساخت وب سایت ها  من این رو کشف کردم که من عاشق مطالعه در مورد چیز های مرتبط با انسان وتکنولوژی هستم و من همیشه شگفت زده هستم با اینا. با من ارتباط بگیرید  
            alirezahekmati80@gmail.com 
          `}
        </p>
      </div>
    </div>
  );
}
