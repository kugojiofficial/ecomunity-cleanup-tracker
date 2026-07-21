/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShirtFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShirtFilledIcon(props: ShirtFilledIconProps) {
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
          "M14.883 3.007L14.978 3l.112.004.113.017.113.03 6 2a1 1 0 01.677.833L22 6v5a1 1 0 01-.883.993L21 12h-2v7a2 2 0 01-1.85 1.995L17 21H7a2 2 0 01-1.995-1.85L5 19v-7H3a1 1 0 01-.993-.883L2 11V6a1 1 0 01.576-.906l.108-.043 6-2A1 1 0 0110 4a2 2 0 003.995.15l.009-.24.017-.113.037-.134.044-.103.05-.092.068-.093.069-.08c.056-.054.113-.1.175-.14l.096-.053.103-.044.108-.032.112-.019z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShirtFilledIcon;
/* prettier-ignore-end */
