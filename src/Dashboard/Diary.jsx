/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Diary() {
  // Get the current date
  const today = new Date();
  // Format the date as YYYY-MM-DD
  const formattedDate = today.toISOString().split("T")[0];
  const [diaryText, setDiaryText] = useState("");
  const [date, setDate] = useState(formattedDate);
  const [diary, setDiary] = useState([]);

  function handleAddDiary() {
    const handleDuplicteDate = diary.find((value) => value.date === date);

    handleDuplicteDate
      ? (handleDuplicteDate.diaryText = diaryText)
      : setDiary((diary) => [
          ...diary,
          { diaryText, date, id: crypto.randomUUID() },
        ]);

    console.log(diary);
    alert("Submission Successfully");
    setDiaryText("");
    setDate("");
  }
  console.log("dir ", diary);
  return (
    <div>
      <h2 className="heading-secondary mx-4">General</h2>
      <form action="##" onSubmit={handleAddDiary}>
        <div className="text-center font-semibold text-xl">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <textarea
          className="h-[50vh] w-[95%] p-4 hover:shadow-xl border-4 border-green-500 rounded-3xl shadow-lg m-4 outline-none"
          value={diaryText}
          onChange={(e) => setDiaryText(e.target.value)}
          required
        ></textarea>
        <button className="button mx-4">submit</button>
      </form>
      <PastDiary diary={diary} />
    </div>
  );
}

function PastDiary({ diary }) {
  const [pastDate, setPastDate] = useState("");

  return (
    <div className="mx-4">
      <h2 className="heading-secondary">See Past General</h2>
      <input
        type="date"
        value={pastDate}
        onChange={(e) => setPastDate(e.target.value)}
        required
      />
      <br />
      <p className="paragraph h-screen overflow-y-auto">
        {diary
          ?.filter((value) => value.date === pastDate)
          .map((value) => value.diaryText)}
      </p>
    </div>
  );
}
