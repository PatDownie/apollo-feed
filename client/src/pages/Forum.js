// import React from "react";

// export default function Forum() {
//   const [song, setSong] = useState({});
//   const [form, setForm] = useState({
//     song_id: "",
//     title: "",
//     artist: "",
//     release_date: "",
//     album_art: "",
//     poster_name: "",
//     forum_post: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     getSong();
//   }, []);

//   async function getSong() {
//     const API = `http://api.genius.com/songs/${id}access_token=${DATABASE_API_KEY}`;
//     const res = await axios.get(API);
//     setSong(res.data[0]);
//     setForm({
//       title: res.data[0].full_title,
//       desciption: res.data[0].description,
//       status: res.data[0].status,
//     });
//   }

//   async function getForum() {
//     const API = "http://localhost:8081/forum";
//     const res = await axios.get(API);
//     setSong(res.data);
//     console.log(res.data);
//   }

//   return (
//     <div>
//       <Header />
//       <h2>Forum</h2>
//       <img src={song.song_art_image_thumbnail_url} />
//       <p>{song.full_title}</p>
//       <p>{formid.description}</p>
//       <Footer />
//     </div>
//   );
// }
