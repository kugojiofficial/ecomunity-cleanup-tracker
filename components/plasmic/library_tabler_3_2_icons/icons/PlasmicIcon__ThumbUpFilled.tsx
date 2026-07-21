/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThumbUpFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThumbUpFilledIcon(props: ThumbUpFilledIconProps) {
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
          "M13 3a3 3 0 012.995 2.824L16 6v4h2a3 3 0 012.98 2.65l.015.174L21 13l-.02.196-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 01-.993-.883L8 20l.001-9.536a1 1 0 01.5-.865 2.998 2.998 0 001.492-2.397L10 7V6a3 3 0 013-3zm-8 7a1 1 0 01.993.883L6 11v9a1 1 0 01-.883.993L5 21H4a2 2 0 01-1.995-1.85L2 19v-7a2 2 0 011.85-1.995L4 10h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ThumbUpFilledIcon;
/* prettier-ignore-end */
