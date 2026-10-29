import { useEffect, useState } from "react";
import type { LightId, Phase } from "./config";

function useStoplightCycle(phases: Phase[]): LightId | null {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (phases.length === 0) return;

    const timeoutId = setTimeout(() => {
      setIndex((i) => (i + 1) % phases.length);
    }, phases[index % phases.length].durationMs);

    return () => clearTimeout(timeoutId);
  }, [index, phases]);

  // No phases: every light stays off.
  if (phases.length === 0) return null;

  const invalidPhase = phases.find((phase) => phase.durationMs <= 0);
  if (invalidPhase) {
    throw new Error(
      `Phase "${invalidPhase.lightId}" has durationMs ${invalidPhase.durationMs}; it must be greater than 0.`,
    );
  }

  // `% phases.length` keeps the index in range if the phases list gets shorter.
  return phases[index % phases.length].lightId;
}

export default useStoplightCycle;
