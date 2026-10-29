import { LIGHTS } from "./config";
import type { LightId } from "./config";
import "./Stoplight.css";

type StoplightProps = {
  activeLightId: LightId | null;
};

function Stoplight({ activeLightId }: StoplightProps) {
  return (
    <div className="stoplight">
      {LIGHTS.map((light) => (
        <div
          key={light.id}
          className="stoplight-light"
          style={{
            backgroundColor:
              light.id === activeLightId ? light.onColor : light.offColor,
          }}
        />
      ))}
    </div>
  );
}

export default Stoplight;
