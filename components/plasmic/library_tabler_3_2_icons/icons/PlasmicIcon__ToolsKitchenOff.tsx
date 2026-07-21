/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToolsKitchenOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToolsKitchenOffIcon(props: ToolsKitchenOffIconProps) {
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
          "M7 3h5l-.5 4.5m-.4 3.595L11 12H5l-.875-7.874M7 18h2v3H7v-3zm8.225-6.784C15.645 8.698 16.814 6.039 20 3v12h-1m1 0v1m0 4v1h-1v-2M8 12v6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ToolsKitchenOffIcon;
/* prettier-ignore-end */
