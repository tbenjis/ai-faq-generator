export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
              Terms of Service
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                1. Acceptance of Terms
              </h2>
              <p className="text-white/80 mb-8">
                By accessing and using FAQ Generator, you agree to be bound by
                these Terms of Service and all applicable laws and regulations.
                If you do not agree with any of these terms, you are prohibited
                from using or accessing this site.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                2. Use License
              </h2>
              <p className="text-white/80 mb-8">
                Permission is granted to temporarily use FAQ Generator for
                personal or commercial use, subject to the following
                restrictions:
              </p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>You must not modify or copy the materials</li>
                <li>
                  You must not use the materials for any commercial purpose
                  without proper licensing
                </li>
                <li>
                  You must not attempt to decompile or reverse engineer any
                  software contained on FAQ Generator
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                3. Disclaimer
              </h2>
              <p className="text-white/80 mb-8">
                The materials on FAQ Generator are provided on an 'as is' basis.
                FAQ Generator makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                4. Limitations
              </h2>
              <p className="text-white/80 mb-8">
                In no event shall FAQ Generator or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use FAQ Generator.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                5. Revisions and Errata
              </h2>
              <p className="text-white/80 mb-8">
                The materials appearing on FAQ Generator could include
                technical, typographical, or photographic errors. FAQ Generator
                does not warrant that any of the materials on its website are
                accurate, complete, or current.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                6. Contact Information
              </h2>
              <p className="text-white/80">
                If you have any questions about these Terms of Service, please
                contact us at legal@faqgenerator.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
