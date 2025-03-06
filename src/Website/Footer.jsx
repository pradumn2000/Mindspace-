export default function Footer() {
  const footerData = [
    {
      heading: "Company",
      subHeading: ["Product", "About Us", "Contact Us", "Shop"],
    },
    {
      heading: "Resources",
      subHeading: ["Carrer", "Do Not Sell My Info", "Forum", "Support"],
    },
    {
      heading: "Policy",
      subHeading: ["Privacy", "Security"],
    },
  ];
  return (
    <div className="pt-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-green-500 px-8 py-4">
        <div className="text-center md:text-left md:col-span-2 flex flex-col gap-4">
          <h2 className="text-white font-bold text-xl uppercase tracking-tighter">
            Join Now Our NewsLetter
          </h2>
          <div className="flex gap-4 md:justify-start justify-center">
            <input
              type="text"
              className="rounded-md outline-none text-center"
              placeholder="mob@gmail.com"
            />
            <button className="uppercase bg-white px-4 py-2 font-bold text-gray-600 rounded-md">
              Submit
            </button>
          </div>
        </div>
        {footerData.map((value, index) => (
          <FooterList compData={value} key={index} />
        ))}
      </div>
      <div className="text-white text-center bg-green-500 py-4">
        <p>copyright © all rights reserved</p>
      </div>
    </div>
  );
}

function FooterList({ compData }) {
  return (
    <div className="text-white text-center md:text-left">
      <h3 className="text-white font-bold uppercase text-xl">
        {compData.heading}
      </h3>
      <ul>
        {compData.subHeading.map((value, index) => (
          <ListItem subHeadingName={value} key={index} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ subHeadingName }) {
  return (
    <>
      <li>
        <a href="##">{subHeadingName}</a>
      </li>
    </>
  );
}
