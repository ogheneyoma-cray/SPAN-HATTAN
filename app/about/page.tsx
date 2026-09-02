import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Span Hattan",
  description: "Learn about the Span Hattan story, our mission, and our core values.",
};

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white font-body min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <section>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-teal">
            The Span Hattan Story
          </h1>
          <p className="text-brand-gray text-lg leading-relaxed">
            Span Hattan was born in the heart of Katsina — a city with a growing community of self-taught developers and designers building for the web. We were founded by a group of passionate engineers and product designers who saw an opportunity to bring world-class digital products to creators and businesses everywhere. What started as a small team building WordPress themes for local clients has grown into a full digital products studio trusted by customers across Nigeria and beyond.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Our mission is to make premium, professionally-built digital products accessible to every developer, designer, and business — regardless of budget or team size. We aim to be the bridge — the span — between complex engineering and products anyone can install, customise, and ship with confidence. Every theme, plugin, and kit we build is an invitation to launch faster.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Craft
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We work directly with skilled developers, UI designers, and QA engineers based in Katsina and across Nigeria, building on modern frameworks and design systems. Each product undergoes rigorous code review and cross-browser testing before it is listed in our catalog. We are deeply committed to fair compensation and ensuring the people behind our products are valued, respected, and fairly paid.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Core Values
          </h2>
          <ul className="list-disc list-inside text-brand-gray text-lg leading-relaxed space-y-4 ml-4">
            <li>
              <strong className="text-white">Craftsmanship:</strong> We celebrate clean code and thoughtful design, and never compromise on the integrity of our products.
            </li>
            <li>
              <strong className="text-white">Quality First:</strong> Modern tooling, skilled engineers, and rigorous standards in every single release.
            </li>
            <li>
              <strong className="text-white">Community:</strong> We invest in our local developer talent, supporting livelihoods and growing Nigeria's tech ecosystem.
            </li>
            <li>
              <strong className="text-white">Customer Commitment:</strong> We stand behind every product and are always here when you need support.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
