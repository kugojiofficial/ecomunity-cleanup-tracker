/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedPlus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareRoundedPlus2Icon(props: SquareRoundedPlus2IconProps) {
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
          "M12.54 20.996C12.364 21 12.184 21 12 21c-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9c0 .185-.001.366-.004.544M16 19h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SquareRoundedPlus2Icon;
/* prettier-ignore-end */
