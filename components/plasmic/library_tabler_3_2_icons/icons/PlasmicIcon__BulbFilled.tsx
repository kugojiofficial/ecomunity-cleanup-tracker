/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BulbFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BulbFilledIcon(props: BulbFilledIconProps) {
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
          "M4 11a1 1 0 01.117 1.993L4 13H3a1 1 0 01-.117-1.993L3 11h1zm8-9a1 1 0 01.993.883L13 3v1a1 1 0 01-1.993.117L11 4V3a1 1 0 011-1zm9 9a1 1 0 01.117 1.993L21 13h-1a1 1 0 01-.117-1.993L20 11h1zM4.893 4.893a1 1 0 011.32-.083l.094.083.7.7a1 1 0 01-1.32 1.497l-.094-.083-.7-.7a1 1 0 010-1.414zm12.8 0a1 1 0 011.497 1.32l-.083.094-.7.7a1 1 0 01-1.497-1.32l.083-.094.7-.7zM14 18a1 1 0 011 1 3 3 0 01-6 0 1 1 0 01.883-.993L10 18h4zM12 6a6 6 0 013.6 10.8 1 1 0 01-.471.192L15 17H9a1 1 0 01-.6-.2A6 6 0 0112 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BulbFilledIcon;
/* prettier-ignore-end */
