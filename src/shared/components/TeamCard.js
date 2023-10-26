import React from "react";
import Facebook from "../../shared/assets/images/icons/facebook.svg";
import Twitter from "../../shared/assets/images/icons/x.svg";
import LinkedIn from "../../shared/assets/images/icons/linkedin.svg";
import Instagram from "../../shared/assets/images/icons/instagram.svg";

const TeamCard = ({ data }) => {
	return (
		<div className="flex flex-col items-center w-full group">
			<div className="w-full overflow-hidden rounded-lg">
				<img
					src={data?.img}
					alt="team"
					className="w-full object-cover object-center"
				/>
			</div>
			<div className="w-[90%] p-8 bg-troo-light group-hover:shadow-xl rounded-lg flex flex-col items-center -mt-16">
				<h4 className="font-bold">{data?.title}</h4>
				<p>{data?.designation}</p>
				<div className="flex items-center gap-2 mt-3">
					<div className="p-2 bg-troo-primary rounded-full">
						<img src={Facebook} alt="facebook" className="w-4 h-4" />
					</div>
					<div className="p-2 bg-troo-primary rounded-full">
						<img src={Twitter} alt="twitter" className="w-4 h-4" />
					</div>
					<div className="p-2 bg-troo-primary rounded-full">
						<img src={LinkedIn} alt="linked in" className="w-4 h-4" />
					</div>
					<div className="p-2 bg-troo-primary rounded-full">
						<img src={Instagram} alt="instagram" className="w-4 h-4" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
