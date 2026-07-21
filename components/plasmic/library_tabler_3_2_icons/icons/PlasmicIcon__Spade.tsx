/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpadeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpadeIcon(props: SpadeIconProps) {
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
          "M12 3l4.919 4.5c.61.587 1.177 1.177 1.703 1.771a5.527 5.527 0 01.264 6.979c-1.18 1.56-3.338 1.92-4.886.75v1l1 3H9l1-3v-1c-1.54 1.07-3.735.772-4.886-.75a5.527 5.527 0 01.264-6.979A30.884 30.884 0 017.081 7.5 1394.07 1394.07 0 0112 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SpadeIcon;
/* prettier-ignore-end */
