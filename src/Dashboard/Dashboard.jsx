/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Diary from "./Diary";
import Logo from "./Logo";
import ProfilesTherapists from "./ProfilesTherapists";
import Resources from "./Resources";

const dashboardMenu = [
  {
    name: "Therapist",
    logo: "dashboard/man-user-circle-icon.svg",
    id: crypto.randomUUID(),
  },
  {
    name: "General",
    logo: "dashboard/notebook-icon.svg",
    id: crypto.randomUUID(),
  },
  {
    name: "Resources",
    logo: "dashboard/resources.svg",
    id: crypto.randomUUID(),
  },
  {
    name: "Progress",
    logo: "dashboard/tracker.svg",
    id: crypto.randomUUID(),
  },
  {
    name: "Community",
    logo: "dashboard/community.svg",
    id: crypto.randomUUID(),
  },
];

export default function Dashboard({ user, onOpenSignIn }) {
  const [tab, setTab] = useState(dashboardMenu[0].id);

  const menuComponentArray = [
    <ProfilesTherapists key={crypto.randomUUID()} />,
    <Diary key={crypto.randomUUID()} />,
    <Resources key={crypto.randomUUID()} />,
    <Progress key={crypto.randomUUID()} />,
    <Community key={crypto.randomUUID()} />,
  ];

  function handleTab(tabId) {
    setTab(tabId);
  }

  return (
    <section>
      <div className="flex justify-between px-10 items-center shadow-sm border-2">
        <Logo logoStyle={{ width: "80px" }} onOpenSignIn={onOpenSignIn} />
        <GetAdvice />
        <UserProfile user={user} />
      </div>

      <div className="dashboard-grid-col grid overflow-hidden">
        {/* col-1  */}
        <DashboardMenu handleTab={handleTab} />

        {/*col-2 */}
        <div>{menuComponentArray.at(tab)}</div>
      </div>
    </section>
  );
}

function GetAdvice() {
  const [advice, setAdvice] = useState("");
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <p className="font-semibold text-green-600 hidden md:block uppercase tracking-tighter">
      {advice.length > 0
        ? advice
        : "work in silence let's success make the noise"}
    </p>
  );
}
function UserProfile({ user }) {
  return (
    <div className="flex items-center gap-3">
      <div className="overflow-hidden rounded-full">
        <img
          src="dashboard/customer-2.jpg"
          alt="pic"
          className="w-[45px] hover:scale-105 cursor-pointer"
        />
      </div>
      <p className="font-semibold capitalize">{user.userFullName}</p>
    </div>
  );
}
function DashboardMenu({ handleTab }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <img
        src="dashboard/menu-svgrepo-com.svg"
        alt="menu"
        className="w-4 z-10 md:hidden m-2"
        onClick={() => setOpen((is) => !is)}
      />
      <ul
        className={`absolute md:static bg-green-50 border-r-4 shadow-sm h-full px-4 flex flex-col items-center gap-10 pt-4 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-[100%]"
        }`}
      >
        {dashboardMenu.map((value, index) => (
          <DashboardMenuList
            menu={value}
            key={value.id}
            handleTab={handleTab}
            index={index}
          />
        ))}
      </ul>
    </>
  );
}
function DashboardMenuList({ menu, handleTab, index }) {
  return (
    <li
      className="flex items-center gap-4 uppercase font-bold tracking-tighter text-gray-600"
      onClick={() => handleTab(index)}
    >
      <img src={menu.logo} alt={menu.logo} className="w-10" />
      <a href="##" className="hover:border-b-2 border-green-500">
        {menu.name}
      </a>
    </li>
  );
}

function Community() {
  return <div className="text-center h-screen">Coming Soon</div>;
}

function Progress() {
  return <div className="text-center h-screen">Coming Soon</div>;
}
