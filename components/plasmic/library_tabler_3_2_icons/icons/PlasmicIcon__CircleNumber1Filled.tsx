/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNumber1FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNumber1FilledIcon(props: CircleNumber1FilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.994 5.886c-.083-.777-1.008-1.16-1.617-.67l-.084.077-2 2-.083.094a1 1 0 000 1.226l.083.094.094.083a1 1 0 001.226 0l.094-.083.293-.293V16l.007.117a1 1 0 001.986 0L13 16V8l-.006-.114z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber1FilledIcon;
/* prettier-ignore-end */
