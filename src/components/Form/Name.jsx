/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  initialData,
  useCardPreviewer,
  useCardPreviewerUpdate,
} from "../../containers/CardPreviewer";
import { namePattern } from "./patterns";

export default function Name() {
  const data = useCardPreviewer();
  const updateData = useCardPreviewerUpdate();

  const { name } = data;

  return (
    <label className="flex flex-col gap-2">
      <span className="text-white text-xl tracking-wider font-semibold">
        Name:
      </span>
      <input
        type="text"
        placeholder={initialData.name}
        value={name}
        onChange={(e) => {
          const newName = namePattern(e.target.value);
          updateData("name", newName);
        }}
        className="p-1.5 px-2.5 rounded-xl outline-none bg-neutral-400 focus:bg-white placeholder:text-neutral-800"
      />
    </label>
  );
}
