/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BasketFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BasketFilledIcon(props: BasketFilledIconProps) {
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
          "M15.949 3.684L17.053 7H19a3 3 0 012.962 3.477l-1.252 7.131A4 4 0 0116.756 21H7.244a3.994 3.994 0 01-3.95-3.371l-1.258-7.173A3 3 0 015 7h1.945L8.05 3.684a1 1 0 011.898.632L9.053 7h5.893l-.895-2.684a1 1 0 011.898-.632zM12 11a3 3 0 00-2.995 2.824L9 14a3 3 0 103-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BasketFilledIcon;
/* prettier-ignore-end */
