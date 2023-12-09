import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
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
    text: "Born on 27 August,2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Technology - Information TEchnology",
  },

  // {
  //     icon:<GraduationCap size={20}/>,
  //     text:'Bachelor of Technology - Information TEchnology',

  // },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Indian Institute of Information Technology -Gwalior",
        qualification: "Bachelor of Technology",
        years: "2021-2025",
      },
      {
          university:"Indian Institute of Information Technology -Gwalior",
          qualification:"Bachelor of Technology",
          years:'2021-2025'

      },
      {
          university:"Indian Institute of Information Technology -Gwalior",
          qualification:"Bachelor of Technology",
          years:'2021-2025'

      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Indian Institute of Information Technology -Gwalior",
        qualification: "Bachelor of Technology",
        years: "2021-2025",
      },
      {
        company: "Indian Institute of Information Technology -Gwalior",
        qualification: "Bachelor of Technology",
        years: "2021-2025",
      },
      {
          company:"Indian Institute of Information Technology -Gwalior",
          qualification:"Bachelor of Technology",
          years:'2021-2025'

      },
      {
          company:"Indian Institute of Information Technology -Gwalior",
          qualification:"Bachelor of Technology",
          years:'2021-2025'

      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "HTML,CSS",
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
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row ">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">{/* shakal */}</div>
          <div className="flex-1">

            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className ='w-[162px] xl:w-auto' value= 'personal'>Personal Info</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto'value='qualification'>Qualifications</TabsTrigger>
                <TabsTrigger className   ='w-[162px] xl:w-auto'value='skills'>Skills</TabsTrigger>
              </TabsList>

              <div className="text-lg mt-12 xl:mt-8 ">
                <TabsContent value="personal">
<div className="text-center xl:text-left ">
  <h3 className="h3 mb-4 ">
    unmatched service quality for over ten yers
  </h3>
  <p className="subtitle max-w-xl max-auto xl:mx-0">Ispecialise in crafting in crafting intuitive webssites with cutting edge technology</p>

  <div className="grid xl:grid-cols-2 gap-4 mb-12">
    {infoData.map((item,index)=>{
      return<div className="flex items-center gap-x-4mx-auto xl:mx-0" key={index}>
        <div className="text-primary">{item.icon}</div>
        <div>{item.text}</div>
        </div>
    })}
  </div>
  {/* languages */}
  <div>
    <div>Language Skill</div>
    <div className="border-b border-border"></div>
    <div>English,Hindi</div>
  </div>
</div>
                </TabsContent>
                <TabsContent value="qualification">
               <div>
                <h3 className="h3 mb-8 text-center xl:text-left ">
                  My Awesome Journey
                </h3>
{/* experience and education */}
<div className="grid md:grid-cols-2 gap-y-2">
  {/* experience */}

  <div className="flex flex-col gap-y-6 f">


    <div className="flex gap-x-4 items-center text-[22px] text-primary ">
      <Briefcase/>
      <h4 className="capitalize font-medium">
        {getData(qualificationData,'experience').title}
      </h4>
    </div>
    {/* list */}
<div className="flex flex-col gap-y-8">
  {getData(qualificationData,'experience').data.map((item,index)=>{
const {company,role,years} = item;

    return(
      <div className="flex gap-x-8 group " key={index}>

        <div className="h-[84px] w-[1px] bg-border relative ml-2">
          <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
        </div>
        <div>

        <div className="font-semibold text-xl leading-none mb-2">
{company} </div>
<div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
<div className="text-base font-medium">{years}
</div>
        </div>
        </div>

    )
  })}
</div>

  </div>

{/* education */}

  <div>
  <div className="flex flex-col gap-y-6" >


<div className="flex gap-x-4 items-center text-[22px] text-primary ">
  <GraduationCap size={28}/>
  <h4 className="capitalize font-medium">
    {getData(qualificationData,'education').title}
  </h4>
</div>
{/* list */}
<div className="flex flex-col gap-y-8">
{getData(qualificationData,'education').data.map((item,index)=>{
const {university,qualification,years} = item;

return(
  <div className="flex gap-x-8 group " key={index}>

    <div className="h-[84px] w-[1px] bg-border relative ml-2">
      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] translate-all duration-500"></div>
    </div>
    <div>

    <div className="font-semibold text-xl leading-none mb-2">
{university} </div>
<div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
<div className="text-base font-medium">{years}
</div>
    </div>
    </div>

)
})}
</div>

</div>
  </div>
</div>

               </div>
                </TabsContent>
                <TabsContent value="skills">
<div className="text-center xl:text-left ">
  <h3 className="h3 mb-8">Tools i use Everyday</h3>
  <div className="mb-16">
    <h4 className="
    text-xl font-semibold mb-2 ">
      Skills
    </h4>
    <div className="border-b border-border mb-4"></div>
    {/* skill list */}
    <div>
      {getData(skillData,'skills').data.map((item,index)=>{
        const {name} = item;
        return (
      <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
        <div className="font-medium" >
          {name}
        </div>
      </div>
        )
      })
      }
    </div>
  </div>
  {/* tools */}
  <div>
    <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
    <div className="border-b border-border mb-4"></div>
  
    <div className="flex gap-x-8 justify-center xl:justify-start " >
      {getData(skillData,'tools').data.map((item,index)=>{
        const {imgPath} =item;
        return <div key={index}>
          <Image src={imgPath} width ={48} height={48}
          alt =''
          priority
            />
        </div>
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
