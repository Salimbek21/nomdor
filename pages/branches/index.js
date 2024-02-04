import { url } from "@/api";
import Branches from "@/components/Branches";

const BranchesPage = () => {
  return <Branches />;
};

export default BranchesPage;

// export async function getStaticProps() {
//   const branchData = `${url}/branches?populate=image`;

//   const [branchRes] = await Promise.all([fetch(branchData)]);
//   const data1 = await branchRes.json();

//   return {
//     props: {
//       data1,
//     },
//     revalidate: 60,
//   };
// }
