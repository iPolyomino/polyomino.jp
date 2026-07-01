import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useCallback,
} from "react";

import Main from "@/lib/dtnsim/main";
import { GraphSettings } from "@/types/GraphSettings";

interface Props {
  settings: GraphSettings;
}

const DTN = forwardRef((props: Props, ref) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const main = useRef<Main | null>(null);

  const initMain = useCallback(() => {
    main.current?.stopAnimation();
    try {
      main.current = new Main(canvas.current, props.settings);
    } catch (error) {
      alert(error);
    }
  }, [props.settings]);

  useEffect(() => {
    initMain();

    return () => {
      main.current?.stopAnimation();
      main.current = null;
    };
  }, [initMain]);

  useImperativeHandle(ref, () => ({
    initMain,
  }));

  return (
    <canvas width="800" height="600" ref={canvas} style={{ width: "100%" }} />
  );
});

DTN.displayName = "DTN";

export default DTN;
