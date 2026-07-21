/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapPinFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapPinFilledIcon(props: MapPinFilledIconProps) {
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
          "M18.364 4.636a9 9 0 01.203 12.519l-.203.21-4.243 4.242a3 3 0 01-4.097.135l-.144-.135-4.244-4.243A9 9 0 1118.364 4.636zM12 8a3 3 0 100 6 3 3 0 000-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MapPinFilledIcon;
/* prettier-ignore-end */
