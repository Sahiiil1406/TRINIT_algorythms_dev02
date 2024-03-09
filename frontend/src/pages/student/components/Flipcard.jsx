import React from "react";
import "./flipcard.css";
import { useState } from "react";
export default function Flipcard() {
	return (
		<div className="grid grid-cols-4 grid-flow-row gap-4 w-full h-[100vh] p-[100px]">
			<Flip front="hi" back="hello" />
			<Flip front="hi" back="hello" />
			<Flip front="hi" back="hello" />
			<Flip front="hi" back="hello" />
			<Flip front="hi" back="hello" />
			<Flip front="hi" back="hello" />
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
					<div className="front">{props.front}</div>
					<div className="back">{props.back}</div>
				</div>
			</div>
		</div>
	);
}
