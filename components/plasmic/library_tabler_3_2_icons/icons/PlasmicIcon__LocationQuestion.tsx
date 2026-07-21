/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationQuestionIcon(props: LocationQuestionIconProps) {
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
          "M14.5 21a.55.55 0 01-1 0L10 14l-7-3.5a.55.55 0 010-1L21 3l-2.967 8.215M19 22v.01M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LocationQuestionIcon;
/* prettier-ignore-end */
