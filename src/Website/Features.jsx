/* eslint-disable react/prop-types */
const features = [
  {
    id: 1,
    heading: "User Authentication",
    text: "Register and log in securely with encrypted passwords.",
  },
  {
    id: 2,
    heading: "Mood Tracker",
    text: "Log moods and visualize trends with Chart.js.",
  },
  {
    id: 3,
    heading: "Journal/Diary",
    text: "Write, search, and filter journal entries using a rich text editor.",
  },
  {
    id: 4,
    heading: "Community Support",
    text: "Engage anonymously with others in a supportive forum.",
  },
  {
    id: 5,
    heading: "Therapist Directory",
    text: "Find and book sessions with mental health professionals.",
  },
  {
    id: 6,
    heading: "Educational Resources",
    text: "Access articles and videos on mental health topics.",
  },
  {
    id: 7,
    heading: "Progress Dashboard",
    text: "Visualize your mental health journey with interactive charts.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-12">
      <h2 className="heading-secondary">Features</h2>
      <p className="paragraph">
        Explore what MindSpace has to offer. From mood tracking to professional
        support, discover the comprehensive features designed to support your
        mental health journey.
      </p>
      <ul className="pt-8 font-semibold flex flex-col">
        {features.map((value) => (
          <FeaturesList featuresData={value} key={value.id} />
        ))}
      </ul>
    </section>
  );
}

function FeaturesList({ featuresData }) {
  return (
    <li className="flex flex-col md:flex-row gap-4 items-center bg-blue-50 my-4 rounded-lg p-4">
      <h3 className="heading-teritary">{featuresData.heading}:</h3>
      <p className="paragraph">{featuresData.text}</p>
    </li>
  );
}
