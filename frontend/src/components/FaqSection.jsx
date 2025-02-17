import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;
const AccordionItem = AccordionPrimitive.Item;
const AccordionTrigger = AccordionPrimitive.Trigger;
const AccordionContent = AccordionPrimitive.Content;

const FaqSection = ({ items }) => {
  return (
    <div className="w-full max-w-7xl my-20 mx-auto bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-[#6A38C2]">Frequently </span> Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b">
            <AccordionTrigger className="flex w-full items-center justify-between py-4 text-sm font-medium hover:underline group">
              {item.title}
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="p-4">{item.children}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
