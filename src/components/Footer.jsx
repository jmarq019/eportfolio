export default function Footer() {
  return (
    <footer className="bg-auburn-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          {/* Name */}
          <span className="font-semibold text-base">
            Jorge A. Márquez Barragán
          </span>

          {/* University */}
          <span className="text-gray-300">
            Auburn University | Bachelor of Interdisciplinary Studies
          </span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jorgemarquezbarragan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-auburn-orange hover:text-white transition-colors duration-200 font-medium"
          >
            linkedin.com/in/jorgemarquezbarragan
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Jorge A. Márquez Barragán. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
