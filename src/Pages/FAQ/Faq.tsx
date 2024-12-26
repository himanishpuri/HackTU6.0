import HeaderText from "@/components/ui/HeaderText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

const Faq = () => {
  return (
    <div className="faq-container py-10 px-5">
      <HeaderText text="FAQ's" />
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto mt-5 text-white"
      >
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className=" hover:text-green-200 hover:no-underline hover:scale-[1.01]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Styles */}
    </div>
  );
};

export default Faq;
