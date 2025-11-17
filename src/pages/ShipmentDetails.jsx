import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShipments } from "../utils/fetcher";
import Loader from "../components/Loader";
import StatusBadge from "../components/StatusBadge";
import Timeline from "../components/Timeline";

export default function ShipmentDetails() {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShipments().then((res) => {
      const found = res.data.find((s) => s.id === id);
      setShipment(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  if (!shipment)
    return <p className="p-10 text-center text-xl">Shipment not found</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Link to="/dashboard" className="underline text-blue-600">
        ← Back
      </Link>

      <h1 className="text-3xl font-bold mt-3">{shipment.id}</h1>

      <div className="mt-6 flex gap-10">
        <img
          src={shipment.image}
          alt=""
          className="w-48 h-48 object-cover shadow rounded"
        />

        <div>
          <p className="text-xl font-semibold mb-3">
            {shipment.product}
          </p>
          <StatusBadge status={shipment.status} />
          <p className="mt-3">
            <b>Source:</b> {shipment.source}
          </p>
          <p>
            <b>Destination:</b> {shipment.destination}
          </p>
          <p>
            <b>ETA:</b> {shipment.eta}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-2">Timeline</h2>
      <Timeline current={shipment.timeline} />

      <h2 className="text-xl font-bold mt-8">Last 5 Logs</h2>
      <ul className="mt-3 bg-white p-5 rounded shadow">
        {shipment.logs.map((log, idx) => (
          <li key={idx} className="border-b py-2 last:border-none">
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
}
