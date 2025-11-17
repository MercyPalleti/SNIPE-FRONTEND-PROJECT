export default function Card({ title, value }) {
  return (
    <div className="p-5 bg-white shadow rounded-xl">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
}
