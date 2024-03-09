import React from "react";
import {
	AvatarImage,
	AvatarFallback,
	Avatar,
} from "../../components/ui/avatar";
import {
	CardTitle,
	CardDescription,
	CardContent,
	CardHeader,
	Card,
} from "../../components/ui/card";

//import { ResponsiveBar } from "@nivo/bar"
export default function Profile() {
	return (
		<Card className="w-full max-w-3xl border-none">
			<CardHeader className="space-y-8">
				<div className="flex flex-col items-center space-y-2">
					<Avatar className="w-32 h-32 ">
						<AvatarImage
							alt="User avatar"
							src="https://robohash.org/text.png"
						/>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<div className="text-center">
						<CardTitle className="text-lg">John Doe</CardTitle>
						<CardDescription>john../..example.com</CardDescription>
					</div>
				</div>
				<div className="mx-auto max-w-prose space-y-3">
					<CardTitle className="ml-6 text  ">Experience</CardTitle>
					<CardContent className="text-sm">
						I'm passionate about learning new languages and connecting with
						people from different cultures.
					</CardContent>
				</div>
			</CardHeader>
			<CardContent className="p-6">
				<div className="grid gap-4 md:grid-cols-2">
					<div>
						<Card>
							<CardHeader>
								<CardTitle>My Languages</CardTitle>
								<CardDescription>
									I'm fluent in these languages.
								</CardDescription>
							</CardHeader>
							<CardContent className="p-6">
								<ul className="divide-y">
									<li className="flex items-center justify-between py-2">
										<div className="flex items-center space-x-2">
											<CheckCircleIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
											<div className="font-medium">English</div>
										</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											Fluent
										</div>
									</li>
									<li className="flex items-center justify-between py-2">
										<div className="flex items-center space-x-2">
											<CheckCircleIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
											<div className="font-medium">Spanish</div>
										</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											Intermediate
										</div>
									</li>
									<li className="flex items-center justify-between py-2">
										<div className="flex items-center space-x-2">
											<CheckCircleIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
											<div className="font-medium">French</div>
										</div>
										<div className="text-sm text-gray-500 dark:text-gray-400">
											Beginner
										</div>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
					<div>
						<Card>
							<CardHeader>
								<CardTitle>Progress</CardTitle>
								<CardDescription>
									Track your progress in learning new languages.
								</CardDescription>
							</CardHeader>
							<CardContent className="flex items-center justify-center p-8">
								{/* <BarChart className="w-full max-w-xs aspect-square" /> */}
							</CardContent>
						</Card>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

/* function BarChart(props) {
	return (
		<div {...props}>
			<ResponsiveBar
				data={[
					{ name: "Jan", count: 111 },
					{ name: "Feb", count: 157 },
					{ name: "Mar", count: 129 },
					{ name: "Apr", count: 150 },
					{ name: "May", count: 119 },
					{ name: "Jun", count: 72 },
				]}
				keys={["count"]}
				indexBy="name"
				margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
				padding={0.3}
				colors={["#2563eb"]}
				axisBottom={{
					tickSize: 0,
					tickPadding: 16,
				}}
				axisLeft={{
					tickSize: 0,
					tickValues: 4,
					tickPadding: 16,
				}}
				gridYValues={4}
				theme={{
					tooltip: {
						chip: {
							borderRadius: "9999px",
						},
						container: {
							fontSize: "12px",
							textTransform: "capitalize",
							borderRadius: "6px",
						},
					},
					grid: {
						line: {
							stroke: "#f3f4f6",
						},
					},
				}}
				tooltipLabel={({ id }) => `${id}`}
				enableLabel={false}
				role="application"
				ariaLabel="A bar chart showing data"
			/>
		</div>
	);
} */

function CheckCircleIcon(props) {
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
			<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
			<polyline points="22 4 12 14.01 9 11.01" />
		</svg>
	);
}
