import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import React from "react";

export default function Login() {
	return (
		<Card className="mx-auto max-w-sm flex-1">
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl font-bold">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
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
							<Link className="ml-auto inline-block text-sm underline" to="#">
								Forgot your password?
							</Link>
						</div>
						<Input id="password" required type="password" />
					</div>
					<Button className="w-full" type="submit">
						Login
					</Button>
					<Button className="w-full" variant="outline">
						Login with Google
					</Button>
				</div>
				<div className="mt-4 text-center text-sm">
					Don't have an account?
					<Link className="underline" to="#">
						Sign up
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
