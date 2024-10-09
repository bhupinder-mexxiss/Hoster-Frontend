import React from "react";
import "./Accordion.css";
import { Accordion } from "flowbite-react";

const AccordionComp = ({ faq }) => {
  return (
    <div>
      <Accordion className="border-none ">
        {faq.map((item, index) => (
          <Accordion.Panel className="border-none ">
            <Accordion.Title className="border-t !border-[#ffffff7e] text-white sm:text-lg lg:text-xl font-medium !rounded-none hover:!bg-transparent px-0 focus:ring-0 bg-transparent">
              {item.title}
            </Accordion.Title>
            <Accordion.Content className="px-0 pt-0 border-none text-white font-light text-sm sm:text-base">
              <p>{item.content}</p>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComp;
