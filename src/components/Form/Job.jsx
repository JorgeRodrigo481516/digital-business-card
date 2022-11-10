import {
  initialData,
  useCardPreviewer,
  useCardPreviewerUpdate,
} from "../../containers/CardPreviewer";
import { jobPattern } from "./patterns";

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Job() {
  const data = useCardPreviewer();
  const updateData = useCardPreviewerUpdate();

  const { job } = data;

  return (
    <label className="flex flex-col gap-2">
      <span className="text-white text-xl tracking-wider font-semibold">
        Job:
      </span>
      <input
        type="text"
        placeholder={initialData?.job}
        value={job}
        onChange={(e) => {
          const newJob = jobPattern(e.target.value);
          updateData("job", newJob);
        }}
        className="p-1.5 px-2.5 rounded-xl outline-none bg-neutral-400 focus:bg-white placeholder:text-neutral-800"
      />
    </label>
  );
}
