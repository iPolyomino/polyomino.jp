import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import Main from "@/lib/dtnsim/main";
import { GraphSettings } from "@/types/GraphSettings";

interface Props {
  settings: GraphSettings;
}

const DTN = forwardRef((props: Props, ref) => {
  const canvas = useRef(null);

  const [main, setMain] = useState<Main | null>();

  useEffect(() => {
    setMain(new Main(canvas.current, props.settings));
  }, []);

  useImperativeHandle(ref, () => ({
    initMain() {
      if (main != null) {
        main.stopAnimation();
      }
      try {
        setMain(new Main(canvas.current, props.settings));
      } catch (error) {
        alert(error);
      }
    },
  }));

  return (
    <canvas width="800" height="600" ref={canvas} style={{ width: "100%" }} />
  );
});

DTN.displayName = "DTN";

export default DTN;
