/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrianglesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrianglesIcon(props: TrianglesIconProps) {
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
          "M9.974 21h8.052a.975.975 0 00.81-1.517l-4.025-6.048a.972.972 0 00-1.622 0l-4.025 6.048A.977.977 0 009.974 21z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.98 16h14.04c.542 0 .98-.443.98-.989a1 1 0 00-.156-.534l-7.02-11.023a.973.973 0 00-1.648 0l-7.02 11.023a1 1 0 00.294 1.366.973.973 0 00.53.157z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TrianglesIcon;
/* prettier-ignore-end */
