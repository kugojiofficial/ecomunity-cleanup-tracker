/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BriefcaseFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BriefcaseFilledIcon(props: BriefcaseFilledIconProps) {
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
          "M22 13.478V18a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.522l.553.277a21 21 0 0018.897-.002l.55-.275zM14 2a3 3 0 013 3v1h2a3 3 0 013 3v2.242l-1.447.724a19 19 0 01-16.726.186l-.647-.32-1.18-.59V9a3 3 0 013-3h2V5a3 3 0 013-3h4zm-2 8a1 1 0 00-.926 1.383 1.002 1.002 0 001.304.548A1.002 1.002 0 0012 10zm2-6h-4a1 1 0 00-1 1v1h6V5a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BriefcaseFilledIcon;
/* prettier-ignore-end */
