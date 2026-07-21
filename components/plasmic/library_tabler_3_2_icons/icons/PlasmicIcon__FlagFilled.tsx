/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagFilledIcon(props: FlagFilledIconProps) {
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
          "M4 5a1 1 0 01.3-.714 6 6 0 018.213-.176l.351.328a4 4 0 005.272 0l.249-.227c.61-.483 1.527-.097 1.61.676L20 5v9a1 1 0 01-.3.714 6 6 0 01-8.213.176l-.351-.328A4 4 0 006 14.448V21a1 1 0 01-1.993.117L4 21V5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FlagFilledIcon;
/* prettier-ignore-end */
