/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiamondFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiamondFilledIcon(props: DiamondFilledIconProps) {
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
          "M18 4a1 1 0 01.783.378l.074.108 3 5a1.001 1.001 0 01-.032 1.078l-.08.103-8.53 9.533a1.7 1.7 0 01-1.215.51c-.4 0-.785-.14-1.11-.417l-.135-.126-8.5-9.5A1 1 0 012.083 9.6l.06-.115 3.013-5.022.064-.09a.982.982 0 01.155-.154l.089-.064.088-.05.05-.023.06-.025.109-.032.112-.02L6 4h12zM9.114 7.943a1 1 0 00-1.371.343l-.6 1-.06.116a1 1 0 00.177 1.07l2 2.2.09.088a1 1 0 001.323-.02l.087-.09a1 1 0 00-.02-1.323l-1.501-1.65.218-.363.055-.103a1 1 0 00-.398-1.268z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DiamondFilledIcon;
/* prettier-ignore-end */
