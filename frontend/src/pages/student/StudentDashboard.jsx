import React, { useEffect } from "react";
import { useState } from "react";

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
import axios from "axios";

export default function StudentDashboard() {
	return (
		<div className="bg-red-200 w-full max-w-[1000px] min-h-[1000px] ">
			<Classes />
		</div>
	);
}

function Classes() {
   const [classes,setclasses]=useState([])
  useEffect(()=>{
	const getClasses = async () => {
		try {
			const res=await axios.get("http://localhost:1406/classes/getclasses");
			const data=res.data;
			console.log(data.classes);
			setclasses(data.classes);
		} catch (error) {
			console.log(error);
		}
	   }
	   getClasses()
  },[])


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
									<TableHead>Duration</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{
                                 classes.map((e)=>{
									return(
										<TableRow key={e._id}>
											<TableCell>{e.language}</TableCell>
											<TableCell>{e.date}</TableCell>
											<TableCell>{e.slots}</TableCell>
											<TableCell>{e.duration}</TableCell>
										</TableRow>
									)
								 })
								}
								
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
