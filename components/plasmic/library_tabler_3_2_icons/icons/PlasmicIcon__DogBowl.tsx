/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DogBowlIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DogBowlIcon(props: DogBowlIconProps) {
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
        d={"M10 15l5.586-5.585A2 2 0 1119 8a2 2 0 11-1.413 3.414L14 15"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 13L8.414 9.415A2 2 0 105 8a2 2 0 101.413 3.414L10 15m-7 5h18c-.175-1.671-.046-3.345-2-5H5c-1.333 1-2 2.667-2 5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DogBowlIcon;
/* prettier-ignore-end */
