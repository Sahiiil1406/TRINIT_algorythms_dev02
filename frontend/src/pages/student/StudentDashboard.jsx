import React from "react";

import {
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
	Card,
	CardFooter,
} from "../../components/ui/card";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "../../components/ui/table";
import axios from "axios";

export default function StudentDashboard() {
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
							<Card>
								{" "}
								<Classes />
							</Card>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="w-full ">
				<CardHeader className="p-6">
					<div className="">
						<CardTitle>Connect with Language Tutors</CardTitle>
					</div>
				</CardHeader>
				<CardContent
					className="grid gap-4"
					style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
				>
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
					<TutorCard />
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
				const res = await axios.get("http://localhost:1406/classes/getclasses");
				const data = res.data;
				console.log(data.classes);
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
									<TableHead>Date</TableHead>
									<TableHead>Time</TableHead>
									<TableHead>Duration</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{classes.map((e) => {
									return (
										<TableRow key={e._id}>
											<TableCell>{e.language}</TableCell>
											<TableCell>{e.date}</TableCell>
											<TableCell>{e.slots}</TableCell>
											<TableCell>{e.duration}</TableCell>
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

function TutorCard() {
	const [slot, setSlot] = useState({
		id: "",
		slot: "",
	});

	function handleSLotSelect(value, id) {
		setSlot({
			id: id,
			slot: value,
		});
	}
	return (
		<>
			<Card className="w-full max-w-sm rounded-xl border">
				<CardHeader className="p-6 pb-1">
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-3">
							<Avatar className="w-12 h-12">
								<AvatarImage src="/placeholder.svg" />
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
							<div>
								<CardTitle className="text-xl">John Doe</CardTitle>
								<CardDescription className="text-sm">
									Visit Profile
								</CardDescription>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent className="grid gap-3 p-6">
					<div className="flex items-center space-x-4">
						<div className="w-16 text-sm font-bold">English :</div>

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
							<b className="text-2xl">₹200 </b>/ hr
						</h1>
						<Button size="sm">Proceed to Payment</Button>
					</div>
				</CardFooter>
			</Card>
		</>
	);
}
