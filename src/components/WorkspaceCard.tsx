import { Link } from "react-router";


type WorkspaceCardProps = {
    title: string;
    description: string;
    actionLabel?: string;
    to?: string;
}

export function WorkspaceCard ({
    title,
    description,
    actionLabel = 'Start',
    to,
}: WorkspaceCardProps) {
    return (
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
        {to ? (
            <Link
            to={to}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-700"
            >
            {actionLabel}
            <span aria-hidden>→</span>
            </Link>
        ) : (
            <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-700">
            {actionLabel}
            <span aria-hidden>→</span>
            </button>
        )}
        </div>
    );
}