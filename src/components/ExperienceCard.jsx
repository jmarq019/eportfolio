/**
 * ExperienceCard — reusable card for work experience entries.
 *
 * Props:
 *   title    {string}   — job title
 *   employer {string}   — employer name
 *   location {string}   — city, state (and remote status if applicable)
 *   dates    {string}   — date range, e.g. "February 2022 – August 2025"
 *   bullets  {string[]} — array of responsibility / accomplishment strings
 */
export default function ExperienceCard({ title, employer, location, dates, bullets }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
      {/* Header bar */}
      <div className="bg-auburn-navy px-6 py-4">
        <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
        <p className="text-auburn-orange font-semibold text-sm mt-0.5">{employer}</p>
      </div>

      {/* Meta: location + dates */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-6 pt-4 pb-2 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          {/* Location pin icon */}
          <svg
            className="w-4 h-4 text-auburn-orange flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </span>
        <span className="flex items-center gap-1">
          {/* Calendar icon */}
          <svg
            className="w-4 h-4 text-auburn-orange flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {dates}
        </span>
      </div>

      {/* Responsibility bullets */}
      <ul className="px-6 pb-6 pt-2 space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-auburn-orange flex-shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}
