/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useCardPreviewer,
  useCardPreviewerUpdate,
} from "../../containers/CardPreviewer";

import icons from "../../assets/icons";

export default function Sexuality() {
  const data = useCardPreviewer();
  const updateData = useCardPreviewerUpdate();

  const { isMan } = data;

  return (
    <label className="flex justify-center items-center gap-2 mx-auto">
      <span className="text-neutral-200">I&apos;m</span>
      <button
        type="button"
        onClick={() => updateData("isMan", !isMan)}
        className="flex justify-center items-center gap-2 py-1 px-2.5 rounded-xl font-bold italic cursor-pointer hover:bg-red-800 bg-neutral-400"
      >
        {isMan ? "Man" : "Woman"}
        <img
          src={icons.alter}
          alt="Switch icon"
          className="h-4 w-4 hover:animate-spin"
        />
      </button>
    </label>
  );
}
