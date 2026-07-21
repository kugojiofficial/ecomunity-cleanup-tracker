/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyframeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyframeFilledIcon(props: KeyframeFilledIconProps) {
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
          "M12 4a2.6 2.6 0 00-2 .957l-4.355 5.24a2.847 2.847 0 00-.007 3.598l4.368 5.256c.499.6 1.225.949 1.994.949a2.6 2.6 0 002-.957l4.355-5.24a2.847 2.847 0 00.007-3.598l-4.368-5.256A2.593 2.593 0 0012 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default KeyframeFilledIcon;
/* prettier-ignore-end */
