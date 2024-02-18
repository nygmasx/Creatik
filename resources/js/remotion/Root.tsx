import React from "react";
import {Composition} from "remotion";
import {MyComposition} from "@/remotion/Composition";

export const RemotionRoot: React.FC = () => {
  return(
      <>
          <Composition
            id="test"
            component={MyComposition}
            durationInFrames={300}
            width={1920}
            height={1080}
            fps={60}
          />
      </>
  );
};
