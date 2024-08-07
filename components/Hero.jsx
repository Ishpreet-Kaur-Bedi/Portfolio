import Link from "next/link";

import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            {/* text */}

            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ">
              Web Developer
            </div>

            <h1 className="h1 mb-4">Hello, My name is Ishpreet Kaur</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Navigating through the fields of tech industry, I am experienced
              web developer and AI-ML Enthusiast
            </p>
{/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="contact">
                <Button className="gap-x-2">
                  Contact me
                  <Send size={18} />
                </Button>
              </Link>

              <Button variant="secondary" className="gap-x-2">
                Download Cv
                <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden xl:flex relative flex-col p-20 gap-y-10">
            {/* //badges */}

            <Badge
              containerStyles="absolute top-[24%]  -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of Experience"
            />

            <Badge
              containerStyles="absolute top-[80%]  -left-[1rem]  "
              icon={<RiTodoFill />}
              endCountNum={9}
              badgeText="Finished Projects"
            />

            {/* <Badge 
containerStyles='absolute top-[80%]  -left-[1rem]  '
icon={<RiBriefcase4Fill />} endCountNum={3}
 badgeText='Years of Experience'/> */}

            <div className="bg-hero_shape2_light dark:bg-hero2_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 flex-col -right-2"></div>
          </div>
          {/* <div className="hidden xl:flex relative">
image
</div> */}
        </div>

        <div className="hidden md:flex absolute  left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="flex flex-row gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
<Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all' />

</div> */
}
