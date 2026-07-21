/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToggleLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToggleLeftIcon(props: ToggleLeftIconProps) {
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
        d={"M8 9a3 3 0 11-3 3l.005-.176A3 3 0 018 9z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16 5a7 7 0 110 14H8A7 7 0 118 5h8zm0 2H8a5 5 0 100 10h8a5 5 0 100-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ToggleLeftIcon;
/* prettier-ignore-end */
