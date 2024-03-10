import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import payment from "../sample/Main";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  Card,
  CardFooter,
} from "../../components/ui/card";
import { Link } from "react-router-dom";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../../components/ui/table";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

import axios from "axios";
import { Separator } from "../../components/ui/separator";
export default function StudentDashboard() {
  const navigate = useNavigate();
  const [session, setSession] = useState([]);
  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await axios.get("http://localhost:1406/classes/getclasses");
        const data = res.data;
        console.log(data);
        setSession(data.classes);
      } catch (error) {
        console.log(error);
      }
    };
    getSession();
  }, []);

  const enroll = async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:1406/classes/enrollInClass/${id}`
      );
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full max-w-[1000px] min-h-[1000px] space-y-6">
      <Card className="w-full ">
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Card>
                <Classes />
              </Card>
            </div>
            <div>
              <Card className="text-[70px] h-full flex items-center justify-center">
                <Link to="/flip"> FlashCards</Link>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full ">
        <CardHeader className="p-6 space-y-4">
          <div className="">
            <CardTitle>Connect with Language Tutors</CardTitle>
          </div>
          <div className="h-[50px]">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative w-full">
                <Input
                  className="w-full pl-8 pr-2.5"
                  placeholder="Search..."
                  type="search"
                />
                <SearchIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <Button type="submit">Search</Button>
            </div>
          </div>
          <div className="languages group space-y-1">
            <p>Languages</p>
            <ToggleGroup
              variant="outline"
              type="multiple"
              className="flex justify-start "
              onChanged={(value) => {
                setLanguages(value);
              }}
            >
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                English
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                Hindi
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                Kannada
              </ToggleGroupItem>
              <ToggleGroupItem value="tamil" aria-label="Toggle underline">
                Tamil
              </ToggleGroupItem>
              <ToggleGroupItem value="tamil" aria-label="Toggle underline">
                Telugu
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="languages group space-y-1 mt-5">
            <p>Experience</p>
            <ToggleGroup
              variant="outline"
              type="multiple"
              className="flex justify-start "
              onChanged={(value) => {
                setLanguages(value);
              }}
            >
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                Expert
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                Fluent
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                Begginer
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardHeader>
        <CardContent
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
        >
          {session.map((e) => {
            return <TutorCard e={e} enroll={enroll} />;
          })}
        </CardContent>
      </Card>
    </div>
  );
}

function Classes() {
  const [classes, setclasses] = useState([]);

  useEffect(() => {
    const getClasses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1406/classes/getClassesofstudent"
        );
        const data = res.data;
        console.log("hello", data.classes);
        setclasses(data.classes);
      } catch (error) {
        console.log(error);
      }
    };
    getClasses();
  }, []);

  return (
    <div className="flex flex-col w-full gap-2 h-[300px]">
      <Card>
        <CardHeader className="pb-0">
          <CardTitle>Upcoming Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Class</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Joining Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((e) => {
                  return (
                    <TableRow key={e._id}>
                      <TableCell>{e.language}</TableCell>
                      <TableCell>{e.slots}</TableCell>
                      <TableCell>{e.duration}</TableCell>
                      <TableCell>
                        <Link to="/lobby/4">
                          <div className="bg-green-500 px-4 py-2 rounded-full text-white font-bold">
                            Join
                          </div>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TutorCard({ e }) {
  const [slot, setSlot] = useState({
    id: "",
    slot: "",
  });

  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await axios.get("http://localhost:1406/classes/getclasses");
        const data = res.data;
        console.log(data);
        setSession(data.classes);
      } catch (error) {
        console.log(error);
      }
    };
    getSession();
  }, []);

  const enroll = async (id) => {
    try {
      const res = await axios.get(`http://localhost:1406/classes/enroll/${id}`);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSLotSelect(value, id) {
    setSlot({
      id: id,
      slot: value,
    });
  }
  return (
    <>
      <Card className="w-full max-w-sm rounded-xl border" key={e._id}>
        <CardHeader className="p-6 pb-1">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{e.name} </CardTitle>
                <CardDescription className="text-sm">
                  Visit Profile
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-3 p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 text-sm font-bold">{e.language} :</div>

            <div className="ml-2 text-sm">Basic</div>
          </div>

          <Separator />
        </CardContent>
        <CardFooter className="flex flex-col gap-5 ">
          <div className="w-full ">
            <ToggleGroup
              variant="outline"
              type="single"
              className="flex justify-start flex-wrap "
              onValuChange={(value, id) => handleSLotSelect}
            >
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                9:00 PM (45 mins)
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                9:00 PM (45 mins)
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                9:00 PM (45 mins)
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Separator />
          <div className="flex justify-between w-full">
            {" "}
            <h1>
              <b className="text-2xl">{e.price} </b>/ hr
            </h1>
            <Link to="/main">
              <Button size="sm" onClick={() => enroll(e._id)}>
                Proceed to Payment
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
          
    </svg>
  );
}
