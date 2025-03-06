/* eslint-disable react/prop-types */
export const therapists = [
  {
    name: "Dr. Sarah Johnson",
    bio: "Dr. Sarah Johnson is a licensed clinical psychologist specializing in anxiety and depression. She has over 15 years of experience helping clients navigate their mental health journeys.",
    work: "Clinical Psychologist",
    joined: "2010",
    location: "New York, NY",
    image: "dashboard/thereapistsImg/girl.jpg",
  },
  {
    name: "Dr. Michael Smith",
    bio: "Dr. Michael Smith is a renowned therapist with a focus on cognitive-behavioral therapy (CBT). He has been instrumental in developing CBT programs for adolescents.",
    work: "Therapist",
    joined: "2012",
    location: "Los Angeles, CA",
    image: "dashboard/thereapistsImg/girl.jpg",
  },
  {
    name: "Dr. Emily Davis",
    bio: "Dr. Emily Davis is a licensed marriage and family therapist. She specializes in relationship counseling and has helped numerous couples strengthen their bonds.",
    work: "Marriage and Family Therapist",
    joined: "2015",
    location: "Chicago, IL",
    image: "dashboard/thereapistsImg/girl.jpg",
  },
  {
    name: "Dr. James Brown",
    bio: "Dr. James Brown is a clinical social worker with a focus on trauma recovery. He has extensive experience working with veterans and survivors of abuse.",
    work: "Clinical Social Worker",
    joined: "2008",
    location: "Houston, TX",
    image: "dashboard/thereapistsImg/man.jpg",
  },
  {
    name: "Dr. Lisa White",
    bio: "Dr. Lisa White is a child psychologist who specializes in developmental disorders. She is passionate about helping children and their families navigate challenges.",
    work: "Child Psychologist",
    joined: "2013",
    location: "Phoenix, AZ",
    image: "dashboard/thereapistsImg/girl.jpg",
  },
  {
    name: "Dr. Robert Green",
    bio: "Dr. Robert Green is a licensed therapist with expertise in addiction counseling. He has helped many individuals overcome substance abuse and lead healthier lives.",
    work: "Addiction Counselor",
    joined: "2011",
    location: "Philadelphia, PA",
    image: "dashboard/thereapistsImg/man.jpg",
  },
  {
    name: "Dr. Karen Lee",
    bio: "Dr. Karen Lee is a clinical psychologist specializing in stress management and mindfulness. She integrates mindfulness practices into her therapy sessions.",
    work: "Clinical Psychologist",
    joined: "2014",
    location: "San Diego, CA",
    image: "dashboard/thereapistsImg/man.jpg",
  },
  {
    name: "Dr. David Martinez",
    bio: "Dr. David Martinez is a licensed therapist focusing on grief counseling. He provides compassionate support to individuals coping with loss.",
    work: "Grief Counselor",
    joined: "2009",
    location: "Dallas, TX",
    image: "dashboard/thereapistsImg/man.jpg",
  },
  {
    name: "Dr. Jessica Wilson",
    bio: "Dr. Jessica Wilson is a mental health counselor with a focus on adolescent mental health. She works closely with teenagers to address their unique challenges.",
    work: "Mental Health Counselor",
    joined: "2016",
    location: "San Francisco, CA",
    image: "dashboard/thereapistsImg/girl.jpg",
  },
  {
    name: "Dr. Robert Green",
    bio: "Dr. Robert Green is a licensed therapist with expertise in addiction counseling. He has helped many individuals overcome substance abuse and lead healthier lives.",
    work: "Addiction Counselor",
    joined: "2011",
    location: "Philadelphia, PA",
    image: "dashboard/thereapistsImg/man.jpg",
  },
];

export default function ProfilesTherapists() {
  return (
    <>
      <div className="grid mx-auto max-w-7xl grid-cols-1 lg:grid-cols-3 p-4 gap-4">
        <h1 className="font-bold tracking-tighter text-gray-700 uppercase md:col-start-1 lg:col-end-4 p-4 text-3xl">
          Therapists
        </h1>
        {therapists.map((value, index) => (
          <Therapist therapist={value} key={index} />
        ))}
      </div>
    </>
  );
}

function Therapist({ therapist }) {
  return (
    <div className="shadow-black shadow-sm p-4">
      <div className="flex items-center gap-4">
        <img
          src={therapist.image}
          alt={therapist.image}
          className="rounded-full w-[30%]"
        />
        <h2 className="flex items-center gap-2 font-bold text-gray-600 text-xl">
          {therapist.name}
          <img src="dashboard/verify.svg" alt="verfify" className="w-5" />
        </h2>
      </div>
      <TherapistContactInfo therapistContact={therapist} />
    </div>
  );
}

function TherapistContactInfo({ therapistContact }) {
  return (
    <div className="pt-4">
      <p className="text-gray-800">{therapistContact.bio}</p>
      <button className="button">Contact Now</button>
      <h3 className="font-bold pt-2 text-gray-500 uppercase">Work</h3>
      <p className="font-semibold">{therapistContact.work}</p>
      <h3 className="font-bold pt-2 text-gray-500 uppercase">Location</h3>
      <p className="font-semibold">{therapistContact.location}</p>
      <h3 className="font-bold pt-2 text-gray-500 uppercase">Joined</h3>
      <p className="font-semibold">{therapistContact.joined}</p>
    </div>
  );
}
