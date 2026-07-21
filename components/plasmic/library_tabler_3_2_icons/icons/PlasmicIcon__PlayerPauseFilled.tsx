/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayerPauseFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayerPauseFilledIcon(props: PlayerPauseFilledIconProps) {
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
          "M9 4H7a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2zm8 0h-2a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2V6a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayerPauseFilledIcon;
/* prettier-ignore-end */
