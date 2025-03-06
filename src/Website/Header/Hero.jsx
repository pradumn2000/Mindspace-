export default function Hero() {
  return (
    <div className="px-6 grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto justify-between">
      <HeroText />
      <HeroImage />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="flex justify-center">
      <img
        src="website/hero.svg"
        alt="hero image"
        className="w-[40%] md:w-[70%]"
      />
    </div>
  );
}

function HeroText() {
  return (
    <div className="self-center">
      <h1 className="text-3xl my-2 text-gray-600 uppercase font-bold tracking-tighter">
        Welcome to MindSpace
      </h1>
      <p className="paragraph">
        Welcome to MindSpace, your companion for mental wellness. Our
        application helps you track your mental health, access resources, and
        engage with a supportive community. Whether you're logging your mood,
        journaling your thoughts, or seeking professional help, MindSpace is
        here to support your journey towards mental well-being.
      </p>
      <button className="button">Learn More</button>
    </div>
  );
}
