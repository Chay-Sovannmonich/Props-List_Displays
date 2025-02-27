export default function Place({key, data }) {
  return (
    <li key={key} className="place-item">
      <button>
        <img src={data.image.src} alt={data.image.alt} />
        <h3>{data.title}</h3>
      </button>
    </li>
  );
}
