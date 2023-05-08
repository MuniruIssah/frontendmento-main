"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import leftRight from '../images/icon-slider.svg'
import { cn } from "../../../lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#EAEEFB]">
      <SliderPrimitive.Range className="absolute h-full bg-[#A5F3EB]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="grid place-items-center h-10 w-10 rounded-full shadow-xl shadow-[#A5F3EB] bg-[#10D5C2] ring-offset-background transition-colors focus:bg-[#67ADA6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" >
      <img src={leftRight} className={'object-contain'}/>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
