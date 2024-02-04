import Vacancy from "@/components/Vacancy";
import { url } from "@/api";

const VacancyPage = ({ data1 }) => {
  return <Vacancy/>;
};

export default VacancyPage;

// export async function getStaticProps() {
//   const vacancy = `${url}/vacancies`;

//   const [vacancyRes] = await Promise.all([fetch(vacancy)]);
//   const data1 = await vacancyRes.json();

//   return {
//     props: {
//       data1,
//     },
//     revalidate: 60,
//   };
// }
