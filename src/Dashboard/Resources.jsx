/* eslint-disable react/prop-types */
import { useState } from "react";
import { therapists } from "./ProfilesTherapists";

const feed = [
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Believe you can and you're halfway there.",
    text: `Believing in yourself is the first step to achieving anything in life. When you have confidence in your abilities, you are more likely to take the necessary steps toward your goals. Self-belief fuels perseverance and resilience, which are crucial for overcoming obstacles and staying motivated. Remember, your mind is a powerful tool, and the belief that you can achieve something sets the foundation for making it happen.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "You are stronger than you think.",
    text: `Often, we underestimate our own strength and abilities. When faced with challenges, it's essential to remember that you have the inner strength to overcome them. Life's difficulties can be overwhelming, but they also provide opportunities to discover your true potential. Trust in your resilience and determination; you are capable of achieving great things, even when it seems impossible.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Push yourself because no one else is going to do it for you.",
    text: `Motivation must come from within. While others can inspire and support you, the drive to achieve your goals ultimately comes from you. Take charge of your destiny by setting ambitious goals and pushing yourself to reach them. Don't wait for external validation or encouragement; be your own biggest cheerleader and strive for excellence in everything you do.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Great things never come from comfort zones.",
    text: `Stepping out of your comfort zone is essential for personal growth and success. Comfort zones provide a sense of security, but they also limit your potential. Embrace challenges and new experiences, as they offer valuable lessons and opportunities for growth. Pushing your boundaries allows you to discover new strengths and capabilities, ultimately leading to greater achievements.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Dream it. Wish it. Do it.",
    text: `Dreaming and wishing are the first steps toward achieving your goals, but they must be followed by action. Turn your dreams into reality by setting clear, actionable plans and taking consistent steps toward them. Visualization and positive thinking are powerful tools, but they must be accompanied by hard work and dedication. Remember, every accomplishment starts with the decision to try.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Success doesn't just find you. You have to go out and get it.",
    text: `Success is not something that happens by chance; it requires effort, determination, and perseverance. Take proactive steps toward your goals by setting clear objectives and working diligently to achieve them. Opportunities may present themselves, but it is up to you to seize them and make the most of them. Stay focused, work hard, and never give up on your dreams.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title:
      "The harder you work for something, the greater you'll feel when you achieve it.",
    text: `The satisfaction of achieving a goal is directly proportional to the effort you put into it. Hard work and dedication lead to a sense of accomplishment and fulfillment that cannot be matched by anything else. Embrace the challenges and obstacles along the way, as they make the victory even sweeter. Remember, the journey is just as important as the destination.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Don't stop when you're tired. Stop when you're done.",
    text: `Persistence is key to achieving your goals. When you feel exhausted and tempted to give up, remind yourself of the importance of seeing things through to the end. Pushing through the difficult moments builds resilience and strengthens your character. Take breaks when necessary, but always come back with renewed determination to finish what you started.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Wake up with determination. Go to bed with satisfaction.",
    text: `Start each day with a clear sense of purpose and determination. Set goals and work diligently toward achieving them. At the end of the day, reflect on your accomplishments and take pride in your efforts. This mindset fosters a cycle of motivation and achievement, helping you stay focused and driven. Remember, each day is an opportunity to move closer to your dreams.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
  {
    id: crypto.randomUUID(),
    profileImg: "dashboard/thereapistsImg/man.jpg",
    title: "Do something today that your future self will thank you for.",
    text: `The actions you take today shape your future. Make decisions and take steps that will benefit you in the long run. Whether it's investing in your education, building healthy habits, or working toward your goals, your future self will appreciate the effort you put in today. Stay focused on the bigger picture and remember that every small step counts.`,
    image: "website/mission.svg",
    time: new Date().toLocaleString(),
  },
];

feed.forEach((value, i) => {
  value.userName = therapists[i].name;
  value.profileImg = therapists[i].image;
});

export default function Resources() {
  return (
    <>
      {feed.map((value) => (
        <ResourcesLists feedData={value} key={value.id} />
      ))}
    </>
  );
}

function ResourcesLists({ feedData }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  return (
    <div className="m-4 p-4 rounded-md border-2">
      <div className="flex items-center gap-4">
        <div>
          <img
            src={feedData.profileImg}
            alt={feedData.profileImg}
            className="w-10 rounded-full"
          />
        </div>
        <div>
          <h2 className="font-bold capitalize">{feedData.userName}</h2>
          <p>{feedData.time}</p>
        </div>
      </div>
      <div className="pt-4">
        <h2 className="heading-secondary">{feedData.title}</h2>
        <p className="paragraph">{feedData.text}</p>
        <img
          src={feedData.image}
          alt={feedData.image}
          className="w-[50%] mx-auto"
        />
      </div>
      <div className="flex gap-4 text-xl items-center select-none">
        <p
          onClick={() => setLikes((cnt) => (cnt += 1))}
          className="cursor-pointer text-2xl"
        >
          👍 {likes}
        </p>
        <p
          onClick={() => setDislikes((cnt) => (cnt -= 1))}
          className="cursor-pointer text-2xl"
        >
          👎 {Math.abs(dislikes)}
        </p>
      </div>
    </div>
  );
}
