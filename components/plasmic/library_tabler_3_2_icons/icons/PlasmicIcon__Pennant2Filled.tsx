/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Pennant2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Pennant2FilledIcon(props: Pennant2FilledIconProps) {
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
          "M14 2a1 1 0 01.993.883L15 3v17h1a1 1 0 01.117 1.993L16 22h-4a1 1 0 01-.117-1.993L12 20h1v-7.351L4.594 8.914c-.752-.335-.79-1.365-.113-1.77l.113-.058L13 3.35V3a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Pennant2FilledIcon;
/* prettier-ignore-end */
