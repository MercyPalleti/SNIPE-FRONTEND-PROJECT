const steps = ["Ordered", "Packed", "Dispatched", "In Transit", "Delivered"];

export default function Timeline({ current }) {
  return (
    <div className="flex gap-4 py-5">
      {steps.map((step, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div
            className={`w-4 h-4 rounded-full ${
              current.includes(step) ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
          <p className="text-xs mt-1">{step}</p>
        </div>
      ))}
    </div>
  );
}
