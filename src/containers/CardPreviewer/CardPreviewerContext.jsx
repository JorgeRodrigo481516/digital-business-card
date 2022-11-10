import { createContext, useCallback, useContext, useState } from "react";

const CardPreviewerContext = createContext();
const CardPreviewerUpdateContext = createContext();

export function useCardPreviewer() {
  return useContext(CardPreviewerContext);
}
export function useCardPreviewerUpdate() {
  return useContext(CardPreviewerUpdateContext);
}

export const initialData = {
  isMan: true,
  name: "Rodrigo Buonomo",
  job: "Frontend Developer",
  website: "",
  email: "jorge.rodrigo.481516@gmail.com",
  about:
    "I'm a frontend developer with a particular interest in organizing the folder structure. I try to keep up with current technologies and best practices and am always looking for new things to learn.",
  interests:
    "Train your body at the gym and your mind with books. Music lover with striking lyrics. Listen to successful entrepreneurs and investors. Be a little better each day. Fanatic for memorable experiences. And, of course, coffee is life.",
  socialMedia: [
    {
      platform: "Twitter",
      urlPiece: "",
      url: "https://twitter.com/",
    },
    {
      platform: "Facebook",
      urlPiece: "",
      url: "https://www.facebook.com/",
    },
    {
      platform: "Instagram",
      urlPiece: "_rodrigo.buonomo",
      url: "https://www.instagram.com/",
    },
    {
      platform: "LinkedIn",
      urlPiece: "jorge-rodrigo-rosario-almeida",
      url: "https://www.linkedin.com/in/",
    },
    {
      platform: "GitHub",
      urlPiece: "JorgeRodrigo481516",
      url: "https://github.com/",
    },
  ],
};

// eslint-disable-next-line react/prop-types
export function CardPreviewerProvider({ children }) {
  const [data, setData] = useState(initialData);

  const updateData = useCallback(
    (target, value) => {
      setData((oldData) => ({ ...oldData, [target]: value }));
    },
    [data]
  );

  return (
    <CardPreviewerContext.Provider value={data}>
      <CardPreviewerUpdateContext.Provider value={updateData}>
        {children}
      </CardPreviewerUpdateContext.Provider>
    </CardPreviewerContext.Provider>
  );
}
