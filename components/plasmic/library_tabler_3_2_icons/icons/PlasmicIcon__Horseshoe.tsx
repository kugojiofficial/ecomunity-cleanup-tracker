/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HorseshoeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HorseshoeIcon(props: HorseshoeIconProps) {
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
          "M19 17c.5-1.242 2-2 2-5s-1-9-9-9-9 6-9 9 1.495 3.749 2 5l-2 1 2 3 2.406-1.147c1.25-.714 1.778-2.08 1.203-3.363C7.531 14.083 7 8 12 8s4.469 6.083 3.39 8.49c-.574 1.284-.045 2.649 1.204 3.363L19 21l2-3-2-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HorseshoeIcon;
/* prettier-ignore-end */
