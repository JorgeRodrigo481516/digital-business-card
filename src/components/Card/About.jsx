import { initialData, useCardPreviewer } from "../../containers/CardPreviewer";

export default function About() {
  const data = useCardPreviewer();

  const { about } = data;

  return (
    <section className="px-8">
      <h3 className="text-lg font-bold mb-1.5 text-neutral-100">About</h3>
      <p className="text-xs text-justify text-neutral-300">
        {about || initialData.about}
      </p>
    </section>
  );
}
