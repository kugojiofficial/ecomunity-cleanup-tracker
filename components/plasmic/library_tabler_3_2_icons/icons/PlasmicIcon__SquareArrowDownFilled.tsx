/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareArrowDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareArrowDownFilledIcon(
  props: SquareArrowDownFilledIconProps
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5a1 1 0 00-1 1v5.585l-2.293-2.292-.094-.083a1 1 0 00-1.32 1.497l4 4 .094.083.092.064.098.052.11.044.112.03.126.017L12 17l.117-.007.149-.029.105-.035.113-.054.111-.071a.94.94 0 00.112-.097l4-4 .083-.094a1 1 0 00-.083-1.32l-.094-.083a1 1 0 00-1.32.083L13 13.585V8l-.007-.117A1 1 0 0012 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareArrowDownFilledIcon;
/* prettier-ignore-end */
