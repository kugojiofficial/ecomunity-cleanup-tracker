/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FenceOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FenceOffIcon(props: FenceOffIconProps) {
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
          "M12 12H4v4h12m4 0v-4h-4M6 16v4h4v-4m0-4v-2m0-4L8 4M6 6v6m8 4v4h4v-2m0-6V6l-2-2-2 2v4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FenceOffIcon;
/* prettier-ignore-end */
