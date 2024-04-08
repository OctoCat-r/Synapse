import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = async (props) => {
  //   const workflows = await onGetWorkflows()
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        {/* <MoreCredits />
        {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <div className="mt-28 flex text-muted-foreground items-center justify-center">
            No Workflows
          </div>
        )} */}

        <Workflow
          description="Creating a test flow"
          id="amanaian1124262"
          name="Aman Jain"
          publish={false}
        />
      </section>
    </div>
  );
};
export default Workflows;
