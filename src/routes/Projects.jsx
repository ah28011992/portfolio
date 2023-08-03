import React, { useState } from "react";
import Title from "../Components/Title";
import Filter from "../Components/Filter";
import ProjectCard from "../Components/ProjectCard";
import { portfolioObject } from "../data/projectData";

const Projects = () => {
	const [portfolioOrder, setPortfolioOrder] = useState(portfolioObject);
	const [selectedType, setSelectedType] = useState(null);

	const dropDownFilter = selectedType
		? portfolioOrder.filter((content) => content.type === selectedType)
		: portfolioOrder;

	return (
		<>
			<section className='home'>
				<Title />
				<p className='home__text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta
					hendrerit leo, nec convallis sem efficitur a. Pellentesque accumsan
					velit sit amet tellus aliquet, non.
				</p>
			</section>
			<section className='filter'>
				<Filter
					portfolioOrder={portfolioOrder}
					setPortfolioOrder={setPortfolioOrder}
					setSelectedType={setSelectedType}
				/>
			</section>

			<ProjectCard
				portfolioOrder={portfolioOrder}
				dropDownFilter={dropDownFilter}
			/>
		</>
	);
};

export default Projects;
