import CareerStories from "./CareerStories";
import MainProfiles from "./MainProfiles";
import PhoneNumber from "./PhoneNumber";
import VacancySec from "./VacanciesSec";

const Vacancy = ({data}) => {
	return (
		<>
			<VacancySec data={data}/>

			{/* <MainProfiles />
			<CareerStories />
			<PhoneNumber /> */}
		</>
	);
};

export default Vacancy;
