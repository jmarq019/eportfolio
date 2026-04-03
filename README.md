# Jorge A. Márquez Barragán — ePortfolio

A personal academic ePortfolio built with **React**, **Vite**, and **Tailwind CSS**, showcasing the
interdisciplinary studies, capstone research, and professional experience of Jorge A. Márquez
Barragán (Auburn University, IDSC — French | East Asian Studies | Business, Spring 2026).

---

## Running the App Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

---

## How to Swap In a Real Profile Photo

The hero section on the **Home** page currently displays an initials avatar ("JM") as a
placeholder. To replace it with your actual photo:

1. **Add your photo** to the `/public` folder (e.g., `public/profile.jpg`).

2. **Open** `src/pages/Home.jsx`.

3. **Find** the TODO comment block near line 40 — it looks like this:

   ```jsx
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
   <div className="w-36 h-36 rounded-full bg-auburn-orange ...">
     <span ...>JM</span>
   </div>
   ```

4. **Delete** the `<div>` avatar block and replace it with the `<img>` tag shown in the comment,
   updating `src` to match your filename.

---

## How to Fill In Extracurriculars & Volunteering

The **Experience** page (`/experience`) has two placeholder cards for extracurricular and volunteer
roles. To fill them in:

1. **Open** `src/pages/Experience.jsx`.

2. **Find** the two `TODO` comment blocks in the "Extracurriculars & Volunteering" section
   (search for `TODO — Fill In Your First Extracurricular`).

3. For each placeholder card, replace the entire `<div>` block with a styled card. Here is a
   template you can copy and adapt:

   ```jsx
   <div className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-200 hover:shadow-lg">
     <div className="bg-auburn-navy px-6 py-4">
       <h3 className="text-white font-bold text-lg">Your Role Title</h3>
       <p className="text-auburn-orange font-semibold text-sm mt-0.5">Organization Name</p>
     </div>
     <div className="px-6 py-5 text-sm text-gray-600 leading-relaxed">
       <p className="text-gray-400 text-xs mb-3">Month YYYY – Month YYYY</p>
       <p>Your description of involvement and contributions (2–3 sentences).</p>
     </div>
   </div>
   ```

---

## How to Replace Artifact Download Buttons with Real File Links

Each artifact card on the **Academics** page (`/academics`) and the **Personal Reflection** card
on the **Experience** page currently show a disabled "coming soon" button because the `href` prop
is set to `"#"`.

To link a real document:

1. Add your PDF (or other file) to the `/public/documents/` folder.
   Example: `public/documents/capstone-proposal.pdf`

2. Open the relevant page file:
   - Artifact 1, 2, 3 → `src/pages/Academics.jsx`
   - Artifact 4 (Reflection) → `src/pages/Experience.jsx`

3. Find the `<ArtifactCard>` component for that artifact and update its `href` prop:

   ```jsx
   // Before (placeholder):
   // TODO: Replace href="#" with the real file path once the proposal document is finalized.
   // Example: href="/documents/capstone-proposal.pdf"

   // After (real file):
   <ArtifactCard
     ...
     href="/documents/capstone-proposal.pdf"
   />
   ```

   Once `href` is set to anything other than `"#"`, the button will automatically switch from
   the disabled gray style to the active auburn-orange style.

---

## Project Structure

```
eportfolio/
├── public/                   # Static assets (add profile.jpg and documents/ here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navbar with active route highlighting
│   │   ├── Footer.jsx        # Sitewide footer with name, Auburn, and LinkedIn
│   │   ├── ArtifactCard.jsx  # Reusable card for academic artifacts
│   │   └── ExperienceCard.jsx# Reusable card for work experience entries
│   ├── pages/
│   │   ├── Home.jsx          # Hero, about, emphases, "why I combined these three"
│   │   ├── Academics.jsx     # Education, capstone project, artifacts 1–3
│   │   └── Experience.jsx    # Work history, skills, extracurriculars, artifact 4
│   ├── App.jsx               # Router and layout shell
│   ├── main.jsx              # React entry point
│   └── index.css             # Tailwind directives and global resets
├── tailwind.config.js        # Auburn brand colors: auburn-navy, auburn-orange
├── vite.config.js
└── README.md
```

---

## Auburn Brand Colors

| Token            | Hex       | Usage                                  |
|------------------|-----------|----------------------------------------|
| `auburn-navy`    | `#03244D` | Navbar, footer, card headers, headings |
| `auburn-orange`  | `#E87722` | Accents, buttons, active nav links     |
