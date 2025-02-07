import React from "react";
import PaddingBox from "./layout/PaddingBox";
import customers from "@/assets/customers";
import Image from "next/image";

function CustomersSlider() {
  return (
    <div className="overflow-hidden">
      <PaddingBox
        vertical="sm"
        horizontal="xl"
        className="flex items-center justify-center space-x-6"
      >
        {customers.map((customer) => (
          <a
            key={customer.src.toString()}
            href={customer.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <Image
              src={customer.src}
              alt={customer.alt}
              className="h-16 w-auto object-contain"
            />
          </a>
        ))}
      </PaddingBox>
    </div>
  );
}

export default CustomersSlider;
