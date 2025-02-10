import { WorkflowStep as WSType, workflowSteps } from "@/data/workflowSteps";
import WorkflowStep from "./ui/WorkflowStep";
import PaddingBox from "./layout/PaddingBox";

function Workflow() {
  return (
    <section id="workflow" className="w-full h-full">
      <PaddingBox top="xl" bottom="lg" horizontal="xl" className="h-full">
        <h2 className="text-2xl md:text-4xl text-center">
          So erreichen wir <b>zusammen</b> das <b>beste Ergebnis</b>
        </h2>
        <div className="flex flex-col justify-evenly h-full">
          {workflowSteps.map((workflowStep: WSType, index: number) => (
            <WorkflowStep
              key={index}
              workflowStep={workflowStep}
              inverted={index % 2 !== 0}
              number={index + 1}
            />
          ))}
        </div>
      </PaddingBox>
    </section>
  );
}

export default Workflow;
