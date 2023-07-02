import { url } from "@/api";
import InnerBranch from "@/components/Branches/innerBranche";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const BranchesById = ({ data }) => {
  return (
    <>
      <div>
        <InnerBranch data={data}/>
      </div>
    </>
  );
};

export default BranchesById;

export const getServerSideProps = async (context) => {
  let data = {};
  await axios
    .get(`https://nomdor-dashboard.onrender.com/api/branches/${context.query.id}`, {})
    .then((res) => (data = res.data.data))
    .catch((e) => {
      return { props: {} };
    });

  return {
    props: {
      data: data,
    },
  };
};
