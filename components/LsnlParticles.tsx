import { useEffect, useState } from "react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import options from "@/contents/particles.json";

export default function LsnlParticles() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInitialized(true));
  }, []);

  if (!initialized) return null;
  return <Particles id="lsnl-particles" options={options as ISourceOptions} />;
}
