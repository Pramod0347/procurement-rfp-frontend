const quickActions = [
  {
    title: 'New requisition',
    description: 'Capture requirements, budgets, and approvers in one place.',
  },
  {
    title: 'Purchase orders',
    description: 'Track PO numbers, delivery windows, and vendor commitments.',
  },
  {
    title: 'Vendor intake',
    description: 'Collect compliance docs and onboard suppliers faster.',
  },
]

const updates = [
  {
    title: 'Marketing laptops',
    status: 'Pending finance approval',
    time: 'Updated 2h ago',
  },
  {
    title: 'Logistics carrier RFP',
    status: 'Shortlist review',
    time: 'Updated yesterday',
  },
  {
    title: 'Office supplies renewal',
    status: 'Contract ready for signature',
    time: 'Updated this week',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Procurement</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              Workspace
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Launch new requests, keep vendors aligned, and get approvals moving without
              leaving this page.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              View policies
            </button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md">
              New request
            </button>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {quickActions.map((action) => (
            <article
              key={action.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-slate-900">{action.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{action.description}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                Start
                <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">In-flight requests</h3>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                Updated live
              </span>
            </div>
            <div className="mt-4 space-y-4">
              {updates.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start justify-between rounded-xl border border-slate-100 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.status}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 text-slate-50 shadow-sm">
            <p className="text-sm font-semibold text-indigo-200">Playbook</p>
            <h3 className="mt-2 text-2xl font-semibold">Stay audit-ready</h3>
            <p className="mt-3 text-sm text-indigo-100">
              Keep approvals, contracts, and receipts linked to every request so finance
              and legal always have the full story.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-indigo-50">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-300">•</span>
                Capture approvals before spend is committed.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-300">•</span>
                Attach vendor compliance docs and expiry reminders.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-300">•</span>
                Sync receipts to POs for clean month-end close.
              </li>
            </ul>
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 transition hover:-translate-y-0.5 hover:bg-white/20">
              View checklist
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
