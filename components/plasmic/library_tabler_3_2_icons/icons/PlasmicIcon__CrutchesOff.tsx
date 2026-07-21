/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CrutchesOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CrutchesOffIcon(props: CrutchesOffIconProps) {
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
          "M8.178 4.174A2 2 0 0110 3h4a2 2 0 010 4h-3m0 14h2m-1 0v-4.092a3 3 0 01.504-1.664l.992-1.488c.034-.05.066-.102.097-.155M14 10V7m-2 14v-4.092a3 3 0 00-.504-1.664l-.992-1.488A3 3 0 0110 12.092V10m0 1h1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CrutchesOffIcon;
/* prettier-ignore-end */
