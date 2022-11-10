/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";

import { Name, Job, Sexuality, Email, AboutBtn, Textarea, Links } from ".";

export default function Form() {
  const [isUpdatingAbout, setIsUpdatingAbout] = useState(true);

  return (
    <div className="flex flex-col justify-around items-center gap-2.5 p-5 max-w-3xl h- rounded-md text-black bg-[hsl(231,12%,12%)]">
      <span className="uppercase text-2xl font-bold text-[hsl(27,82%,74%)] tracking-widest italic">
        Edit Card
      </span>
      <div className="flex flex-wrap justify-around gap-5 mb-3">
        <Name />
        <Job />
      </div>
      <Sexuality />
      <div className="-mt-3 flex flex-wrap min-[480px]:justify-between justify-center items-end px-2 gap-8 min-[480px]:gap-3">
        <Email />
        <AboutBtn
          isUpdatingAbout={isUpdatingAbout}
          setIsUpdatingAbout={setIsUpdatingAbout}
        />
      </div>
      <Textarea isUpdatingAbout={isUpdatingAbout} />
      <Links />
    </div>
  );
}
