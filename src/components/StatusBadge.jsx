export default function StatusBadge({ status }) {
  const color =
    status === "Delivered"
      ? "bg-green-200 text-green-700"
      : status === "Delayed"
      ? "bg-red-200 text-red-700"
      : "bg-blue-200 text-blue-700";

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${color}`}>
      {status}
    </span>
  );
}
