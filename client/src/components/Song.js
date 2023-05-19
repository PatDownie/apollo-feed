export default function Song({ id, title, image, formid }) {
  return (
    <div>
      <h3>{id}</h3>
      <p>{title}</p>
      <p>{image}</p>
      <p>{formid}</p>
    </div>
  );
}
