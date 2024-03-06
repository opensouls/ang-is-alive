
import { html } from "common-tags";
import { externalDialog, decision, internalMonologue, brainstorm } from "socialagi";
import { MentalProcess, useActions, useProcessMemory, usePerceptions, useProcessManager } from "soul-engine";

const angReacts: MentalProcess = async ({ step: initialStep }) => {
  const { speak } = useActions();

  let step = await initialStep.next(
    internalMonologue("Ang reacts to his environment"),
    { model: "quality" }
  );
  speak(step.value)

  return step
}

export default angReacts
