/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Microphone2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Microphone2OffIcon(props: Microphone2OffIconProps) {
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
          "M16.908 12.917a5 5 0 10-5.827-5.819m-.965 3.027l-6.529 7.46a2 2 0 002.827 2.83l7.461-6.529M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Microphone2OffIcon;
/* prettier-ignore-end */
