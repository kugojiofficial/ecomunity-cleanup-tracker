/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlugXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlugXIcon(props: PlugXIconProps) {
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
          "M13.55 17.733a5.808 5.808 0 01-5.819-9.679L9.785 6l7.165 7.165M4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M16 16l4 4m0-4l-4 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PlugXIcon;
/* prettier-ignore-end */
