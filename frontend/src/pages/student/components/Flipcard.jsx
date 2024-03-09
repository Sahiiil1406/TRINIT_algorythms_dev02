import React, { useEffect } from "react";
import "./flipcard.css";
import { useState } from "react";
import axios from "axios";


export default function Flipcard() {
	const [cards, setCards] = useState([]);
	useEffect(() => {
      const getCards = async () => {
		try {
			console.log("1")
		const response = await axios.get("http://localhost:1406/flashcard/getFlash");
		const data = response.data;
		  console.log(data);
		  setCards(data.flashcard);
		} catch (error) {
		  console.log(error);
		}
	  }
	  getCards();
	 
	}, [cards]);


	return (
		<div className="grid grid-cols-4 grid-flow-row gap-4 w-full h-[100vh] p-[100px]">
			{
                cards.map((card) => (
					<Flip
						key={card._id}
						front={card.title}
						back={card.content}
						deleteCard={() => deleteCard(card._id)}
					/>
				))
			}
		</div>
	);
}
const deleteCard = async (id) => {
	try {
		const response = await axios.get(`http://localhost:1406/flashcard/deleteFlash/${id}`);
		const data = response.data;
		console.log(data);
		setCards((cards) => cards.filter((card) => card._id !== id));
		
	} catch (error) {
		console.log(error);
	}
};

function Flip(props) {
	const [flip, setFlip] = useState(true);
	return (
		<div
			className="flipcard cursor-pointer"
			onClick={() => setFlip((flip) => !flip)}
		>
			
			<div className="card">
				<div className={`${flip ? "flipped" : ""} content`}>
					<div className="front">
					{props.back}
					</div>
					<div className="back flex flex-col ">	<div className="">{props.front}</div>
						<div className="text delete" onClick={props.deleteCard}>Delete</div></div>
				</div>
			</div>
		</div>)
}
