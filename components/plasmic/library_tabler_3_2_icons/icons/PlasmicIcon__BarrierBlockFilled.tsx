/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BarrierBlockFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BarrierBlockFilledIcon(props: BarrierBlockFilledIconProps) {
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
          "M15 21a1 1 0 010-2h1v-2H8v2h1a1 1 0 010 2H5a1 1 0 010-2h1v-2H5a2 2 0 01-2-2V8a2 2 0 012-2h1V5a1 1 0 012 0v1h8V5a1 1 0 012 0v1h1a2 2 0 012 2v7a2 2 0 01-2 2h-1v2h1a1 1 0 010 2h-4zM12.914 8l-7 7h4.17L17 8h-4.086zM19 10.914L14.914 15H19v-4.086zM8.084 8H5v3.084L8.084 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BarrierBlockFilledIcon;
/* prettier-ignore-end */
