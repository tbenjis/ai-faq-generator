export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
              About FAQ Generator
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-white/80 mb-8">
                FAQ Generator is an AI-powered tool designed to help businesses
                and creators quickly generate comprehensive FAQ sections for
                their products and services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                Our Mission
              </h2>
              <p className="text-white/80 mb-8">
                We believe that clear communication is key to successful
                business relationships. Our mission is to help businesses
                provide better customer support by making it easier to create
                comprehensive, accurate, and helpful FAQ sections.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                How It Works
              </h2>
              <p className="text-white/80 mb-8">
                Using advanced AI technology, our platform analyzes your product
                descriptions and target audience information to generate
                relevant and helpful frequently asked questions and answers.
                This saves you time while ensuring your customers get the
                information they need.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>AI-powered FAQ generation</li>
                <li>Customizable tone and style</li>
                <li>SEO-friendly content</li>
                <li>Easy copy and paste functionality</li>
                <li>Support for multiple languages</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary-200">
                Contact Us
              </h2>
              <p className="text-white/80">
                Have questions or suggestions? We'd love to hear from you. Reach
                out to us through our social media channels or email us at
                support@faqgenerator.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
