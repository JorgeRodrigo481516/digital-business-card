/* eslint-disable jsx-a11y/label-has-associated-control */
import icons from "../../assets/icons";

export default function AboutBtn({ isUpdatingAbout, setIsUpdatingAbout }) {
  return (
    <label className="flex justify-center items-center gap-2 mx-auto">
      <button
        type="button"
        onClick={() => {
          setIsUpdatingAbout((oldValue) => !oldValue);
        }}
        className="flex justify-center items-center gap-2 p-1 w-32 text-center rounded-xl font-bold italic cursor-pointer hover:bg-red-800 bg-neutral-400"
      >
        {isUpdatingAbout ? "About" : "Interests"}
        <img
          src={icons.alter}
          alt="Switch icon"
          className="h-4 w-4 hover:animate-spin"
        />
      </button>
    </label>
  );
}
