/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Hexagon3DIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Hexagon3DIcon(props: Hexagon3DIconProps) {
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
          "M19 6.844a2.007 2.007 0 011 1.752v6.555c0 .728-.394 1.399-1.03 1.753l-6 3.844a2 2 0 01-1.942 0l-6-3.844a2.007 2.007 0 01-1.029-1.752V8.596c0-.729.394-1.4 1.029-1.753l6-3.583a2.05 2.05 0 012 0l6 3.584h-.03H19zM12 16.5V21M4.5 7.5L8 10m8 0l4-2.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 7.5V12l-4 2m4-2l4 2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 16.5l4-2.5v-4l-4-2.5L8 10v4l4 2.5z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Hexagon3DIcon;
/* prettier-ignore-end */
