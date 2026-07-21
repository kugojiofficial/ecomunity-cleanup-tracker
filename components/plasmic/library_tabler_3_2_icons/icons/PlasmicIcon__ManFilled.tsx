/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ManFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ManFilledIcon(props: ManFilledIconProps) {
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
          "M15 8c1.628 0 3.2.787 4.707 2.293a1 1 0 01-1.414 1.414c-.848-.848-1.662-1.369-2.444-1.587L15 16.064V21a1 1 0 01-2 0v-4h-2v4a1 1 0 01-2 0v-4.929l-.85-5.951c-.781.218-1.595.739-2.443 1.587a1 1 0 11-1.414-1.414C5.799 8.787 7.373 8 9 8h6zm-3-7a3 3 0 11-3 3l.005-.176A3 3 0 0112 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ManFilledIcon;
/* prettier-ignore-end */
