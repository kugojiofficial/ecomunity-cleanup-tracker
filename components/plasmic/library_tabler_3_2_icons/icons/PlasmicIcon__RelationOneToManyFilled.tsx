/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RelationOneToManyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RelationOneToManyFilledIcon(
  props: RelationOneToManyFilledIconProps
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-4.2 5.4c-.577-.769-1.8-.361-1.8.6v4a1 1 0 001 1l.117-.007A1 1 0 0015 14v-1l1.2 1.6c.577.769 1.8.361 1.8-.6v-4a1 1 0 00-1-1l-.117.007A1 1 0 0016 10v1l-1.2-1.6zM8 9H7a1 1 0 000 2v3a1 1 0 102 0v-4a1 1 0 00-1-1zm3 3.5a1 1 0 00-1 1v.01a1 1 0 002 0v-.01a1 1 0 00-1-1zm0-3a1 1 0 00-1 1v.01a1 1 0 002 0v-.01a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RelationOneToManyFilledIcon;
/* prettier-ignore-end */
