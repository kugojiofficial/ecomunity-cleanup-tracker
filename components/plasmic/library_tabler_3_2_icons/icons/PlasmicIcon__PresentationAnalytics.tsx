/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PresentationAnalyticsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PresentationAnalyticsIcon(
  props: PresentationAnalyticsIconProps
) {
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
          "M9 12V8m6 4v-2m-3 2v-1M3 4h18M4 4v10a2 2 0 002 2h12a2 2 0 002-2V4m-8 12v4m-3 0h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PresentationAnalyticsIcon;
/* prettier-ignore-end */
