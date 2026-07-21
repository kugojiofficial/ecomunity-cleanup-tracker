/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HealthRecognitionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HealthRecognitionIcon(props: HealthRecognitionIconProps) {
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
          "M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m-4 12h2a2 2 0 002-2v-2M8.603 9.61a2.04 2.04 0 012.912 0L12 10l.5-.396a2.035 2.035 0 012.897.007 2.104 2.104 0 010 2.949L12 16l-3.397-3.44a2.104 2.104 0 010-2.95z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HealthRecognitionIcon;
/* prettier-ignore-end */
