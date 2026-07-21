/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterXFilledIcon(props: CircleLetterXFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2.447 5.106a1 1 0 00-1.341.447L12 9.763l-1.106-2.21a1 1 0 00-1.234-.494l-.107.047a1 1 0 00-.447 1.341L10.88 12l-1.775 3.553a1 1 0 00.345 1.283l.102.058a1 1 0 001.341-.447L12 14.236l1.106 2.211a1 1 0 001.234.494l.107-.047a1 1 0 00.447-1.341L13.118 12l1.776-3.553a1 1 0 00-.345-1.283l-.102-.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterXFilledIcon;
/* prettier-ignore-end */
