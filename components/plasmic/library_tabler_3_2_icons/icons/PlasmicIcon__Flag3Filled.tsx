/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Flag3FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Flag3FilledIcon(props: Flag3FilledIconProps) {
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
          "M19 4c.852 0 1.297.986.783 1.623l-.076.084L15.915 9.5l3.792 3.793c.603.602.22 1.614-.593 1.701L19 15H6v6a1 1 0 01-.883.993L5 22a1 1 0 01-.993-.883L4 21V5a1 1 0 01.883-.993L5 4h14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Flag3FilledIcon;
/* prettier-ignore-end */
