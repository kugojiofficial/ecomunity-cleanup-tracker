/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CardsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CardsIcon(props: CardsIconProps) {
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
          "M3.604 7.197l7.138-3.109a.96.96 0 011.27.527l4.924 11.902a1 1 0 01-.514 1.304L9.285 20.93a.96.96 0 01-1.271-.527L3.09 8.5a1 1 0 01.514-1.303zM15 4h1a1 1 0 011 1v3.5M20 6c.264.112.52.217.768.315a1 1 0 01.53 1.311L19 13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CardsIcon;
/* prettier-ignore-end */
