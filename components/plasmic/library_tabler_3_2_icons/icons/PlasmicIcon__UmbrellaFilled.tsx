/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UmbrellaFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UmbrellaFilledIcon(props: UmbrellaFilledIconProps) {
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
          "M12 3a9 9 0 019 9 1 1 0 01-.883.993L20 13h-7v5a1 1 0 001.993.117L15 18a1 1 0 012 0 3 3 0 01-5.995.176L11 18v-5H4a1 1 0 01-.993-.883L3 12a9 9 0 019-9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UmbrellaFilledIcon;
/* prettier-ignore-end */
