/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AwardFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AwardFilledIcon(props: AwardFilledIconProps) {
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
          "M19.496 13.983l1.966 3.406a1 1 0 01-.705 1.488l-.113.011-.112-.001-2.933-.19-1.303 2.636a1.001 1.001 0 01-1.608.26l-.082-.094-.072-.11-1.968-3.407a8.994 8.994 0 006.93-3.999zm-8.066 3.999L9.464 21.39a1 1 0 01-1.622.157l-.076-.1-.064-.114-1.304-2.635-2.931.19a1.001 1.001 0 01-1.022-1.29l.04-.107.05-.1 1.968-3.409a8.994 8.994 0 006.927 4zM12 2l.24.004A7 7 0 0119 9l-.003.193-.007.192-.018.245-.026.242-.024.178a6.982 6.982 0 01-.317 1.268l-.116.308-.153.348a7 7 0 01-12.688-.028l-.13-.297-.052-.133-.08-.217-.095-.294a6.988 6.988 0 01-.093-.344l-.06-.271-.049-.271-.02-.139-.039-.323-.024-.365L5 9a7 7 0 016.76-6.996L12 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AwardFilledIcon;
/* prettier-ignore-end */
