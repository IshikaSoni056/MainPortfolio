import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
import CustomCursor from "../components/CustomCurser";
const Experiences = () => {
  return (
    <div className="w-full">
      <CustomCursor />
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
