import { useEffect, useRef, useState } from "react";

const useCounter = (start, end, duration = 1000) => {
	const [count, setCount] = useState(start);
	const countRef = useRef(count);

	useEffect(() => {
		countRef.current = count;
	}, [count]);

	useEffect(() => {
		const startTime = Date.now();
		const endTime = startTime + duration;
		const diff = end - start;

		const updateCount = () => {
			const now = Date.now();
			const timeDiff = Math.min(duration, now - startTime);
			const progress = timeDiff / duration;
			const increment = Math.floor(diff * progress);

			setCount(start + increment);

			if (now < endTime) {
				requestAnimationFrame(updateCount);
			}
		};

		if (start !== end) {
			requestAnimationFrame(updateCount);
		}

		return () => cancelAnimationFrame(updateCount);
	}, [start, end, duration]);

	return count;
};

export default useCounter;
