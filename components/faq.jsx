import Faqdown from "./faqDropdown";
import Image from "next/image";
export default function Faq(){
    return (
        <div  className="flex flex-col items-center p-4 sm:flex-row sm:justify-center">
            <div className=" flex items-center">
                <Image src="/assets/FAQ.png" alt="" className="max-w-full h-auto"
                width={500}
                height={300} />

            </div>
            <div className="flex-row items-center p-3">
              <Faqdown ques={ "How much does it cost to set up a store?"} ans={"Add a ans here"}/>

              <Faqdown ques={ "What kind of digital products can I sell?"} ans={"Add a ans here"}/>

              <Faqdown ques={ "Do I need technical skills to use to platform?"} ans={"Add a ans here"}/>

              <Faqdown ques={ "Is there a limit to the number of products I can list?"} ans={"Add a ans here"}/>

              <Faqdown ques={ "How do I receive payments for my sales?"} ans={"Add a ans here"}/>

              <Faqdown ques={ "Can I sell internationally on this marketplade?"} ans={"Add a ans here"}/>

              <Faqdown ques={ "What support and resources are availabel for sellers?"} ans={"Add a ans here"}/>
              
              <Faqdown ques={ "Is there a review process for uploaded products?"} ans={"Add a ans here"}/>
              


            </div>
        </div>
    );
}
