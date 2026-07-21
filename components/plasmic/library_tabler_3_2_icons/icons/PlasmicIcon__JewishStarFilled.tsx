/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JewishStarFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JewishStarFilledIcon(props: JewishStarFilledIconProps) {
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
          "M8.433 6H3l-.114.006a1 1 0 00-.743 1.508L4.833 12l-2.69 4.486-.054.1A1 1 0 003 18h5.434l2.709 4.514.074.108a1 1 0 001.64-.108L15.565 18H21l.114-.006a1 1 0 00.743-1.508L19.166 12l2.691-4.486.054-.1A1 1 0 0021 6h-5.434l-2.709-4.514a1 1 0 00-1.714 0L8.433 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JewishStarFilledIcon;
/* prettier-ignore-end */
