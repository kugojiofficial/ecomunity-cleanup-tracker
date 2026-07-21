/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FilterFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FilterFilledIcon(props: FilterFilledIconProps) {
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
          "M20 3H4a1 1 0 00-1 1v2.227l.008.223a3 3 0 00.772 1.795L8 12.886V21a1 1 0 001.316.949l6-2 .108-.043A1 1 0 0016 19v-6.586l4.121-4.12A3 3 0 0021 6.171V4a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FilterFilledIcon;
/* prettier-ignore-end */
