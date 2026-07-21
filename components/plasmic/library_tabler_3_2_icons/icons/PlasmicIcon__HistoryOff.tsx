/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HistoryOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HistoryOffIcon(props: HistoryOffIconProps) {
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
          "M3.05 11a8.975 8.975 0 012.54-5.403M7.904 3.9a9 9 0 0112.113 12.112m-1.695 2.312A9 9 0 013.55 15m-.5 5v-5h5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HistoryOffIcon;
/* prettier-ignore-end */
