import React, { useState } from "react";

const Accordion = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)}>
				{title}
			</button>
			{isOpen && <p>{content}</p>}
		</div>
	);
};

export default Accordion;
