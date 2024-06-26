import React from "react";
import Lines from "../atoms/lines";

export default function PlugNTote() {
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Lines />
        <div className="w-full max-w-3xl flex flex-col items-center justify-center px-10 pb-10 pt-40 -mb-40 z-10">
          <img
            src="/tototte.gif"
            alt="tototte"
            className="w-full h-80 object-cover z-20"
          />
          <div className="absolute w-[720px] h-[400px] flex items-center justify-between top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 gradient-plugntotte-gif -mt-5 z-10"></div>
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center gradient-plugntotte">
        <Lines />
        <div className="w-full max-w-3xl flex flex-col items-center justify-center px-10 pb-20 pt-32 z-10">
          <div className="w-full flex items-center justify-between mb-16">
            <div className="flex flex-col items-start">
              <h3 className="text-6xl">
                technologie <br />
                plug’n’tote
              </h3>
              <p className="text-fg-3 w-72 font-gustavo mt-6">
                La tototte est équipée de la{" "}
                <span className="font-bold">
                  technologie plug&apos;n&apos;tote
                </span>
                , permettant de changer de plug à volonté, offrant ainsi un
                accès à une{" "}
                <span className="font-bold">
                  gamme infinie de saveurs de suçotage
                </span>{" "}
                pour satisfaire tous les goûts.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-fg-3 w-72 font-gustavo mt-6">
                Cette technologie vous permet de changer en un clin d’œil de
                saveur pour{" "}
                <span className="font-bold">voyager du bout des lèvres.</span>
              </p>
            </div>
          </div>
          <a
            href="#flavors"
            className="text-fg-2 py-2 px-10 font-gustavo font-medium mix-blend-multiply hover-link"
          >
            Découvrir les saveurs
          </a>
        </div>
      </div>
    </>
  );
}
