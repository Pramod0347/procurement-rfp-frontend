import React from "react";

export function PlaybookCard() {
  return (
    <div className="rounded-2xl bg-slate-900 p-6 shadow-sm text-slate-50">
      <p className="text-xs font-medium uppercase text-slate-300">
        Playbook
      </p>
      <h2 className="mt-2 text-lg font-semibold text-white">
        Stay audit-ready
      </h2>
      <p className="mt-2 text-sm text-slate-200">
        Keep approvals, contracts, and receipts linked to every request
        so finance and legal always have the full story.
      </p>

      <ul className="mt-4 space-y-1 text-sm text-slate-200 list-disc list-inside">
        <li>Capture approvals before spend is committed.</li>
        <li>Attach vendor compliance docs and expiry reminders.</li>
        <li>Sync receipts to POs for clean month-end close.</li>
      </ul>

      <button className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100">
        View checklist
        <span className="ml-1" aria-hidden>
          →
        </span>
      </button>
    </div>
  );
}
