import { CardPreviewerProvider } from "./CardPreviewerContext";
import { Card, Form } from "../../components";

export default function CardPreviewer() {
  return (
    <CardPreviewerProvider>
      <div className="bg-[hsl(227,11%,15%)] p-3 rounded-lg flex justify-evenly items-center gap-8 flex-wrap text-white">
        <Card />
        <Form />
      </div>
    </CardPreviewerProvider>
  );
}
