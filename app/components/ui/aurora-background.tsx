"use client";
import { cn } from "../../../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg  relative flex h-full flex-col items-center justify-center bg-transparent text-verde-oliva",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#c45824_90%,#c45824_90%,#c45824_20%,#c45824_25%,#c45824_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#c45824_0%,#000_30%,transparent_10%,transparent_12%,#c45824%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#c45824_90%,#c45824_90%,transparent_10%,transparent_12%,#c45824_60%)",

              "--blue-300": "#f09d74",
              "--blue-400": "#883911",
              "--blue-500": "#7a4e37",
              "--indigo-300": "#9d3704",
              "--violet-200": "#e99d77",
              "--black": "#c45824",
              "--white": "#c45824",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] bg-size-[300%,200%] bg-position-[50%_50%,50%_50%] opacity-60 blur-[5px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_0%,var(--violet-200)_5%,var(--blue-400)_0%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `mask-[radial-gradient(ellipse_at_100%_0%,black_30%,var(--transparent)_80%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
