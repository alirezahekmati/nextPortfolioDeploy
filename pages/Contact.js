import Link from "next/link";
export default function Contact() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div>Contact</div>
      <Link href={`/`}>
        <a>back to home</a>
      </Link>
    </div>
  );
}
