import {
  initialData,
  useCardPreviewer,
  useCardPreviewerUpdate,
} from "../../containers/CardPreviewer";
import icons from "../../assets/icons";

export default function Links() {
  const data = useCardPreviewer();
  const updateData = useCardPreviewerUpdate();

  const { socialMedia } = data;

  const handleChange = (targetIndex, value) => {
    const newSocialMedia = socialMedia.map((media, index) => {
      if (targetIndex === index) {
        return { ...media, urlPiece: value };
      }
      return media;
    });
    updateData("socialMedia", newSocialMedia);
  };

  return (
    <div className="flex flex-col gap-4">
      <span className="text-white text-xl tracking-wider font-semibold">
        Links:
      </span>
      {socialMedia.map((media, index) => {
        const { platform, urlPiece } = media;

        return (
          <div key={index} className="flex items-center gap-2">
            <img src={icons[platform.toLowerCase()]} alt={`${platform} Icon`} />
            <input
              type="text"
              placeholder={`${
                platform === "Linkedin"
                  ? `/in/${initialData.socialMedia[index].urlPiece || ""}`
                  : `/${initialData.socialMedia[index].urlPiece || ""}`
              }`}
              value={urlPiece}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-64 p-1.5 px-2.5 rounded-xl outline-none bg-neutral-400 focus:bg-white placeholder:text-neutral-800"
            />
          </div>
        );
      })}
    </div>
  );
}
