interface TicketSummaryProps {
  selectedDate: Date;
  selectedTime: string;
  onClose: () => void;
}

export default function TicketSummary({
  selectedDate,
  selectedTime,
  onClose,
}: TicketSummaryProps) {
  return (
    <div className="bg-gray-100 font-medium p-4 rounded-lg mt-4">
      <h3 className="mb-2 text-lg">Ticket Summary</h3>
      <div className="space-y-2">
        <SummaryRow icon="adult-icon.svg" label="Adults" value="2" />
        <SummaryRow
          icon="calendar-icon.svg"
          label="Date"
          value={selectedDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        />
        <SummaryRow icon="clock-icon.svg" label="Time" value={selectedTime} />
      </div>
      <div className="flex gap-2 pt-4">
        <button
          onClick={onClose}
          className="flex-1 bg-sky-300 hover:bg-sky-200 transition duration-150 py-3 rounded-xl"
        >
          PAY NOW
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-white hover:bg-neutral-200 transition duration-150 py-3 rounded-xl"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <img alt={label} src={`/assets/icons/${icon}`} />
      <span className="w-1/6">{label}</span>
      <span className="mr-3 font-semibold">:</span>
      <span>{value}</span>
    </div>
  );
}
