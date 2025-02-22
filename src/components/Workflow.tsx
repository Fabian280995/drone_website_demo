import { WorkflowStep as WSType, workflowSteps } from "@/data/workflowSteps";
import SectionWrapper from "./layout/SectionWrapper";
import WorkflowStep from "./ui/WorkflowStep";

function Workflow() {
  return (
    <SectionWrapper id="workflow" className="w-full h-full">
      <div className="max-w-screen-3xl mx-auto">
        <h3 className="text-center">
          So erreichen wir <b>zusammen</b> das <b>beste Ergebnis</b>
        </h3>
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
      </div>
    </SectionWrapper>
  );
}

export default Workflow;
