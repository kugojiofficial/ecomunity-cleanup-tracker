/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SparklesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SparklesIcon(props: SparklesIconProps) {
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
          "M16 18a2 2 0 012 2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2 2zm0-12a2 2 0 012 2 2 2 0 012-2 2 2 0 01-2-2 2 2 0 01-2 2zM9 18a6 6 0 016-6 6 6 0 01-6-6 6 6 0 01-6 6 6 6 0 016 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SparklesIcon;
/* prettier-ignore-end */
