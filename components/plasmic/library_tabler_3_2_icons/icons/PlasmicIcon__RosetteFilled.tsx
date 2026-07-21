/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RosetteFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RosetteFilledIcon(props: RosetteFilledIconProps) {
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
          "M12.01 2.011a3.2 3.2 0 012.113.797l.154.145.698.698c.192.19.442.31.71.341L15.82 4h1a3.2 3.2 0 013.195 3.018l.005.182v1c0 .27.092.533.258.743l.09.1.697.698a3.2 3.2 0 01.147 4.382l-.145.154-.698.698a1.2 1.2 0 00-.341.71l-.008.135v1a3.2 3.2 0 01-3.018 3.195l-.182.005h-1a1.2 1.2 0 00-.743.258l-.1.09-.698.697a3.2 3.2 0 01-4.382.147l-.154-.145-.698-.698a1.2 1.2 0 00-.71-.341L8.2 20.02h-1a3.2 3.2 0 01-3.195-3.018L4 16.82v-1a1.2 1.2 0 00-.258-.743l-.09-.1-.697-.698a3.2 3.2 0 01-.147-4.382l.145-.154.698-.698a1.2 1.2 0 00.341-.71L4 8.2v-1l.005-.182a3.2 3.2 0 013.013-3.013L7.2 4h1a1.2 1.2 0 00.743-.258l.1-.09.698-.697a3.2 3.2 0 012.269-.944z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RosetteFilledIcon;
/* prettier-ignore-end */
