import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ishpreet Kaur",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9536989164",
  },
  {
    icon: <MailIcon size={20} />,
    text: "kaur.ishpreet.bedi@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 27 August, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Technology - Information Technology",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Indian Institute of Information Technology - Gwalior",
        qualification: "Bachelor of Technology",
        years: "2025 -  CGPA:7.67",
      },
      {
        university: "St. Andrews School , Agra",
        qualification: "Class - XII",
        years: "2020 - 95% ",
      },
      {
        university: "St. Andrews School , Agra",
        qualification: "Class-X",
        years: "2018 - 97.2%",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Credesense",
        role: "Full Stack Developer",
        years: "April'24-Current",
      },
      {
        company: "BizBee",
        role: "RPA Developer",
        years: "January'24 - May-24",
      },
      {
        company: "E-Cell, IIIT-Gwalior",
        role: "Core Member",
        years: "2021-2025",
      },

    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Typescript, Javascript",
      },
      {
        name: "C/C++, Python, Linux/Unix",
      },
      {
        name: "Node.js, React.js, MongoDb, MySQL",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 flex justify-center">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualification">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      unmatched service quality for over ten years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with cutting-edge technology.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div>Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-2">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col gap-y-6">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <GraduationCap size={28} />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "education").title}
                            </h4>
                          </div>
                          <div className="flex flex-col gap-y-8">
                            {getData(qualificationData, "education").data.map(
                              (item, index) => {
                                const { university, qualification, years } =
                                  item;
                                return (
                                  <div className="flex gap-x-8 group" key={index}>
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {university}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}>
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
