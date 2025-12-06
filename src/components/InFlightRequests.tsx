import React from "react";

type InFlightItem = {
  title: string;
  subtitle: string;
  status?: string; // e.g. "Updated 2h ago"
};

type InFlightRequestsProps = {
  title?: string;
  badgeLabel?: string;
  items: InFlightItem[];
};

export function InFlightRequests({
  title = "In-flight requests",
  badgeLabel = "Updated live",
  items,
}: InFlightRequestsProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
          {badgeLabel}
        </span>
      </div>

      {/* Items list */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-slate-900">
                {item.title}
              </p>
              <p className="text-xs text-slate-600">{item.subtitle}</p>
            </div>
            {item.status && (
              <p className="text-xs text-slate-500 whitespace-nowrap">
                {item.status}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
