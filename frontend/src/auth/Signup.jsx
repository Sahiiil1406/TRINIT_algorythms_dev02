import * as React from "react";

import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

export function Signup() {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Sign Up</CardTitle>
				<CardDescription>Get Started by Creating a account</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Name of your project" />
						</div>

						<div className="space-y-4 ">
							<div className="space-y-2">
								<div className="flex items-center">
									<Label htmlFor="email">Email</Label>
									<Link
										className="ml-auto inline-block text-sm underline"
										to="#"
									></Link>
								</div>

								<Input
									id="email"
									placeholder="m@example.com"
									required
									type="email"
								/>
							</div>
							<div className="space-y-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input id="password" required type="password" />
							</div>
							<div className="space-y-4">
								<Label>You are a ? </Label>
								<div>
									<RadioGroup defaultValue="comfortable">
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="student" id="r1" />
											<Label htmlFor="r1">Student</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="tutor" id="r2" />
											<Label htmlFor="r2">Tutor</Label>
										</div>
									</RadioGroup>
								</div>
							</div>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button className="w-full" type="submit">
					Sign up
				</Button>
			</CardFooter>
		</Card>
	);
}
