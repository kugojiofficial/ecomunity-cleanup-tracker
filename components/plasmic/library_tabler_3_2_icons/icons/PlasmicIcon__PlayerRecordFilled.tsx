/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayerRecordFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayerRecordFilledIcon(props: PlayerRecordFilledIconProps) {
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
        d={"M8 5.072a8 8 0 11-3.995 7.213L4 12l.005-.285A8 8 0 018 5.072z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayerRecordFilledIcon;
/* prettier-ignore-end */
