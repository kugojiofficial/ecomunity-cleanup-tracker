/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SnowboardingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SnowboardingIcon(props: SnowboardingIconProps) {
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
          "M15 3a1 1 0 102 0 1 1 0 00-2 0zM7 19l4-2.5-.5-1.5m5.5 6l-1-6-4.5-3L14 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 9l1.5-3H14l2 4 3 1M3 17c.399 1.154.899 1.805 1.5 1.951 6 1.464 10.772 2.262 13.5 2.927 1.333.325 2.333 0 3-.976"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SnowboardingIcon;
/* prettier-ignore-end */
