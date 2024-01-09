import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">

        <div className="flex flex-col justify-center">

          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px h-[2px] bg-primary">

            </span>
            <div>hay hi</div>
            <h1 className="h1 max-w-md mb-8 "> Lets work together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium officia, molestiae 
            </p>
          </div>
          {/* illustration image */}
          <div className="hidden xl:flex w-full  bg-contain bg-top bg-no-repeat " >

          </div>

        </div>

        <div>
<div className="flex items-center gap-x-8">
 <MailIcon size={18} className="text-primary  "/>
 <div>

 </div>
</div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
