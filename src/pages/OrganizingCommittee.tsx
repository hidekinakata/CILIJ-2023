import React from "react";

type OrganizingCommitteeType = {};

const OrganizingCommittee: React.FC<OrganizingCommitteeType> = (props) => {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-center px-4 pb-10 pt-10 text-justify leading-relaxed sm:px-32 md:pt-16 [&>p]:mb-4 [&>p]:indent-8"
      }
    >
      <h1 className={"mb-10 text-center text-4xl md:text-5xl"}>
        Organizadores
      </h1>
    </main>
  );
};

export default OrganizingCommittee;
