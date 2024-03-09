import React, { useEffect } from "react";
import "./flipcard.css";
import { useState } from "react";
import axios from "axios";
import {
	Card,
	CardContent,
	CardFooter,
	CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
export default function Flipcard() {
	const [cards, setCards] = useState([]);
	const deleteCard = async (id) => {
		try {
			const response = await axios.get(
				`http://localhost:1406/flashcard/deleteFlash/${id}`
			);
			const data = response.data;
			console.log(data);
			setCards((cards) => cards.filter((card) => card._id !== id));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		const getCards = async () => {
			try {
				console.log("1");
				const response = await axios.get(
					"http://localhost:1406/flashcard/getFlash"
				);
				const data = response.data;
				console.log(data);
				setCards(data.flashcard);
			} catch (error) {
				console.log(error);
			}
		};
		getCards();
	}, [cards]);

	return (
		<div className="w-full flex flex-col items-center  mx-auto mt-[-40px]">
			<Card className="w-full max-w-[1000px] p-2 space-y-5">
				<CardTitle className="m-6">Add FlashCard</CardTitle>
				<CardContent className="space-y-6">
					{" "}
					<div className="space-y-2">
						<div className="flex items-center">
							<Label htmlFor="question">Question Of Flash Card</Label>
						</div>

						<Input id="question" placeholder="Apple" required type="text" />
					</div>
					<div className="space-y-2">
						<div className="flex items-center">
							<Label htmlFor="answer">Answer of Flash Card</Label>
						</div>

						<Input
							id="answer"
							placeholder="A red Coloured fruit"
							required
							type="text"
						/>
					</div>
				</CardContent>
				<CardFooter>
					{" "}
					<Button className="w-full" type="submit">
						Add Flash Card
					</Button>
				</CardFooter>
			</Card>

			<div className="grid grid-cols-4 grid-flow-row gap-4 w-full h-[100vh] p-[100px]">
				{cards.map((card) => (
					<Flip
						key={card._id}
						front={card.title}
						back={card.content}
						deleteCard={() => deleteCard(card._id)}
					/>
				))}
			</div>
		</div>
	);
}

function Flip(props) {
	const [flip, setFlip] = useState(true);
	return (
		<div
			className="flipcard cursor-pointer"
			onClick={() => setFlip((flip) => !flip)}
		>
			<div className="card">
				<div className={`${flip ? "flipped" : ""} content`}>
					<div className="front">{props.back}</div>
					<div className="back flex flex-col ">
						{" "}
						<div className="">{props.front}</div>
						<div className="text delete" onClick={props.deleteCard}>
							Delete
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
