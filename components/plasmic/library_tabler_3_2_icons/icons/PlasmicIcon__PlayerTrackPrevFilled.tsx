/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayerTrackPrevFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayerTrackPrevFilledIcon(
  props: PlayerTrackPrevFilledIconProps
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
          "M20.341 4.247l-8 7a1 1 0 000 1.506l8 7c.647.565 1.659.106 1.659-.753V5c0-.86-1.012-1.318-1.659-.753zm-11 0l-8 7a1 1 0 000 1.506l8 7C9.988 20.318 11 19.859 11 19V5c0-.86-1.012-1.318-1.659-.753z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayerTrackPrevFilledIcon;
/* prettier-ignore-end */
