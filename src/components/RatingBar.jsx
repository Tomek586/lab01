import React from "react";

const RatingBar = ({ rate }) => {
	const totalStars = 10;

	const validRating = Math.min(Math.max(rate, 0), totalStars);

	return (
		<div className="rating-bar">
			{Array.from(
				{ length: totalStars },
				(_, index) => (
					<span
						key={index}
						className="star"
					>
						{index < validRating
							? "★"
							: "☆"}
					</span>
				)
			)}
		</div>
	);
};

export default RatingBar;
