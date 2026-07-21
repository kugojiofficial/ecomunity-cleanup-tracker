/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Puzzle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Puzzle2Icon(props: Puzzle2IconProps) {
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
        d={"M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 4v2.5a.5.5 0 01-.5.5 1.5 1.5 0 000 3 .5.5 0 01.5.5V12m0 0v1.5a.5.5 0 00.5.5 1.5 1.5 0 110 3 .5.5 0 00-.5.5V20m8-8h-2.5a.5.5 0 01-.5-.5 1.5 1.5 0 10-3 0 .5.5 0 01-.5.5H12m0 0h-1.5a.5.5 0 00-.5.5 1.5 1.5 0 01-3 0 .5.5 0 00-.5-.5H4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Puzzle2Icon;
/* prettier-ignore-end */
