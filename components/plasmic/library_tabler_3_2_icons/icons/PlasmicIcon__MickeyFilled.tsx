/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MickeyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MickeyFilledIcon(props: MickeyFilledIconProps) {
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
          "M18.501 2a4.5 4.5 0 01.878 8.913 7.999 7.999 0 11-15.374 3.372L4 14l.005-.285a7.991 7.991 0 01.615-2.803 4.5 4.5 0 01-3.187-6.348 4.505 4.505 0 013.596-2.539l.225-.018L5.535 2l.244.009a4.5 4.5 0 014.215 4.247 8.001 8.001 0 014.013 0A4.5 4.5 0 0118.501 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MickeyFilledIcon;
/* prettier-ignore-end */
