/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FolderFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FolderFilledIcon(props: FolderFilledIconProps) {
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
          "M9 3a1 1 0 01.608.206l.1.087L12.414 6H19a3 3 0 012.995 2.824L22 9v8a3 3 0 01-2.824 2.995L19 20H5a3 3 0 01-2.995-2.824L2 17V6a3 3 0 012.824-2.995L5 3h4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FolderFilledIcon;
/* prettier-ignore-end */
