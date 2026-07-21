/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandFacebookFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandFacebookFilledIcon(props: BrandFacebookFilledIconProps) {
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
          "M18 2a1 1 0 01.993.883L19 3v4a1 1 0 01-.883.993L18 8h-3v1h3a1 1 0 01.991 1.131l-.02.112-1 4a1 1 0 01-.858.75L17 15h-2v6a1 1 0 01-.883.993L14 22h-4a1 1 0 01-.993-.883L9 21v-6H7a1 1 0 01-.993-.883L6 14v-4a1 1 0 01.883-.993L7 9h2V8a6 6 0 015.775-5.996L15 2h3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandFacebookFilledIcon;
/* prettier-ignore-end */
