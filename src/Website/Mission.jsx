export default function Mission() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-4 items-center"
      id="about"
    >
      <div>
        <h2 className="heading-secondary">Our Mission</h2>
        <p className="paragraph">
          MindSpace is dedicated to promoting mental wellness.** Our mission is
          to provide a safe and supportive platform where users can track their
          mental health, find resources, and connect with a community that
          understands and supports them. We believe in the power of
          self-awareness, education, and community in fostering mental
          well-being.
        </p>
      </div>
      <div className="mx-auto md:w-full w-[50%]">
        <img src="website/mission.svg" alt="our-mission" className="w-full" />
      </div>
    </section>
  );
}
