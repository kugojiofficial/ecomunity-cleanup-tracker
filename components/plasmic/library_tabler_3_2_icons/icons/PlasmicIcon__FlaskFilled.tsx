/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlaskFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlaskFilledIcon(props: FlaskFilledIconProps) {
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
          "M15 2a1 1 0 110 2v4.826l3.932 10.814.034.077a1.7 1.7 0 01-.002 1.193l-.07.162a1.7 1.7 0 01-1.213.911L17.5 22h-11l-.181-.017a1.702 1.702 0 01-1.285-2.266l.039-.09L9 8.823V4a1 1 0 010-2h6zm-2 2h-2v4h2V4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FlaskFilledIcon;
/* prettier-ignore-end */
