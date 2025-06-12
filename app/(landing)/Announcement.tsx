import { Timer } from "./Timer";
import { Tweet } from "./Tweet";

export function Announcement() {
  return (
    <div className="xl:flex xl:justify-between xl:gap-[35px]">
      <Tweet />
      <Timer />
    </div>
  );
}
