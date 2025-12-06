import { WorkspaceCard } from "../components/WorkspaceCard";
import { InFlightRequests } from "../components/InFlightRequests";
import { PlaybookCard } from "../components/PlaybookCard";
import { Link } from "react-router";

export function DashboardPage() {
    const inFlightItems = [
    {
        title: "Marketing laptops",
        subtitle: "Pending finance approval",
        status: "Updated 2h ago",
    },
    {
        title: "Logistics carrier RFP",
        subtitle: "Shortlist review",
        status: "Updated yesterday",
    },
    {
        title: "Office supplies renewal",
        subtitle: "Contract ready for signature",
        status: "Updated this week",
    },
];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex items-start justify-between gap-6">
          {/* Left side: title + description */}
          <div>
            <p className="text-sm font-medium text-indigo-600">
              Procurement
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">
              Workspace
            </h1>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Launch new requests, keep vendors aligned, and get approvals
              moving without leaving this page.
            </p>
          </div>

          {/* Right side: actions */}
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
              View policies
            </button>
            <Link
                to="/rfps"
                className="rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet-700"
                >
                New request
            </Link>

          </div>
        </header>

        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <WorkspaceCard
            title="New requisition"
            description="Capture requirements, budgets, and approvers in one place."
            to="/rfps"
          />

          <WorkspaceCard
            title="Purchase orders"
            description="Track PO numbers, delivery windows, and vendor commitments."
            to="/rfps"
          />

          <WorkspaceCard
            title="Vendor intake"
            description="Collect compliance docs and onboard suppliers faster."
            to="/vendors"
          />
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <InFlightRequests items={inFlightItems} />
          <PlaybookCard />
        </section>
      </div>
    </div>
  );
}
