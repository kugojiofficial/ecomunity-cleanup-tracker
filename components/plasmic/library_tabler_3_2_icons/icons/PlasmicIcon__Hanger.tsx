/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HangerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HangerIcon(props: HangerIconProps) {
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
          "M14 6a2 2 0 10-4 0c0 1.667.67 3 2 4h-.008m0 0l7.971 4.428a2 2 0 011.029 1.749V17a2 2 0 01-2 2h-14a2 2 0 01-2-2v-.823a2 2 0 011.029-1.749L11.992 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HangerIcon;
/* prettier-ignore-end */
