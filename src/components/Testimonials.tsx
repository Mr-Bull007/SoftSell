const testimonials = [
  {
    name: "Nisarg Mehta",
    role: "IT Manager, NeoSoft",
    image: "https://mighty.tools/mockmind-api/content/human/104.jpg",
    quote:
      "SoftSell helped us cut software costs by 40%. Their support and licensing process is top-notch!",
  },
  {
    name: "Malhar Verma",
    role: "Founder, Devfinity",
    image: "https://mighty.tools/mockmind-api/content/human/92.jpg",
    quote:
      "Buying licenses used to be a headache. SoftSell made it seamless and cost-effective.",
  },
  {
    name: "Rita Kapoor",
    role: "Head of Design, Creatix",
    image: "https://mighty.tools/mockmind-api/content/human/97.jpg",
    quote:
      "The team is responsive, trustworthy, and the licenses are authentic. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 dark:text-white">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-500 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4 text-gray-600 dark:text-gray-200">
                “{t.quote}”
              </p>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-100">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
