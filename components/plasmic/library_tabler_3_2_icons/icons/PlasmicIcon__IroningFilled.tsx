/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IroningFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IroningFilledIcon(props: IroningFilledIconProps) {
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
          "M16.459 5a4 4 0 013.945 3.343l.577 3.464.81 4.865A2 2 0 0119.82 19H3a1 1 0 01-1-1 8 8 0 018-8h8.652l-.22-1.329a2 2 0 00-1.811-1.665L16.459 7H9a1 1 0 010-2h7.459z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IroningFilledIcon;
/* prettier-ignore-end */
