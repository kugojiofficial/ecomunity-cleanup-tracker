/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SectionFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SectionFilledIcon(props: SectionFilledIconProps) {
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
          "M20.01 19a1 1 0 01.117 1.993L20 21a1 1 0 01-.117-1.993L20.01 19zm-16 0a1 1 0 010 2 1 1 0 01-.127-1.993L4.01 19zm4 0a1 1 0 010 2 1 1 0 01-.127-1.993L8.01 19zm4 0a1 1 0 01.117 1.993L12 21a1 1 0 01-.117-1.993L12.01 19zm4 0a1 1 0 01.117 1.993L16 21a1 1 0 01-.117-1.993L16.01 19zm4-16a1 1 0 01.117 1.993L20 5a1 1 0 01-.117-1.993L20.01 3zm-16 0a1 1 0 010 2 1 1 0 01-.127-1.993L4.01 3zm4 0a1 1 0 010 2 1 1 0 01-.127-1.993L8.01 3zm4 0a1 1 0 01.117 1.993L12 5a1 1 0 01-.117-1.993L12.01 3zM16 3a1 1 0 01.926 1.383A1 1 0 0115 4.01c0-.562.448-1.01 1-1.01zm3 4a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SectionFilledIcon;
/* prettier-ignore-end */
