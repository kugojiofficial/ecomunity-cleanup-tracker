/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfinityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfinityIcon(props: InfinityIconProps) {
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
          "M12 12a9.998 9.998 0 01-2.172 2.828 4 4 0 110-5.656A9.999 9.999 0 0112 12zm0 0a9.999 9.999 0 012.172-2.828 4 4 0 110 5.656A9.998 9.998 0 0112 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default InfinityIcon;
/* prettier-ignore-end */
