/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BowlFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BowlFilledIcon(props: BowlFilledIconProps) {
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
          "M20 7a2 2 0 012 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V17a2 2 0 01-1.85 1.995L16 19H8a2 2 0 01-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 9.5V9a2 2 0 012-2h16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BowlFilledIcon;
/* prettier-ignore-end */
