/* eslint-disable react/prop-types */
export default function Logo({ logoStyle }) {
  return (
    <a href="##" className="relative z-10">
      <img
        src="website/logo/trans_bg.png"
        alt="Mindspace Logo"
        className="cursor-pointer"
        style={logoStyle}
      />
    </a>
  );
}
