/**
 * ArtifactCard — reusable card for capstone artifacts and supplemental documents.
 *
 * Props:
 *   title       {string} — artifact name (e.g. "Capstone Project Proposal")
 *   description {string} — brief description of what the artifact is
 *   demonstrates {string} — what skills/knowledge this artifact demonstrates
 *   buttonLabel {string} — label for the download/view button (default: "View Document")
 *   href        {string} — link to the actual file once available
 */
export default function ArtifactCard({
  title,
  description,
  demonstrates,
  buttonLabel = 'View Document',
  // TODO: Replace href="#" with the real file URL once capstone documents are finalized.
  // Example: href="/documents/capstone-proposal.pdf"
  href = '#',
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-auburn-orange flex flex-col transition-shadow duration-200 hover:shadow-lg">
      {/* Card header */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-auburn-navy font-bold text-lg leading-snug mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* What this demonstrates */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-auburn-orange uppercase tracking-widest mb-1">
            What This Demonstrates
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            {demonstrates}
          </p>
        </div>
      </div>

      {/* Card footer — download/view button */}
      <div className="px-6 pb-6 mt-auto">
        <a
          href={href}
          target={href !== '#' ? '_blank' : undefined}
          rel={href !== '#' ? 'noopener noreferrer' : undefined}
          // Prevent default navigation when still a placeholder
          onClick={href === '#' ? (e) => e.preventDefault() : undefined}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            href === '#'
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-auburn-orange text-white hover:bg-auburn-orange/90 hover:shadow-md'
          }`}
          aria-disabled={href === '#'}
          title={href === '#' ? 'Document not yet available' : undefined}
        >
          {/* Download icon */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          {buttonLabel}
          {href === '#' && (
            <span className="text-xs font-normal">(coming soon)</span>
          )}
        </a>
      </div>
    </div>
  )
}
