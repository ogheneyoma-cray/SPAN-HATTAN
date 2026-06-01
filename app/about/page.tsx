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
            Span Hattan was born in the heart of Katsina — a city renowned across Nigeria for its deep-rooted traditions in leatherwork, embroidery, and textile craft. We were founded by a group of passionate designers and artisans who saw an opportunity to elevate the timeless craftsmanship of Northern Nigeria and present it to the world through a contemporary, premium lens. What started as a small collective producing handmade accessories has grown into a full fashion and lifestyle brand trusted by customers across Nigeria and beyond.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Our mission is to honour and amplify the cultural heritage of Nigerian fashion by creating products of exceptional quality that transcend trends. We aim to be the bridge — the span — between the rich traditions of our ancestors and the aspirations of the modern African wardrobe. Every piece we create is an invitation to wear your story with pride.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Craft
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We work directly with skilled artisans, weavers, and leatherworkers in Katsina, sourcing premium fabrics from across West Africa and beyond. Each product undergoes rigorous quality checks before it leaves our workshop. We are deeply committed to fair trade practices and ensuring that the hands behind our products are valued, respected, and fairly compensated.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our Core Values
          </h2>
          <ul className="list-disc list-inside text-brand-gray text-lg leading-relaxed space-y-4 ml-4">
            <li>
              <strong className="text-white">Authenticity:</strong> We celebrate Nigerian culture and never compromise on the integrity of our craft.
            </li>
            <li>
              <strong className="text-white">Quality First:</strong> Premium materials, skilled hands, and rigorous standards in every single product.
            </li>
            <li>
              <strong className="text-white">Community:</strong> We invest in our local artisans, supporting livelihoods and preserving craft traditions for future generations.
            </li>
            <li>
              <strong className="text-white">Customer Commitment:</strong> We stand behind every product and are always here when you need us.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
