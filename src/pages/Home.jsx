import { Link } from 'react-router-dom'

// ─── Emphasis Card ───────────────────────────────────────────────────────────
function EmphasisCard({ emoji, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-lg border-t-4 border-auburn-orange">
      <span className="text-4xl" role="img" aria-label={title}>
        {emoji}
      </span>
      <h3 className="text-auburn-navy font-bold text-lg">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

// ─── Section Heading Helper ───────────────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-auburn-navy mb-4 pb-3 border-b-2 border-auburn-orange/30">
      {children}
    </h2>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="bg-auburn-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

          {/*
            TODO: Replace this avatar placeholder with a real profile photo.
            Step 1: Add your photo file (e.g., "profile.jpg") to the /public folder.
            Step 2: Delete the entire <div> avatar block below.
            Step 3: Replace it with:
                <img
                  src="/profile.jpg"
                  alt="Jorge A. Márquez Barragán"
                  className="w-36 h-36 rounded-full object-cover border-4 border-auburn-orange shadow-xl"
                />
          */}
          <div className="w-36 h-36 rounded-full bg-auburn-orange flex items-center justify-center shadow-xl border-4 border-white/20">
            <span className="text-white font-bold text-4xl tracking-wide select-none">
              JM
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Jorge A. Márquez Barragán
            </h1>
            <p className="text-auburn-orange font-semibold text-lg">
              Interdisciplinary Studies &mdash; Auburn University
            </p>
            <p className="text-gray-300 text-base">
              French &nbsp;&bull;&nbsp; East Asian Studies &nbsp;&bull;&nbsp; Business
            </p>
          </div>

          <p className="max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed">
            Multilingual technical operations professional and interdisciplinary scholar
            exploring the intersection of cultural diplomacy, international business,
            and global communication.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link
              to="/academics"
              className="px-6 py-3 bg-auburn-orange text-white font-semibold rounded-lg hover:bg-auburn-orange/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View Academics &amp; Capstone
            </Link>
            <Link
              to="/experience"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-200"
            >
              View Experience
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Me ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>About Me</SectionHeading>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              My name is Jorge A. Márquez Barragán, and I am a senior at Auburn University
              pursuing a Bachelor of Interdisciplinary Studies with emphases in French, East Asian
              Studies, and Business. I am also based in Tacoma, WA, and I expect to graduate in
              Spring 2026. My academic path reflects a conviction I have held for a long time:
              that the most interesting and consequential questions in the world rarely fit neatly
              inside a single discipline.
            </p>
            <p>
              Before returning to school, I spent several years working in technical operations
              and customer-facing roles across the technology and media industries. I supported
              enterprise clients in multiple languages, diagnosed complex infrastructure issues,
              managed ad operations workflows, and helped teams build knowledge systems that
              actually worked. That experience gave me a practitioner&apos;s sensibility — a
              preference for ideas that translate into action — and it informs the way I approach
              my studies at Auburn.
            </p>
            <p>
              I am fluent in Spanish, conversational in French and Portuguese, and hold a JLPT N3
              certification in Japanese. Languages are not just a professional asset for me; they
              are a window into the cultural logic that shapes how nations, institutions, and
              people relate to one another. That interest in cross-cultural communication is the
              thread that ties together everything you will find in this portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* ── What is Interdisciplinary Studies? ───────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>What Is Interdisciplinary Studies?</SectionHeading>
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-auburn-orange">
            <p className="text-gray-700 leading-relaxed mb-4">
              The Bachelor of Interdisciplinary Studies (IDSC) at Auburn University is a degree
              designed for students whose intellectual goals do not map onto a single traditional
              major. Rather than being confined to one department&apos;s curriculum, IDSC students
              work with faculty advisors to build a coherent program of study that integrates two
              or three emphases into a unified academic experience, culminating in a capstone
              project that synthesizes all three areas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This structure matters because the world&apos;s most pressing challenges —
              international trade disputes, geopolitical realignments, cross-cultural
              misunderstandings, the governance of emerging technologies — do not respect
              departmental boundaries. An interdisciplinary education equips graduates to move
              fluidly across fields, to translate between specialists, and to see connections that
              single-discipline training might obscure. For me, it has been the right framework
              for asking the questions I care about most.
            </p>
          </div>
        </div>
      </section>

      {/* ── My Three Emphases ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>My Three Emphases</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EmphasisCard
              emoji="🇫🇷"
              title="French"
              description="Studying French has given me more than linguistic ability — it has given me access to an entire tradition of political thought, cultural policy, and diplomacy. My coursework has built an understanding of French governmental structure, Francophone civilization, and the long history of France's engagement with the wider world. Engaging with primary sources in French, whether policy documents, academic articles, or historical texts, has been essential to my capstone research on France-China cultural and economic relations."
            />
            <EmphasisCard
              emoji="🌏"
              title="East Asian Studies"
              description="East Asian Studies has given me the historical and cultural framework to understand China's rise as a global power — not just economically, but diplomatically and culturally. I have studied China's approach to cultural diplomacy, including the Confucius Institute network and its strategic logic, as well as the historical context that shapes Beijing's engagement with Western partners. This emphasis has made me a more careful and contextualized reader of contemporary international relations."
            />
            <EmphasisCard
              emoji="📊"
              title="Business"
              description="The Business emphasis provides the analytical vocabulary to translate cultural and diplomatic insights into economic terms. I have studied frameworks for international trade, cross-cultural management, and economic analysis — tools that are essential for understanding how cultural exchanges between nations can create or close off commercial opportunities. Without this lens, my capstone research would remain abstract; with it, I can connect cultural policy to measurable economic outcomes."
            />
          </div>
        </div>
      </section>

      {/* ── Why I Combined These Three ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Why I Combined These Three</SectionHeading>
          <div className="bg-white rounded-xl shadow-md p-8 space-y-5 text-gray-700 leading-relaxed">
            <p>
              The decision to combine French, East Asian Studies, and Business was not arbitrary
              — it emerged from a question I kept returning to: how do cultural ties between
              nations shape the economic relationships that follow? France and China are two
              countries that have cultivated a distinctive bilateral relationship, one grounded in
              a shared interest in multipolarity, cultural prestige, and mutual commercial
              benefit. But that relationship is not simply a product of trade statistics and
              diplomatic protocols. It is built on cultural investments — student exchanges,
              cultural institutes, co-productions, and decades of deliberate people-to-people
              engagement.
            </p>
            <p>
              My capstone project, &ldquo;Cultural Diplomacy and Economic Relations Between France
              and China,&rdquo; sits at the precise intersection of all three emphases. The French
              emphasis allows me to read French policy documents and cultural institutions on
              their own terms. The East Asian Studies emphasis gives me the background to
              understand how China conceives of and deploys cultural diplomacy as a tool of
              statecraft. And the Business emphasis equips me to evaluate whether and how those
              cultural investments translate into trade flows, investment partnerships, and
              economic growth.
            </p>
            <p>
              In this sense, my three emphases are not three separate interests that happen to
              coexist — they are three lenses that, used together, illuminate something that none
              of them could reveal alone.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
