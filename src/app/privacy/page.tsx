export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                1. Information We Collect
              </h2>
              <p className="text-white/80 mb-8">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>Product descriptions and content you submit</li>
                <li>Contact information when you reach out to us</li>
                <li>Usage data and analytics</li>
                <li>Technical information about your device and browser</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                2. How We Use Your Information
              </h2>
              <p className="text-white/80 mb-8">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>Provide and improve our FAQ generation service</li>
                <li>Respond to your requests and support needs</li>
                <li>Send you important updates about our service</li>
                <li>Analyze and improve our website performance</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                3. Data Security
              </h2>
              <p className="text-white/80 mb-8">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                4. Your Rights
              </h2>
              <p className="text-white/80 mb-8">You have the right to:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our use of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                5. Cookies
              </h2>
              <p className="text-white/80 mb-8">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                6. Contact Us
              </h2>
              <p className="text-white/80">
                If you have any questions about this Privacy Policy, please
                contact us at privacy@faqgenerator.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
