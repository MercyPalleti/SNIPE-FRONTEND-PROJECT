import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import Loader from "../components/Loader";
import { getShipments } from "../utils/fetcher";

export default function Dashboard() {
  const [shipments, setShipments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getShipments()
      .then((res) => {
        setShipments(res.data);
        setFiltered(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setSearch(q);
    setFiltered(
      shipments.filter(
        (s) =>
          s.id.toLowerCase().includes(q) ||
          s.product.toLowerCase().includes(q)
      )
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-8">
        <Card title="Total Shipments" value={shipments.length} />
        <Card
          title="In Transit"
          value={shipments.filter((s) => s.status === "In Transit").length}
        />
        <Card
          title="Delivered"
          value={shipments.filter((s) => s.status === "Delivered").length}
        />
        <Card
          title="Delayed"
          value={shipments.filter((s) => s.status === "Delayed").length}
        />
      </div>

      {/* Search  */}
      <input
        type="text"
        placeholder="Search by ID or Product..."
        value={search}
        onChange={handleSearch}
        className="w-full mb-5 p-2 border rounded"
      />

      {/* Table */}
      <table className="w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-left">Source</th>
            <th className="p-3 text-left">Destination</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Last Updated</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((ship) => (
            <tr key={ship.id} className="border-t">
              <td className="p-3">
                <Link
                  to={`/shipment/${ship.id}`}
                  className="text-blue-600 underline"
                >
                  {ship.id}
                </Link>
              </td>
              <td className="p-3">{ship.product}</td>
              <td className="p-3">{ship.source}</td>
              <td className="p-3">{ship.destination}</td>
              <td className="p-3">
                <StatusBadge status={ship.status} />
              </td>
              <td className="p-3">{ship.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
