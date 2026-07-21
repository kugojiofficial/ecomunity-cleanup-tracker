/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleArrowDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleArrowDownFilledIcon(
  props: CircleArrowDownFilledIconProps
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM12 7a1 1 0 00-1 1v5.585l-2.293-2.292-.094-.083a1 1 0 00-1.32 1.497l4 4c.028.028.057.054.094.083l.092.064.098.052.081.034.113.034.112.02L12 17l.115-.007.114-.02.142-.044.113-.054.111-.071a.94.94 0 00.112-.097l4-4 .083-.094a1 1 0 00-1.497-1.32L13 13.584V8l-.007-.117A1 1 0 0012 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleArrowDownFilledIcon;
/* prettier-ignore-end */
