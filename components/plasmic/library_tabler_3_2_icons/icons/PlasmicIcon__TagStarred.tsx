/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TagStarredIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TagStarredIcon(props: TagStarredIconProps) {
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
        d={"M6.5 7.5a1 1 0 102 0 1 1 0 00-2 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 6v5.172a2 2 0 00.586 1.414l7.71 7.71a2.41 2.41 0 003.408 0l5.592-5.592a2.41 2.41 0 000-3.408l-7.71-7.71A2 2 0 0011.172 3H6a3 3 0 00-3 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.5 13.847L11 15l.532-1.857L10 12h1.902l.598-1.8.598 1.8H15l-1.532 1.143L14 15l-1.5-1.153z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TagStarredIcon;
/* prettier-ignore-end */
