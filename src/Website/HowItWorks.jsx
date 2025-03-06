/* eslint-disable react/prop-types */

const steps = [
  {
    id: 1,
    heading: "Sign Up",
    text: "Create your MindSpace account. Register with your email and create a secure password to start your mental wellness journey. Your data is protected with encrypted storage and JWT authentication.",
    image: "website/signUp.svg",
  },
  {
    id: 2,
    heading: "Track Your Mood",
    text: "Log your daily mood with ease. Use simple emojis or a scale system to record how you’re feeling. Over time, visualize your mood trends with interactive charts, helping you identify patterns and triggers.",
    image: "website/trackMood.svg",
  },
  {
    id: 3,
    heading: "Journal Your Thoughts",
    text: "Express yourself freely. Use our rich text editor to write journal entries about your day, thoughts, or feelings. Search through past entries by keywords or dates, making it easy to reflect on your journey.",
    image: "website/journal.svg",
  },
  {
    id: 4,
    heading: "Join the Community",
    text: "Connect anonymously with others. Share your challenges, ask for advice, and offer support in our community forum. All posts are anonymized to ensure privacy and encourage open dialogue.",
    image: "website/community.webp",
  },
  {
    id: 5,
    heading: "Access Professional Help",
    text: "Find a therapist or mental health professional. Browse our directory, read reviews, and book sessions directly through the app. Get the support you need from licensed professionals.",
    image: "website/help.webp",
  },
  {
    id: 6,
    heading: "Learn and Grow",
    text: "Expand your knowledge. Explore our educational resources, including articles, videos, and guides on various mental health topics. Learn about anxiety, depression, mindfulness, and more.",
    image: "website/learn.webp",
  },
  {
    id: 7,
    heading: "Monitor Your Progress",
    text: "Stay on top of your mental health journey. Use our progress dashboard to see your mood trends, journal activity, and community engagement. Visualize your growth and achievements over time.",
    image: "website/trackProgress.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="heading-secondary">How It Works</h2>

      {steps.map((value) => (
        <Steps stepsData={value} key={value.id} />
      ))}
    </section>
  );
}

function Steps({ stepsData }) {
  return (
    <>
      {stepsData.id % 2 === 0 ? (
        <StepCardEven stepsData={stepsData} />
      ) : (
        <StepCardOdd stepsData={stepsData} />
      )}
    </>
  );
}

function StepCardOdd({ stepsData }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center pt-8 mb-12">
      <div>
        <h2 className="font-bold text-7xl text-gray-400">0{stepsData.id}</h2>
        <h3 className="font-bold text-3xl uppercase tracking-tighter text-gray-600 py-4">
          {stepsData.heading}
        </h3>
        <p className="paragraph">{stepsData.text}</p>
      </div>
      <div className="flex justify-center">
        <img
          src={stepsData.image}
          alt={stepsData.image}
          className="w-[40%] md:w-[70%]"
        />
      </div>
    </div>
  );
}

function StepCardEven({ stepsData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12">
      <div className="flex justify-center md:justify-between row-start-2 md:row-start-1 md:col-start-1">
        <img
          src={stepsData.image}
          alt={stepsData.image}
          className="w-[40%] md:w-[70%]"
        />
      </div>
      <div>
        <h2 className="font-bold text-7xl text-gray-400">0{stepsData.id}</h2>
        <h3 className="font-bold text-3xl uppercase tracking-tighter text-gray-600 py-4">
          {stepsData.heading}
        </h3>
        <p className="paragraph">{stepsData.text}</p>
      </div>
    </div>
  );
}
