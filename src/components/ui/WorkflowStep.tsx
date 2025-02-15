import { WorkflowStep } from "@/data/workflowSteps";
import { cn } from "@/lib/utils";
import PaddingBox from "../layout/PaddingBox";
import {
  WorkfloStepImageOverlaySlider,
  WorkflowStepImageArea,
  WorkflowStepTextArea,
  WorkflowStepVideoArea,
} from "./WorkflowAreas";

interface WorkFlowStepProps {
  workflowStep: WorkflowStep;
  inverted?: boolean;
  number?: number;
}

const WorkFlowStep = ({
  workflowStep,
  inverted = false,
  number = 0,
}: WorkFlowStepProps) => {
  const { title, description, videoSrc, highlighted, imageSrc, overlaySrc } =
    workflowStep;

  const TextArea = () => (
    <WorkflowStepTextArea
      inverted={inverted}
      number={number}
      title={title}
      description={description}
      highlightedWords={highlighted || []}
    />
  );

  const VideoArea = () => {
    if (!videoSrc) return null;
    return <WorkflowStepVideoArea inverted={inverted} videoSrc={videoSrc} />;
  };

  const ImageArea = () => {
    if (!imageSrc) return null;
    return (
      <WorkflowStepImageArea inverted={inverted} src={imageSrc} alt={title} />
    );
  };

  return (
    <PaddingBox vertical="md" className="">
      <div className={cn("grid grid-cols-1 md:grid-cols-2")}>
        {!inverted && <TextArea />}
        {imageSrc && overlaySrc ? (
          <WorkfloStepImageOverlaySlider
            inverted={inverted}
            src={imageSrc}
            alt={title}
            overlaySrc={overlaySrc}
            overlayAlt={title + "_overlay"}
          />
        ) : videoSrc ? (
          <VideoArea />
        ) : (
          <ImageArea />
        )}
        {inverted && <TextArea />}
      </div>
    </PaddingBox>
  );
};

export default WorkFlowStep;
