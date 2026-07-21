/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Flag2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Flag2FilledIcon(props: Flag2FilledIconProps) {
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
          "M19 4a1 1 0 01.993.883L20 5v9a1 1 0 01-.883.993L19 15H6v6a1 1 0 01-.883.993L5 22a1 1 0 01-.993-.883L4 21V5a1 1 0 01.883-.993L5 4h14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Flag2FilledIcon;
/* prettier-ignore-end */
