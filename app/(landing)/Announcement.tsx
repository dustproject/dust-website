import { Timer } from "./Timer";
import { Tweet } from "./Tweet";
import { Read } from "./read";

export function Announcement() {
  return (
    <div className="xl:flex xl:justify-between xl:gap-[35px]">
      <Tweet />
      <Read />
    </div>
  );
}
