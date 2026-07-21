/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitionBottomFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitionBottomFilledIcon(
  props: TransitionBottomFilledIconProps
) {
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
          "M21 17a1 1 0 011 1 4 4 0 01-4 4H6a4 4 0 01-4-4 1 1 0 112 0 2 2 0 002 2h12a2 2 0 001.995-1.85L20 18a1 1 0 011-1zm-9 1l-.082-.004-.119-.016-.111-.03-.111-.044-.098-.052-.096-.067-.09-.08-3-3a1 1 0 011.414-1.414L11 14.586V10H6a4 4 0 010-8h12a4 4 0 110 8h-5v4.583l1.293-1.29a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-3 3-.112.097-.11.071-.062.031-.081.034-.076.024-.149.03L12 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TransitionBottomFilledIcon;
/* prettier-ignore-end */
