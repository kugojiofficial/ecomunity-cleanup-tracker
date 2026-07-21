/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RelationOneToOneFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RelationOneToOneFilledIcon(
  props: RelationOneToOneFilledIconProps
) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zM9 9H8a1 1 0 000 2v3a1 1 0 102 0v-4a1 1 0 00-1-1zm7 0h-1a1 1 0 100 2v3a1 1 0 002 0v-4a1 1 0 00-1-1zm-4 3.5a1 1 0 00-1 1v.01a1 1 0 002 0v-.01a1 1 0 00-1-1zm0-3a1 1 0 00-1 1v.01a1 1 0 002 0v-.01a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RelationOneToOneFilledIcon;
/* prettier-ignore-end */
