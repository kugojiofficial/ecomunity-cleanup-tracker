/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SnowmanIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SnowmanIcon(props: SnowmanIconProps) {
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
          "M12 3a4 4 0 012.906 6.75 6 6 0 11-5.81 0A4 4 0 0112 3zm5.5 8.5L20 10M6.5 11.5L4 10m8 3h.01M12 16h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SnowmanIcon;
/* prettier-ignore-end */
