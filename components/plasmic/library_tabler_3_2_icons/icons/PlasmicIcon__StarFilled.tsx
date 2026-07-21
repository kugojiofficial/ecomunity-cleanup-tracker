/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarFilledIcon(props: StarFilledIconProps) {
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
          "M8.243 7.34l-6.38.925-.113.023a1 1 0 00-.44 1.684l4.622 4.499-1.09 6.355-.013.11a1 1 0 001.464.944l5.706-3 5.693 3 .1.046a1.001 1.001 0 001.352-1.1l-1.091-6.355 4.624-4.5.078-.085a1 1 0 00-.633-1.62l-6.38-.926-2.852-5.78a1 1 0 00-1.794 0L8.243 7.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarFilledIcon;
/* prettier-ignore-end */
