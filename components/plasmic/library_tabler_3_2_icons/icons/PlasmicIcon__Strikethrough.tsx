/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StrikethroughIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StrikethroughIcon(props: StrikethroughIconProps) {
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
          "M5 12h14m-3-5.5c-.227-.44-.746-.828-1.473-1.101C13.799 5.126 12.908 4.986 12 5h-1a3.5 3.5 0 100 7h2a3.5 3.5 0 110 7h-1.5c-.908.014-1.8-.126-2.527-.399-.727-.273-1.246-.661-1.473-1.101"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default StrikethroughIcon;
/* prettier-ignore-end */
