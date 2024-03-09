import React from "react";

import {
	CardTitle,
	CardHeader,
	CardContent,
	Card,
} from "../../components/ui/card";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "../../components/ui/table";

export default function StudentDashboard() {
	return (
		<div className="bg-red-200 w-full max-w-[1000px] min-h-[1000px] ">
			<Classes />
		</div>
	);
}

function Classes() {
	return (
		<div className="flex flex-col w-full gap-2 h-[300px]">
			<Card>
				<CardHeader className="pb-0">
					<CardTitle>Upcoming Classes</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="overflow-auto max-h-[400px]">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[200px]">Class</TableHead>
									<TableHead>Date</TableHead>
									<TableHead>Time</TableHead>
									<TableHead>Location</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Yoga</TableCell>
									<TableCell>2023-08-01</TableCell>
									<TableCell>10:00 AM</TableCell>
									<TableCell>Main Studio</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Pilates</TableCell>
									<TableCell>2023-08-02</TableCell>
									<TableCell>11:00 AM</TableCell>
									<TableCell>Room 2</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Spinning</TableCell>
									<TableCell>2023-08-03</TableCell>
									<TableCell>9:00 AM</TableCell>
									<TableCell>Cardio Zone</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Zumba</TableCell>
									<TableCell>2023-08-04</TableCell>
									<TableCell>6:00 PM</TableCell>
									<TableCell>Dance Floor</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Boxing</TableCell>
									<TableCell>2023-08-05</TableCell>
									<TableCell>4:00 PM</TableCell>
									<TableCell>Boxing Ring</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
