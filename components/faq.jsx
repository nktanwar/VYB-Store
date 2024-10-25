import Faqdown from "./faqDropdown";
export default function Faq(){
    return (
        <div  className="flex flex-col items-center p-4 sm:flex-row sm:justify-center">
            <div className=" flex items-center">
                <img src="/assets/FAQ.png" alt="" className="max-w-full h-auto" />

            </div>
            <div className="flex-row items-center">
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

// export default function Faq() {
//     return (
//         <div className="flex flex-col items-center p-4">
//             {/* FAQ Image Section */}
//             <div className="flex items-center mb-8">
//                 <img src="/assets/FAQ.png" alt="FAQ" className="max-w-full h-auto" />
//             </div>

//             {/* FAQ Questions Section */}
//             <div className="flex flex-col space-y-4">
//                 <Faqdown ques={"How much does it cost to set up a store?"} ans={"Add an answer here."} />
//                 <Faqdown ques={"What kind of digital products can I sell?"} ans={"Add an answer here."} />
//                 <Faqdown ques={"Do I need technical skills to use the platform?"} ans={"Add an answer here."} />
//                 <Faqdown ques={"Is there a limit to the number of products I can list?"} ans={"Add an answer here."} />
//                 <Faqdown ques={"How do I receive payments for my sales?"} ans={"Add an answer here."} />
//                 <Faqdown ques={"Can I sell internationally on this marketplace?"} ans={"Add an answer here."} />
//                 <Faqdown ques={"What support and resources are available for sellers?"} ans={"Add an answer here."} />
//                 <Faqdown ques={"Is there a review process for uploaded products?"} ans={"Add an answer here."} />
//             </div>
//         </div>
//     );
// }