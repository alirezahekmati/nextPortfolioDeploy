import Link from "next/link";
export default function Portfolio() {
  return (
    <div className="App">
      <div>Portfolio</div>
      <Link href={`/`}>
        <a>back to home</a>
      </Link>
    </div>
  );
}
