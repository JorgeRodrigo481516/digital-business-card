import icons from "../../assets/icons";
import { initialData, useCardPreviewer } from "../../containers/CardPreviewer";

const withUrlPieceStyle =
  "hover:scale-125 hover:shadow-lg hover:shadow-white/10 transition-all duration-500";
const withoutUrlPieceStyle = "cursor-pointer";

export default function Footer() {
  const data = useCardPreviewer();

  const { socialMedia } = data;

  return (
    <footer className="p-5 rounded-b-lg bg-[hsl(231,7%,9%)]">
      <nav className="flex justify-center items-center gap-6">
        {socialMedia.map((item, index) => {
          const { platform, url, urlPiece } = item;

          return (
            <a
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              href={`${url}${
                urlPiece || initialData.socialMedia[index].urlPiece || ""
              }`}
              target="_blank"
              rel="noreferrer"
              className={
                urlPiece || initialData.urlPiece
                  ? withUrlPieceStyle
                  : withoutUrlPieceStyle
              }
            >
              <img
                src={icons[platform.toLowerCase()]}
                alt={`${platform} icon`}
              />
            </a>
          );
        })}
      </nav>
    </footer>
  );
}
