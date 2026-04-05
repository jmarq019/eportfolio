export default function Footer() {
  return (
    <footer className="bg-auburn-navy text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          {/* Name */}
          <span className="font-semibold text-base">
            Jorge A. Márquez Barragán
          </span>

          {/* University */}
          <span className="text-gray-300">
            Auburn University | Bachelor of Interdisciplinary Studies
          </span>

          {/* LinkedIn icon */}
          <a
            href="https://www.linkedin.com/in/jorgemarquezbarragan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-auburn-orange hover:text-white transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Jorge A. Márquez Barragán. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
