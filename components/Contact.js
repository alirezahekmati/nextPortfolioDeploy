import Head from "next/head";
import linkedin from "../public/linkedin-brands.svg";
import github from "../public/github-brands.svg";
import email from "../public/envelope-solid.svg";
import telegram from "../public/telegram-brands.svg";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <Head></Head>
      <div className="contact-icons">
        <Link href={`https://www.linkedin.com/in/alireza-hekmati-a49627218/`}>
          <a target={`_blank`}>
            <Image
              src={linkedin}
              alt="Picture of the linkedin"
              width={"30px"}
              height={"30px"}
            />
          </a>
        </Link>
        <Link href={`https://github.com/alirezahekmati`}>
          <a target={`_blank`}>
            <Image
              src={github}
              alt="Picture of the github"
              width={"30px"}
              height={"30px"}
            />
          </a>
        </Link>
        <Link href={`https://t.me/Work_Hard_Then_Work_Harder`}>
          <a target={`_blank`}>
            <Image
              src={telegram}
              alt="Picture of the telegram"
              width={"30px"}
              height={"30px"}
            />
          </a>
        </Link>
        <Link href={`mailto:alirezahekmati80@gmail.com`}>
          <a target={`_blank`}>
            <Image
              src={email}
              alt="Picture of the email"
              width={"30px"}
              height={"30px"}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
