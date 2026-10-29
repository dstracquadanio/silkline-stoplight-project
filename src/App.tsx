import { PHASES } from "./stoplight/config";
import Stoplight from "./stoplight/Stoplight";
import useStoplightCycle from "./stoplight/useStoplightCycle";

function App() {
  const activeLightId = useStoplightCycle(PHASES);

  return <Stoplight activeLightId={activeLightId} />;
}

export default App;
