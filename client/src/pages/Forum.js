import React from "react";

export default function Forum() {
  const [song, setSong] = useState({});
  const [form, setForm] = useState({
    title: "",
    desciption: "",
    status: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getSong();
  }, []);

  async function getSong() {
    const API = `http://api.genius.com/songs/${id}access_token=${DATABASE_API_KEY}`;
    const res = await axios.get(API);
    setSong(res.data[0]);
    setForm({
      title: res.data[0].title,
      desciption: res.data[0].description,
      status: res.data[0].status,
    });
  }

  return (
    <div>
      <Header />
      <h2>Forum</h2>
      <img src="https://placehold.co/100" />
      <p>{song.title}</p>
      <p>{formid.description}</p>
      <Footer />
    </div>
  );
}
