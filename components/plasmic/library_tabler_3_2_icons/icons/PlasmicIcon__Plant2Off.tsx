/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Plant2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Plant2OffIcon(props: Plant2OffIconProps) {
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
          "M2 9c0 5.523 4.477 10 10 10a9.953 9.953 0 005.418-1.593m2.137-1.855A9.961 9.961 0 0022 9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 19c0-1.988.58-3.84 1.58-5.397m1.878-2.167A9.961 9.961 0 0122 9M2 9a10 10 0 0110 10m0-15a9.702 9.702 0 013 7.013"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.01 11.5a9.696 9.696 0 01.163-2.318m1.082-2.942A9.697 9.697 0 0112 4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Plant2OffIcon;
/* prettier-ignore-end */
