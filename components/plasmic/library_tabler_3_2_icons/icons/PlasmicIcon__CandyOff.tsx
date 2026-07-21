/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CandyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CandyOffIcon(props: CandyOffIconProps) {
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
          "M11.174 7.17l.119-.12a2 2 0 012.828 0l2.829 2.83a2 2 0 010 2.828l-.124.124m-2 2l-2.123 2.123a2 2 0 01-2.828 0l-2.829-2.831a2 2 0 010-2.828l2.113-2.112m7.084-.012l3.086-.772a1.5 1.5 0 00.697-2.516L17.81 3.667a1.5 1.5 0 00-2.44.47L14.122 7.05"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.172 16.243L8.4 19.329a1.5 1.5 0 01-2.516.697L3.667 17.81a1.5 1.5 0 01.47-2.44l2.913-1.248M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CandyOffIcon;
/* prettier-ignore-end */
