/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayerSkipForwardFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayerSkipForwardFilledIcon(
  props: PlayerSkipForwardFilledIconProps
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
          "M3 5v14a1 1 0 001.504.864l12-7a1 1 0 000-1.728l-12-7A1 1 0 003 5zm17-1a1 1 0 01.993.883L21 5v14a1 1 0 01-1.993.117L19 19V5a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayerSkipForwardFilledIcon;
/* prettier-ignore-end */
