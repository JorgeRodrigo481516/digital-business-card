import businessMan from "../../assets/profilePics/business-man.png";
import businessWoman from "../../assets/profilePics/business-woman.png";

import icons from "../../assets/icons";
import { useCardPreviewer, initialData } from "../../containers/CardPreviewer";

export default function Info() {
  const data = useCardPreviewer();

  const { isMan, name, job, website, email } = data;

  return (
    <section className="mb-2">
      <img
        src={isMan ? businessMan : businessWoman}
        alt="Man profile"
        className="w-80 rounded-sm bg-red-900 mb-5"
      />
      <div className="flex flex-col items-center px-8">
        <h2 className="font-bold text-2xl">{name || initialData.name}</h2>
        <h4 className="text-[hsl(25,79%,78%)] text-xs">{job || initialData.job}</h4>
        <a
          href={website || initialData.website}
          className="text-[0.65rem] text-neutral-200 mt-2 mb-4"
        >
          {name
            ? name.replace(/\s/g, "").toLowerCase()
            : initialData.name.replace(/\s/g, "").toLowerCase()}
          .website
        </a>
        <a
          href={`mailto:${email || initialData.email}?subject = Data Business Card&body = Hi, my name is ${name || initialData.name}..`}
          className="flex justify-center items-center gap-2 py-2 rounded-md border-solid border-[1px] cursor-pointer bg-white text-black w-full hover:shadow-xl hover:shadow-white/5"
        >
          <img src={icons.email} alt="Email icon" className="" />
          <span className="font-medium text-sm">Email</span>
        </a>
      </div>
    </section>
  );
}
