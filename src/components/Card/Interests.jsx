import { initialData, useCardPreviewer } from "../../containers/CardPreviewer";

export default function Interests() {
  const data = useCardPreviewer();

  const { interests } = data;

  return (
    <section className="px-8">
      <h3 className="text-lg font-bold mb-1.5 text-neutral-100">Interests</h3>
      <p className="text-xs text-justify text-neutral-300">
        {interests || initialData.interests}
      </p>
    </section>
  );
}
