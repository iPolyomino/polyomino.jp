import type { Engine, ISourceOptions } from "@tsparticles/engine";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import options from "@/contents/particles.json";

const initializeParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function LsnlParticles() {
  return (
    <ParticlesProvider init={initializeParticles}>
      <Particles id="lsnl-particles" options={options as ISourceOptions} />
    </ParticlesProvider>
  );
}
