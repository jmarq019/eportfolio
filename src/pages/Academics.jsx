import ArtifactCard from '../components/ArtifactCard'

// ─── Section Heading Helper ───────────────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-auburn-navy mb-6 pb-3 border-b-2 border-auburn-orange/30">
      {children}
    </h2>
  )
}

// ─── Education Entry ──────────────────────────────────────────────────────────
function EducationEntry({ degree, institution, location, status }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex transition-shadow duration-200 hover:shadow-lg">
      {/* Accent stripe */}
      <div className="w-2 bg-auburn-orange flex-shrink-0" />
      <div className="px-6 py-5 flex-1">
        <h3 className="text-auburn-navy font-bold text-base md:text-lg leading-snug">
          {degree}
        </h3>
        <p className="text-gray-700 font-medium mt-1">{institution}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
          <span>{location}</span>
          <span className="text-auburn-orange font-semibold">{status}</span>
        </div>
      </div>
    </div>
  )
}

// ─── Academics Page ───────────────────────────────────────────────────────────
export default function Academics() {
  return (
    <div className="flex flex-col">

      {/* ── Page Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-auburn-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Academics &amp; Capstone
          </h1>
          <p className="mt-3 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            My educational background, capstone research, and selected academic artifacts.
          </p>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Education</SectionHeading>
          <div className="flex flex-col gap-4">
            <EducationEntry
              degree="Bachelor of Science, Interdisciplinary Studies — French | East Asian Studies | Business"
              institution="Auburn University"
              location="Auburn, AL"
              status="Expected Spring 2026"
            />
            <EducationEntry
              degree="Professional Certification, Full-Stack Web Development"
              institution="University of Washington"
              location="Seattle, WA"
              status="Completed"
            />
          </div>
        </div>
      </section>

      {/* ── Capstone Project ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Capstone Project</SectionHeading>

          {/* Title + thesis */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h3 className="text-auburn-navy font-bold text-xl md:text-2xl leading-snug mb-4">
              &ldquo;Cultural Diplomacy and Economic Relations Between France and China&rdquo;
            </h3>

            <div className="bg-auburn-navy/5 border-l-4 border-auburn-orange rounded-r-lg p-5 mb-6">
              <p className="text-xs font-semibold text-auburn-orange uppercase tracking-widest mb-2">
                Thesis Statement
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                This project examines how cultural diplomacy and cross-cultural understanding
                between France and China bolsters the economic relationship between these two
                nations by creating business opportunities that may not exist otherwise.
              </p>
            </div>

            {/* Interdisciplinary integration */}
            <h4 className="text-auburn-navy font-semibold text-base mb-3">
              How the Capstone Integrates All Three Emphases
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                {
                  label: 'French',
                  detail:
                    'Analyzing cultural institutions and bilateral diplomatic policy through French-language primary sources, including government documents, cultural agreements, and scholarly literature on France&rsquo;s international cultural strategy.',
                },
                {
                  label: 'East Asian Studies',
                  detail:
                    'Examining China&rsquo;s approach to cultural diplomacy — including the strategic role of Confucius Institutes, state media, and people-to-people exchange programs — within the broader context of Chinese foreign policy.',
                },
                {
                  label: 'Business',
                  detail:
                    'Evaluating how cultural exchanges between France and China translate into measurable economic outcomes: trade growth, foreign direct investment, joint ventures, and the expansion of commercial ties in sectors shaped by cultural affinity.',
                },
              ].map(({ label, detail }) => (
                <div
                  key={label}
                  className="bg-gray-50 rounded-lg p-4 border-t-2 border-auburn-orange"
                >
                  <p className="text-auburn-navy font-semibold text-sm mb-2">{label}</p>
                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                </div>
              ))}
            </div>

            {/* Advisor / program director */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-100 text-sm text-gray-600">
              <div>
                <span className="text-xs font-semibold text-auburn-orange uppercase tracking-widest block mb-0.5">
                  Faculty Advisor
                </span>
                Dr. Carolyn Fitzgerald
              </div>
              <div>
                <span className="text-xs font-semibold text-auburn-orange uppercase tracking-widest block mb-0.5">
                  Program Director
                </span>
                Dr. Robin Sexton
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Artifacts ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Academic Artifacts</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <ArtifactCard
              title="Artifact 1 — Capstone Project Thesis Paper"
              description="A 34-page interdisciplinary thesis examining how cultural diplomacy and cross-cultural understanding between France and China have catalyzed bilateral economic growth. The paper integrates perspectives from French Studies, East Asian Studies, and Business, drawing on soft power theory, the coopetition framework, and the psychic distance literature to analyze trade flows, foreign direct investment, tourism, and the French wine export sector."
              demonstrates="Advanced academic writing, interdisciplinary synthesis across three fields, rigorous engagement with multilingual scholarly sources, original analytical argumentation, and the ability to connect cultural diplomacy with measurable economic outcomes."
              buttonLabel="View Thesis"
              href="/documents/capstone-thesis.pdf"
            />

            <ArtifactCard
              title="Artifact 2 — Annotated Bibliography"
              description="A curated bibliography of scholarly sources drawn from French, Chinese, and international business literature used to ground the capstone research. Sources span academic journals, policy documents, and books in multiple languages."
              demonstrates="Source evaluation, depth of research across multilingual and multidisciplinary literature, critical engagement with primary and secondary sources, and academic rigor appropriate to graduate-level inquiry."
              buttonLabel="View Bibliography"
              // TODO: Replace href="#" with the real file path once the annotated bibliography is finalized.
              // Example: href="/documents/annotated-bibliography.pdf"
            />

            <ArtifactCard
              title="Artifact 3 — UW Full-Stack Web Development Certification"
              description="A professional certification in full-stack web development completed at the University of Washington, covering JavaScript, HTML, CSS, SQL, Node.js, and React — as demonstrated by this very ePortfolio."
              demonstrates="Technical proficiency in modern web development, commitment to continuous professional learning, and the ability to build production-grade web applications that serve a real communicative purpose."
              buttonLabel="View Certification"
              // TODO: Replace href="#" with the real file path or credential link once available.
              // Example: href="/documents/uw-certification.pdf"
            />

          </div>
        </div>
      </section>

    </div>
  )
}
