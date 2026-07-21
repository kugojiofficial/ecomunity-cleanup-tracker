/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RippleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RippleOffIcon(props: RippleOffIconProps) {
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
          "M3 7c.915-.61 1.83-1.034 2.746-1.272m4.212.22c.68.247 1.361.598 2.042 1.052 3 2 6 2 9 0M3 17c3-2 6-2 9 0 2.092 1.395 4.184 1.817 6.276 1.266M3 12c3-2 6-2 9 0m5.482 1.429c1.173-.171 2.345-.647 3.518-1.429M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RippleOffIcon;
/* prettier-ignore-end */
