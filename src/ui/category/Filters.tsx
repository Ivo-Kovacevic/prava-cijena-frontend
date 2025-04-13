import { LabelType } from "@/@types/api-types";

export default function Filters({ labels }: { labels: LabelType[] }) {
  return (
    <div className="flex flex-col gap-3">
      {labels.map((label) => (
        <div key={label.id}>
          <h5>{label.name}</h5>
          <ul className="flex flex-wrap gap-2">
            {label.values.map((value) => (
              <li key={value.id} className="rounded-inner border border-caption p-2">
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
