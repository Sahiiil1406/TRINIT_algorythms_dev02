import React, { useEffect } from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import axios from "axios";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";
export default function TutorDashboard() {
  const [classes, setClasses] = useState([]);
  const [language, setLanguage] = useState("");
  const [duration, setDuration] = useState("");
  const [slots, setSlot] = useState("");
  const [name, setName] = useState("teacher");
  const [price, setprice] = useState(1050);

  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1406/classes/getclassesofStudent"
        );
        console.log(res.data);
        setClasses(res.data.classes);
      } catch (error) {
        console.log(error);
      }
    };
    getSession();
  }, []);
  const createSession = async ({ language, duration, slots, price, name }) => {
    try {
      const res = await axios.post("http://localhost:1406/classes/create", {
        language: "English",
        duration: 60,
        slots: "12am",
        price: 1050,
        name: "teacher",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <Card className="w-full max-w-[1000px] h-[350px]">
        <CardTitle className="m-6 ">Add Class Session </CardTitle>
        <CardContent>
          <TimeSelector createSession={createSession} />
        </CardContent>
        <CardFooter> </CardFooter>
      </Card>
      <Card>
        <CardTitle className="m-6 ">My Sessions </CardTitle>
        <CardContent className="space-y-4">
          {classes.map((e) => {
            return <Sessions e={e} />;
          })}
        </CardContent>
      </Card>
    </div>
  );
}

const TimeSelector = ({ createSession }) => {
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedTime, setSelectedTime] = useState("AM");
  const [Duration, setSelectedDuration] = useState(45);
  const [Language, setLanguage] = useState("english");
  const hours = Array.from(
    { length: 24 },
    (_, i) => `${i < 10 ? "0" : ""}${i}`
  );
  const minutes = Array.from(
    { length: 60 },
    (_, i) => `${i < 10 ? "0" : ""}${i}`
  );

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value);
  };

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const handleMinuteChange = (e) => {
    setSelectedMinute(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  const handleDuration = (e) => {
    setSelectedDuration(e.target.value);
  };

  return (
    <div className="p-2">
      <p className="block my-4">
        <b>Select Starting Time</b>
      </p>
      <div className="flex gap-4">
        <label className="flex gap-2 items-center">
          <div>Hours</div>

          <select
            className="  p-2 rounded-sm bg-slate-200"
            value={selectedHour}
            onChange={handleHourChange}
          >
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </label>

        <label className="flex gap-2 items-center">
          Minutes
          <select
            value={selectedMinute}
            onChange={handleMinuteChange}
            className="  p-2 rounded-sm bg-slate-200"
          >
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </label>
        <label className="flex gap-2 items-center">
          Time
          <select
            value={selectedTime}
            onChange={handleTimeChange}
            className="  p-2 rounded-sm bg-slate-200"
          >
            <option key="AM" value="AM">
              AM
            </option>
            <option key="PM" value="PM">
              PM
            </option>
          </select>
        </label>
        <label className="flex gap-2 items-center">
          Duration
          <select
            value={Duration}
            onChange={handleDuration}
            className="  p-2 rounded-sm bg-slate-200"
          >
            <option key="30" value="30">
              30
            </option>
            <option key="45" value="45">
              45
            </option>
            <option key="60" value="60">
              60
            </option>
            <option key="90" value="90">
              90
            </option>
          </select>
        </label>
        <label className="flex gap-2 items-center">
          Language
          <select
            value={Language}
            onChange={handleLanguage}
            className="  p-2 rounded-sm bg-slate-200"
          >
            <option key="english" value="english">
              english
            </option>
            <option key="hindi" value="hindi">
              hindi
            </option>

            <option key="" value=""></option>
          </select>
        </label>
      </div>
      <div className="space-y-2">
        <div className="flex items-center"></div>

        <Input id="price" placeholder="1500" required type="price" />
      </div>
      <p className="block my-6">
        <b>Session Descripton:</b> A session of {Language} language will start
        at {`${selectedHour}:${selectedMinute}:${selectedTime}`} and will go on
        for {Duration}
        {""} minutes
      </p>
      <Button className="w-full" type="submit" onClick={createSession}>
        Create session
      </Button>
    </div>
  );
};

function Sessions({ e }) {
  return (
    <Card className="w-full p-4 flex justify-between items-center">
      <div className="w-[300px] space-y-4">
        <div className="flex items-center space-x-4 ">
          <div className="w-[100px] text-sm font-bold inline">Start Time :</div>

          <div className="ml-2 text-sm inline">{e.slots}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[100px] text-sm font-bold">Duration :</div>

          <div className="ml-2 text-sm">{e.duration} minutes</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-[100px] text-sm font-bold">Language :</div>

          <div className="ml-2 text-sm">{e.language}</div>
        </div>
      </div>
      <Link to="/lobby/4">
        {" "}
        <Button>Start Session</Button>
      </Link>
    </Card>
  );
}
