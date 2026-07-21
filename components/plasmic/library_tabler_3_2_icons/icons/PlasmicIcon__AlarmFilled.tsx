/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlarmFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlarmFilledIcon(props: AlarmFilledIconProps) {
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
          "M16 6.072a8 8 0 11-11.995 7.213L4 13l.005-.285A8 8 0 0116 6.072zM12 9a1 1 0 00-1 1v3l.007.117A1 1 0 0012 14h2l.117-.007A1 1 0 0015 13l-.007-.117A1 1 0 0014 12h-1v-2l-.007-.117A1 1 0 0012 9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.412 3.191A1 1 0 017.685 4.73l-.097.08-2.75 2a1 1 0 01-1.273-1.54l.097-.08 2.75-1.999zm9.779.221a1 1 0 011.291-.288l.106.067 2.75 2a1 1 0 01-1.07 1.685l-.106-.067-2.75-2a1 1 0 01-.221-1.397z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlarmFilledIcon;
/* prettier-ignore-end */
