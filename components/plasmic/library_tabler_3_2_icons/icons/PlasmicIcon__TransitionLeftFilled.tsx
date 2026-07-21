/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitionLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitionLeftFilledIcon(props: TransitionLeftFilledIconProps) {
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
          "M6 2a1 1 0 010 2 2 2 0 00-2 2v12a2 2 0 001.85 1.995L6 20a1 1 0 010 2 4 4 0 01-4-4V6a4 4 0 014-4zm12 0a4 4 0 014 4v12a4 4 0 11-8 0v-5H9.415l1.292 1.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-3-3-.097-.112-.071-.11-.031-.062-.034-.081-.024-.076-.025-.118-.007-.058L6 11.982l.003-.064.017-.119.03-.111.044-.111.052-.098.067-.096.08-.09 3-3a1 1 0 011.414 1.414L9.415 11H14V6a4 4 0 014-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TransitionLeftFilledIcon;
/* prettier-ignore-end */
