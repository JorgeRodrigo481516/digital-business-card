/* eslint-disable jsx-a11y/label-has-associated-control */
import { emailPattern } from "./patterns";
import {
  initialData,
  useCardPreviewer,
  useCardPreviewerUpdate,
} from "../../containers/CardPreviewer";

export default function Email() {
  const data = useCardPreviewer();
  const updateData = useCardPreviewerUpdate();

  const { email } = data;

  return (
    <label className="flex flex-col gap-2">
      <span className="text-white text-xl tracking-wider font-semibold">
        Email:
      </span>
      <input
        type="text"
        placeholder={initialData.email}
        value={email}
        onChange={(e) => {
          const newEmail = emailPattern(e.target.value);
          updateData("email", newEmail);
        }}
        className="min-[600px]:w-[22rem] w-64 p-1.5 px-2.5 rounded-xl outline-none bg-neutral-400 focus:bg-white placeholder:text-neutral-800"
      />
    </label>
  );
}
