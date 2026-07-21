/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadgeVoFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadgeVoFilledIcon(props: BadgeVoFilledIconProps) {
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
          "M19 4a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h14zm-3.5 4a2.5 2.5 0 00-2.5 2.5v3a2.5 2.5 0 005 0v-3A2.5 2.5 0 0015.5 8zm-4.184.051a1 1 0 00-1.265.633L9 11.838 7.949 8.684a1 1 0 00-1.898.632l2 6c.304.912 1.594.912 1.898 0l2-6a1.001 1.001 0 00-.633-1.265zM15.5 10a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadgeVoFilledIcon;
/* prettier-ignore-end */
