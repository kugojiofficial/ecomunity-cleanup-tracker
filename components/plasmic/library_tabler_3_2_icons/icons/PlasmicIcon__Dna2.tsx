/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Dna2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Dna2Icon(props: Dna2IconProps) {
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
          "M17 3v1c-.01 3.352-1.68 6.023-5.008 8.014-3.328 1.99 3.336-2 .008-.014-3.328 1.99-5 4.662-5.008 8.014v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17 21.014v-1c-.01-3.352-1.68-6.023-5.008-8.014-3.328-1.99 3.336 2 .008.014C8.672 10.023 7 7.352 6.992 4V3M7 4h10M7 20h10M8 8h8m-8 8h8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Dna2Icon;
/* prettier-ignore-end */
