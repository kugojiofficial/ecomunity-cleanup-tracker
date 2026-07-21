/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackspaceFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackspaceFilledIcon(props: BackspaceFilledIconProps) {
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
          "M20 5a2 2 0 011.995 1.85L22 7v10a2 2 0 01-1.85 1.995L20 19H9a1 1 0 01-.608-.206l-.1-.087-5.037-5.04c-.809-.904-.847-2.25-.083-3.23l.12-.144 5-5a1 1 0 01.577-.284L9 5h11zm-7.489 4.14a1 1 0 00-1.301 1.473l.083.094L12.585 12l-1.292 1.293-.083.094a1 1 0 001.403 1.403l.094-.083L14 13.415l1.293 1.292.094.083a1 1 0 001.403-1.403l-.083-.094L15.415 12l1.292-1.293.083-.094a1 1 0 00-1.403-1.403l-.094.083L14 10.585l-1.293-1.292-.094-.083-.102-.07z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BackspaceFilledIcon;
/* prettier-ignore-end */
