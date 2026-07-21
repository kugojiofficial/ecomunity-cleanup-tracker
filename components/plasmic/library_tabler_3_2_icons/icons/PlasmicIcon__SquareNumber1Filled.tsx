/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareNumber1FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareNumber1FilledIcon(props: SquareNumber1FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zm-5.339 5.886c-.083-.777-1.008-1.16-1.617-.67l-.084.077-2 2-.083.094a1 1 0 000 1.226l.083.094.094.083a1 1 0 001.226 0l.094-.083.293-.293V16l.007.117a1 1 0 001.986 0L13 16V8l-.006-.114z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareNumber1FilledIcon;
/* prettier-ignore-end */
