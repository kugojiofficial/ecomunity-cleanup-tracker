/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlassCocktailIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlassCocktailIcon(props: GlassCocktailIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 21h8m-4-6v6M5 5c0 .263.181.523.533.765.352.243.867.464 1.517.65.65.185 1.422.332 2.271.433.85.1 1.76.152 2.679.152.92 0 1.83-.052 2.679-.152.85-.1 1.62-.248 2.27-.434.65-.185 1.166-.406 1.518-.649C18.82 5.523 19 5.263 19 5s-.181-.523-.533-.765c-.352-.243-.867-.464-1.517-.65a14.688 14.688 0 00-2.271-.433C13.829 3.052 12.919 3 12 3c-.92 0-1.83.052-2.679.152-.85.1-1.62.248-2.27.434-.65.186-1.166.406-1.518.649C5.18 4.477 5 4.737 5 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 5v.388c0 .432.126.853.362 1.206l5 7.509c.633.951 1.88 1.183 2.785.517.191-.141.358-.316.491-.517l5-7.509c.236-.353.362-.774.362-1.206V5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GlassCocktailIcon;
/* prettier-ignore-end */
