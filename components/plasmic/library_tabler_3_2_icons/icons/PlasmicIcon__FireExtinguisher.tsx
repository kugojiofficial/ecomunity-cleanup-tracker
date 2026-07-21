/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FireExtinguisherIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FireExtinguisherIcon(props: FireExtinguisherIconProps) {
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
          "M12 7a4 4 0 014 4v9a1 1 0 01-1 1H9a1 1 0 01-1-1v-9a4 4 0 014-4zm-3 9h6m-3-9V4m4 1l-4-1 4-1m-4 1H9a3 3 0 00-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FireExtinguisherIcon;
/* prettier-ignore-end */
