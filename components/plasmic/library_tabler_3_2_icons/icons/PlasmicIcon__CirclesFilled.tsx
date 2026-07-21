/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CirclesFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CirclesFilledIcon(props: CirclesFilledIconProps) {
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
          "M6.5 12a5 5 0 11-4.995 5.217L1.5 17l.005-.217A5 5 0 016.5 12zm11 0a5 5 0 11-4.995 5.217L12.5 17l.005-.217A5 5 0 0117.5 12zM12 2a5 5 0 11-4.995 5.217L7 7l.005-.217A5 5 0 0112 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CirclesFilledIcon;
/* prettier-ignore-end */
