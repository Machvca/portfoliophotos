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
          "transition-bg  relative flex h-full flex-col items-center justify-center bg-transparent text-stone-950",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(100deg,#312e81_90%,#312e81_90%,#312e81_20%,#312e81_25%,#312e81_30%)", // indigo-900
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#312e81_0%,#1e1b4b_30%,transparent_10%,transparent_12%,#312e81)", // indigo-950 + transparente
            "--white-gradient":
              "repeating-linear-gradient(100deg,#312e81_90%,#312e81_90%,transparent_10%,transparent_12%,#4f46e5_60%)", // indigo con un indigo-600 más vibrante

            "--blue-300": "#4338ca", // indigo-700
            "--blue-400": "#4f46e5", // indigo-600
            "--blue-500": "#6366f1", // indigo-500
            "--indigo-300": "#a5b4fc", // indigo-300
            "--violet-200": "#eae9ff", // tu gris claro (para contraste suave)
            "--black": "#1e1b4b", // indigo-950 casi negro
            "--white": "#eae9ff", // tu gris claro (texto y acentos)
            "--transparent": "transparent",
          } as React.CSSProperties & Record<string, string>}
          //
        >
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px]  bg-size-[300%,200%] bg-position-[50%_50%,50%_50%] opacity-60 blur-[5px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_0%,var(--violet-200)_5%,var(--blue-400)_0%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-[""] [background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

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
