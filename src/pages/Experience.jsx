import ExperienceCard from '../components/ExperienceCard'
import ArtifactCard from '../components/ArtifactCard'

// ─── Section Heading Helper ───────────────────────────────────────────────────
function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-auburn-navy mb-6 pb-3 border-b-2 border-auburn-orange/30">
      {children}
    </h2>
  )
}

// ─── Skill Group ─────────────────────────────────────────────────────────────
function SkillGroup({ title, skills }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-lg">
      <h3 className="text-auburn-navy font-bold text-base border-b border-auburn-orange/30 pb-2 mb-1">
        {title}
      </h3>
      <ul className="space-y-1.5">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-auburn-orange flex-shrink-0" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Experience Page ──────────────────────────────────────────────────────────
export default function Experience() {
  // ── Work experience data (reverse chronological order) ───────────────────
  const jobs = [
    {
      title: 'Technical Operations Specialist',
      employer: 'NewsON',
      location: 'Seattle, WA (Remote)',
      dates: 'February 2022 – August 2025',
      bullets: [
        'Assisted the ad operations manager with tag management using SpringServe to create and manage demand partners and demand tags.',
        'Created livestream configurations in Google Ad Manager and developed monthly partner revenue reports and on-demand campaign performance reporting.',
        'Diagnosed and resolved technical issues related to infrastructure, applications, and operations.',
        'Assisted the content producer with breaking news tasks, content upload, and content management.',
      ],
    },
    {
      title: 'Customer Care Advocate',
      employer: 'Brevo (Formerly Sendinblue)',
      location: 'Seattle, WA',
      dates: 'September 2018 – December 2021',
      bullets: [
        'Delivered multilingual customer support in Spanish, English, Portuguese, and French via phone and email.',
        'Led a project to revitalize and update the Customer Care team\'s automated response library.',
        'Facilitated onboarding workshops on the Marketing Automation feature for new hires and aided in the production of training materials.',
        'Provided dedicated support for Enterprise clients and assisted management in interviewing new candidates.',
      ],
    },
    {
      title: 'Consumer Services Representative',
      employer: 'Nintendo (via Parker Staffing)',
      location: 'Redmond, WA',
      dates: 'September 2017 – August 2018',
      bullets: [
        'Provided multilingual consumer support in Spanish, Portuguese, and English via phone and email.',
        'Resolved escalated customer issues while balancing consumer needs with company interests.',
        'Reviewed Spanish-language knowledge articles for clarity and accuracy and handled emergency English-to-Spanish translations.',
      ],
    },
  ]

  // ── Skill data ─────────────────────────────────────────────────────────────
  const skillGroups = [
    {
      title: 'Languages',
      skills: [
        'Spanish (native fluency)',
        'French (conversational)',
        'Portuguese (conversational and written)',
        'Japanese (conversational — JLPT N3 certified)',
      ],
    },
    {
      title: 'Technical',
      skills: [
        'JavaScript, HTML, CSS, SQL, Node.js, React',
        'Google Ad Manager, SpringServe',
        'ServiceNow, Jira, Zendesk',
        'MS Office: Excel, PowerPoint, Word',
        'macOS and Windows',
        'Basic networking (TCP/IP, DNS, VPNs, firewalls)',
      ],
    },
    {
      title: 'Professional',
      skills: [
        'Ad operations and tag management',
        'Technical troubleshooting and infrastructure support',
        'Cross-cultural communication',
        'Customer success and enterprise account support',
        'Training, onboarding, and instructional material development',
        'Research, academic writing, and interdisciplinary analysis',
      ],
    },
  ]

  // ── Personal Reflection (Artifact 4) ──────────────────────────────────────
  const reflectionText =
    'My years working in technical operations and multilingual customer support taught me that ' +
    'the most effective professionals are those who can move fluently between technical systems ' +
    'and human contexts — and that the ability to communicate across cultural and linguistic ' +
    'boundaries is not a soft skill but a strategic one. Returning to school at Auburn University ' +
    'to pursue an Interdisciplinary Studies degree in French, East Asian Studies, and Business has ' +
    'given me the conceptual frameworks to make sense of experiences I had accumulated in practice: ' +
    'why cultural trust between counterparts matters for deal-making, why Francophone networks ' +
    'operate on different relational logics than Anglophone ones, and why China\'s cultural ' +
    'diplomacy initiatives are as much an economic strategy as a soft-power exercise. My capstone ' +
    'research on France-China cultural diplomacy and economic relations is, in many ways, a ' +
    'synthesis of everything I have come to believe: that cultural understanding and business ' +
    'acumen are not separate domains but mutually reinforcing capacities, and that the professionals ' +
    'who can hold both together will be the ones best positioned to navigate an increasingly ' +
    'multipolar world.'

  return (
    <div className="flex flex-col">

      {/* ── Page Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-auburn-navy text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experience &amp; Involvement
          </h1>
          <p className="mt-3 text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Professional work history, skills, extracurricular involvement, and a personal
            reflection on my interdisciplinary journey.
          </p>
        </div>
      </section>

      {/* ── Work Experience ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Work Experience</SectionHeading>
          <div className="flex flex-col gap-6">
            {jobs.map((job) => (
              <ExperienceCard key={job.employer} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Extracurriculars / Volunteering ───────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Extracurriculars &amp; Volunteering</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/*
              TODO: Fill in this card with your first extracurricular or volunteer role.
              Replace every value below with your real information:
                - title: your role title (e.g., "Volunteer Tutor")
                - organization: the name of the club, organization, or program
                - dates: the date range (e.g., "January 2024 – Present")
                - description: 2-3 sentences about what you did and what you contributed
            */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-dashed border-auburn-orange/40 flex flex-col transition-shadow duration-200 hover:shadow-lg">
              <div className="bg-auburn-orange/10 px-6 py-4 border-b border-auburn-orange/20">
                <p className="text-auburn-orange font-bold text-xs uppercase tracking-widest">
                  Volunteer Japanese Tutor
                </p>
              </div>
              <div className="px-6 py-5 flex-1 space-y-2 text-gray-400 text-sm">
                <p><span className="font-semibold">Role / Title:</span> Volunteer Japanese Tutor </p>
                <p><span className="font-semibold">Organization:</span> Auburn University </p>
                <p><span className="font-semibold">Dates:</span> 2011 – 2014 </p>
                <p><span className="font-semibold">Description:</span> Assisted students with Japanese class assignments. </p>
              </div>
            </div>

            {/*
              TODO: Fill in this card with your second extracurricular or volunteer role.
              Replace every value below with your real information:
                - title: your role title
                - organization: the name of the club, organization, or program
                - dates: the date range
                - description: 2-3 sentences about what you did and what you contributed
            */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-dashed border-auburn-orange/40 flex flex-col transition-shadow duration-200 hover:shadow-lg">
              <div className="bg-auburn-orange/10 px-6 py-4 border-b border-auburn-orange/20">
                <p className="text-auburn-orange font-bold text-xs uppercase tracking-widest">
                  Cultural Outreach Chair
                </p>
              </div>
              <div className="px-6 py-5 flex-1 space-y-2 text-gray-400 text-sm">
                <p><span className="font-semibold">Role / Title:</span> Cultural Outreach Chair </p>
                <p><span className="font-semibold">Organization:</span> Auburn Latino Association of Students (ALAS) </p>
                <p><span className="font-semibold">Dates:</span> 2010 – 2013 </p>
                <p><span className="font-semibold">Description:</span> Aided the president of ALAS with event planning and execution. </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Artifact 4: Personal Reflection Statement ─────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Personal Reflection</SectionHeading>
          <ArtifactCard
            title="Personal Reflection Statement"
            description={reflectionText}
            demonstrates="Self-awareness, integrative thinking, and the ability to articulate a coherent professional and intellectual identity that bridges technical operations, multilingual communication, and interdisciplinary academic study."
          />
        </div>
      </section>

    </div>
  )
}
