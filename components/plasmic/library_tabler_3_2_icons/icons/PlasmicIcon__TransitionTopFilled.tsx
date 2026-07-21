/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransitionTopFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransitionTopFilledIcon(props: TransitionTopFilledIconProps) {
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
          "M12 6l.081.003.12.017.111.03.111.044.098.052.104.074.082.073 3 3a1 1 0 11-1.414 1.414L13 9.415V14h5a4 4 0 110 8H6a4 4 0 110-8h5V9.415l-1.293 1.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l3-3 .112-.097.11-.071.062-.031.081-.034.076-.024.118-.025.058-.007L12 6zm6-4a4 4 0 014 4 1 1 0 01-1.993.117L20 6a2 2 0 00-2-2H6a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 014-4h12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TransitionTopFilledIcon;
/* prettier-ignore-end */
