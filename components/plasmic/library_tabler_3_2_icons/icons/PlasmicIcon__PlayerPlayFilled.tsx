/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayerPlayFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayerPlayFilledIcon(props: PlayerPlayFilledIconProps) {
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
          "M6 4v16a1 1 0 001.524.852l13-8a1.001 1.001 0 000-1.704l-13-8A1 1 0 006 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayerPlayFilledIcon;
/* prettier-ignore-end */
