"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const TrustedPartnerInfinteCarosuel = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    imgSrc: string
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
      const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
      function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
          const scrollerContent = Array.from(scrollerRef.current.children);
    
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
              scrollerRef.current.appendChild(duplicatedItem);
            }
          });
    
          getDirection();
          getSpeed();
          setStart(true);
        }
      }
    addAnimation();
  }, [direction, speed]);
  const [start, setStart] = useState(false);

  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden ",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full h-60 shrink-0 flex-nowrap gap-4 py-4 items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, index) => (
          <li
            className="mx-9 p-3 shadow-2xl rounded-xl"
            key={index}
          >
           <img className="object-center " height={60} width={133} src={item.imgSrc} alt="" /> 
          </li>
        ))}
      </ul>
    </div>
  );
};
