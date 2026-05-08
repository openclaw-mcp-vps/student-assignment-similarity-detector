export default function Home() {
  const faqs = [
    {
      q: "How does the similarity detection work?",
      a: "We use cosine similarity algorithms on TF-IDF vectors of student submissions, giving you a precise percentage match and highlighted overlapping passages."
    },
    {
      q: "What file formats are supported?",
      a: "You can upload .txt, .docx, and .pdf files. All text is extracted and normalized before comparison."
    },
    {
      q: "Is my students' data kept private?",
      a: "Yes. Submissions are stored encrypted, never shared, and you can delete them at any time from your dashboard."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl font-bold text-white leading-tight mb-4">
          Detect Similar Assignments<br />
          <span className="text-[#58a6ff]">Before Grades Are Set</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload student submissions and instantly surface potential copying or collaboration with detailed, side-by-side similarity reports.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9 / month
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📄", title: "Bulk Upload", desc: "Upload an entire class set at once" },
          { icon: "📊", title: "Similarity Score", desc: "Cosine similarity with percentage match" },
          { icon: "🔍", title: "Highlighted Diff", desc: "Side-by-side overlapping passage view" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited assignment comparisons",
              "Bulk upload up to 200 files",
              "Detailed similarity reports",
              "Export reports as PDF",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Assignment Similarity Detector. All rights reserved.
      </footer>
    </main>
  );
}
