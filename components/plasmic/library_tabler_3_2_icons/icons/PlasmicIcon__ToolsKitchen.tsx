/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToolsKitchenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToolsKitchenIcon(props: ToolsKitchenIconProps) {
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
          "M4 3h8l-1 9H5L4 3zm3 15h2v3H7v-3zM20 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 12v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ToolsKitchenIcon;
/* prettier-ignore-end */
