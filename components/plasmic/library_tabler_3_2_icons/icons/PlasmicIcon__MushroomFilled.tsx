/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MushroomFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MushroomFilledIcon(props: MushroomFilledIconProps) {
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
          "M15 15v4a3 3 0 01-5.995.176L9 19v-4h6zM4.9 13a1.9 1.9 0 01-1.894-1.752L3 11.1C3 6.077 7.027 2 12 2s9 4.077 9 9.1a1.9 1.9 0 01-1.752 1.894L19.1 13H4.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MushroomFilledIcon;
/* prettier-ignore-end */
