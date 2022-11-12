/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  initialData,
  useCardPreviewer,
  useCardPreviewerUpdate,
} from "../../containers/CardPreviewer";
import { descriptionPattern } from "./patterns";

export default function Textarea({ isUpdatingAbout }) {
  const data = useCardPreviewer();
  const updateData = useCardPreviewerUpdate();

  const { about, interests } = data;

  return (
    <div className="flex flex-wrap">
      <label className="flex flex-col gap-2">
        <span className="text-white text-xl tracking-wider font-semibold">
          {isUpdatingAbout ? "About" : "Interests"}:
        </span>
        <textarea
          placeholder={
            isUpdatingAbout ? initialData.about : initialData.interests
          }
          value={isUpdatingAbout ? about : interests}
          onChange={(e) => {
            const newDescription = descriptionPattern(e.target.value);

            const target = isUpdatingAbout ? "about" : "interests";

            updateData(target, newDescription);
          }}
          className="resize-none min-[600px]:w-[22rem] w-64 h-[17rem] min-[600px]:h-56 py-6 px-4 rounded-xl overflow-hidden outline-none scroll- bg-neutral-400 focus:bg-white placeholder:text-neutral-800"
        />
      </label>
    </div>
  );
}
