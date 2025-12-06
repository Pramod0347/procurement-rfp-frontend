import React, { useEffect, useState } from "react";
import { getAllRfps } from "../api/rfp";
import type { Rfp } from "../types";
import { RfpCreateModal } from "../components/RfpCreateModal";

export function RfpsPage() {
  const [rfps, setRfps] = useState<Rfp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [expandedRfpId, setExpandedRfpId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await getAllRfps();
        setRfps(data);
      } catch (err: any) {
        console.error("Failed to load RFPs", err);
        setError(err.message ?? "Failed to load RFPs");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  function handleRfpCreated(newRfp: Rfp) {
    // Add new RFP at top of list
    setRfps((prev) => [newRfp, ...prev]);
    // Optionally expand it immediately
    setExpandedRfpId(newRfp.id);
  }

  function toggleExpanded(rfpId: string) {
    setExpandedRfpId((current) => (current === rfpId ? null : rfpId));
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase text-indigo-600">
              RFPs
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-900">
              Requests for proposal
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              View and manage all active and historical RFPs.
            </p>
          </div>

          <button
            onClick={() => setIsCreateOpen(true)}
            className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            New RFP
          </button>
        </header>

        {/* Content states */}
        {loading && (
          <p className="text-sm text-slate-600">Loading RFPs…</p>
        )}

        {error && (
          <p className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && rfps.length === 0 && (
          <p className="text-sm text-slate-600">
            No RFPs found yet. Create one from the dashboard or using the
            “New RFP” button.
          </p>
        )}

        {!loading && !error && rfps.length > 0 && (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Budget
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Deadline
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Currency
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Created
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rfps.map((rfp) => (
                  <React.Fragment key={rfp.id}>
                    {/* Main row */}
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm font-medium text-slate-900">
                        {rfp.title}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700">
                        {rfp.budget != null ? rfp.budget : "—"}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700">
                        {rfp.deliveryDeadline
                          ? new Date(
                              rfp.deliveryDeadline
                            ).toLocaleDateString()
                          : "—"}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700">
                        {rfp.currency ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-500">
                        {new Date(rfp.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => toggleExpanded(rfp.id)}
                          className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                        >
                          {expandedRfpId === rfp.id ? "Hide" : "Details"}
                        </button>
                      </td>
                    </tr>

                    {/* Expanded details row */}
                    {expandedRfpId === rfp.id && (
                      <tr className="bg-slate-50/60">
                        <td className="px-4 pb-4 pt-1" colSpan={6}>
                          <RfpInlineDetails rfp={rfp} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Create RFP modal */}
        <RfpCreateModal
          isOpen={isCreateOpen}
          onClose={() => setIsCreateOpen(false)}
          onCreated={handleRfpCreated}
        />
      </div>
    </div>
  );
}

type RfpInlineDetailsProps = {
  rfp: Rfp;
};

function RfpInlineDetails({ rfp }: RfpInlineDetailsProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      {/* Overview */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Overview
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-900">
            {rfp.title}
          </h3>
          {rfp.naturalLanguageInput && (
            <p className="mt-1 text-xs text-slate-600">
              {rfp.naturalLanguageInput}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 md:w-64">
          <DetailField
            label="Budget"
            value={rfp.budget != null ? String(rfp.budget) : "—"}
          />
          <DetailField
            label="Currency"
            value={rfp.currency ?? "—"}
          />
          <DetailField
            label="Delivery deadline"
            value={
              rfp.deliveryDeadline
                ? new Date(rfp.deliveryDeadline).toLocaleDateString()
                : "—"
            }
          />
          <DetailField
            label="Warranty (months)"
            value={
              rfp.minimumWarrantyMonths != null
                ? String(rfp.minimumWarrantyMonths)
                : "—"
            }
          />
          <DetailField
            label="Payment terms"
            value={rfp.paymentTerms ?? "—"}
          />
          <DetailField
            label="Created"
            value={new Date(rfp.createdAt).toLocaleString()}
          />
        </div>
      </div>

      {/* Structured spec */}
      <div className="mt-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          Structured spec (raw)
        </p>
        <pre className="mt-1 max-h-52 overflow-auto rounded-lg bg-slate-900 p-3 text-[11px] leading-relaxed text-slate-50">
{JSON.stringify(rfp.structuredSpec, null, 2)}
        </pre>
      </div>
    </div>
  );
}

type DetailFieldProps = {
  label: string;
  value: string;
};

function DetailField({ label, value }: DetailFieldProps) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-0.5 text-sm text-slate-800">
        {value}
      </p>
    </div>
  );
}
