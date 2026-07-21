/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CubeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CubeOffIcon(props: CubeOffIconProps) {
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
          "M20.83 16.809c.11-.248.17-.52.17-.801V7.99a1.98 1.98 0 00-1-1.717l-7-4.008a2.016 2.016 0 00-2 0L7.988 3.99M5.441 5.448L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.016 2.016 0 002 0l5.544-3.174M12 22V12m2.532-1.462L20.73 6.96m-17.46 0L12 12M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CubeOffIcon;
/* prettier-ignore-end */
