/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BowlSpoonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BowlSpoonFilledIcon(props: BowlSpoonFilledIconProps) {
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
          "M20 10a2 2 0 012 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V20a2 2 0 01-1.85 1.995L16 22H8a2 2 0 01-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 12.5V12a2 2 0 012-2h16zM8 2c1.71 0 3.237.787 3.785 2H20a1 1 0 110 2l-8.216.001C11.236 7.214 9.71 8 8 8 5.856 8 4 6.763 4 5s1.856-3 4-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BowlSpoonFilledIcon;
/* prettier-ignore-end */
