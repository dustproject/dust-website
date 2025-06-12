import { Video } from "./Video";
import { Announcement } from "./Announcement";
import { Features } from "./Features";
import { CTA } from "./CTA";
import { CTA2 } from "./CTA2";

export default function LandingPage() {
  return (
    <div className="w-full md:max-w-[824px] xl:max-w-[1400px] md:px-6 sm:px-10 xl:px-6 mx-auto text-white">
      <div className="px-8 sm:px-12 mx-auto md:max-w-none">
        <Announcement />

        <div className="flex lg:gap-[85px] xl:gap-[100px] mt-[45px] md:mt-[60px]">
          <Features />

          <div className="flex-1 flex-col justify-between hidden xl:flex">
            <Video />
            <CTA />
          </div>
        </div>

        <div className="xl:hidden">
          <CTA />
        </div>
      </div>

      <div className="mt-[55px] md:mt-[65px] xl:hidden">
        <Video />
      </div>
    </div>
  );
}
