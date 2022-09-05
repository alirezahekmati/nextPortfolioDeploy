export default function handler(req, res) {
  async function getStrapiData() {
    const resp = await fetch("http://localhost:1337/api/blogs?populate=*", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const posts = await resp.json();
    res.status(200).json({ posts });
  }
  getStrapiData();
}
