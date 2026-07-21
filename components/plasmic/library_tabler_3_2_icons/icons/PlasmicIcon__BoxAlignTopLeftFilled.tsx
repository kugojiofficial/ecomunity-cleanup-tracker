/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignTopLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignTopLeftFilledIcon(
  props: BoxAlignTopLeftFilledIconProps
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
          "M10 3H5a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V5a2 2 0 00-2-2zm5 0a1 1 0 01.117 1.993L14.99 5a1 1 0 01-.117-1.993L15 3zm5 0a1 1 0 01.117 1.993L19.99 5a1 1 0 01-.117-1.993L20 3zm0 5a1 1 0 01.117 1.993L19.99 10a1 1 0 01-.117-1.993L20 8zm0 6a1 1 0 01.117 1.993L19.99 16a1 1 0 01-.117-1.993L20 14zM4 14a1 1 0 01.117 1.993L3.99 16a1 1 0 01-.117-1.993L4 14zm16 5a1 1 0 01.117 1.993L19.99 21a1 1 0 01-.117-1.993L20 19zm-5 0a1 1 0 01.117 1.993L14.99 21a1 1 0 01-.117-1.993L15 19zm-6 0a1 1 0 01.117 1.993L8.99 21a1 1 0 01-.117-1.993L9 19zm-5 0a1 1 0 01.117 1.993L3.99 21a1 1 0 01-.117-1.993L4 19z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxAlignTopLeftFilledIcon;
/* prettier-ignore-end */
