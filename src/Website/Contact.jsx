/* eslint-disable react/prop-types */
const contactsData = [
  {
    type: "text",
    name: "first Name",
    value: "john",
  },
  {
    type: "text",
    name: "Last Name",
    value: "smith",
  },
  {
    type: "email",
    name: "email",
    value: "johnsmith@example.com",
  },
  {
    type: "number",
    name: "zip code",
    value: 209801,
  },
  {
    type: "text",
    name: "anything else to add?",
    value: "message",
  },
];

export default function Contact() {
  return (
    <section
      className="pt-12 max-w-7xl mx-auto overflow-hidden px-6"
      id="contact"
    >
      <h2 className="heading-secondary">Contact Us</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {contactsData.map((value, index) => (
          <ContactForm contactData={value} key={index} />
        ))}
      </div>
      <button className="button">Submit</button>
    </section>
  );
}

function ContactForm({ contactData }) {
  return (
    <div>
      <label htmlFor={contactData.name} className="font-semibold capitalize">
        {contactData.name}
      </label>
      <br />
      <input
        type={contactData.type}
        name={contactData.name}
        placeholder={contactData.value}
        className="outline-none border-b-2 border-green-500 w-full"
      />
    </div>
  );
}
