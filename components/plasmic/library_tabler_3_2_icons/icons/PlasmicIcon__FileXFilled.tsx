/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileXFilledIcon(props: FileXFilledIconProps) {
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
          "M12 2l.117.007a1 1 0 01.876.876L13 3v4l.005.15a2 2 0 001.838 1.844L15 9h4l.117.007a1 1 0 01.876.876L20 10v9a3 3 0 01-2.824 2.995L17 22H7a3 3 0 01-2.995-2.824L4 19V5a3 3 0 012.824-2.995L7 2h5zm-1.489 9.14a1 1 0 00-1.301 1.473l.083.094L10.585 14l-1.292 1.293-.083.094a1 1 0 001.403 1.403l.094-.083L12 15.415l1.293 1.292.094.083a1 1 0 001.403-1.403l-.083-.094L13.415 14l1.292-1.293.083-.094a1 1 0 00-1.403-1.403l-.094.083L12 12.585l-1.293-1.292-.094-.083-.102-.07z"
        }
        fill={"currentColor"}
      ></path>

      <path d={"M19 7h-4l-.001-4.001L19 7z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default FileXFilledIcon;
/* prettier-ignore-end */
