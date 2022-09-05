import Introduction from "../components/Introduction";

export default function Home({ func, a, isaLightOn }) {
  return (
    <>
      <div className="App">
        {/* <Navbar b={func} a={a} /> */}
        <Introduction a={a} isaLightOn={isaLightOn} />
      </div>
    </>
  );
}
