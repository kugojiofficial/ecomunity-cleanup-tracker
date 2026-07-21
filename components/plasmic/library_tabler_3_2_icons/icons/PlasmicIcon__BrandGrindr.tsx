/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandGrindrIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandGrindrIcon(props: BrandGrindrIconProps) {
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
          "M13 13.282c0 .492.784 1.718 2.102 1.718C16.42 15 18 14.034 18 12.938c0-.817-.932-.938-1.409-.938-.228 0-3.591.111-3.591 1.282z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 21c-2.984 0-6.471-2.721-6.63-2.982C3.24 14.528 3 4.315 3 4.315L4.446 3c2.499.39 5.023.617 7.554.68 2.53-.063 5.053-.29 7.554-.68L21 4.315s-.24 10.213-2.37 13.704C18.47 18.279 14.984 21 12 21z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 13.282C11 13.774 10.216 15 8.898 15 7.58 15 6 14.034 6 12.938c0-.817.932-.938 1.409-.938.228 0 3.591.111 3.591 1.282z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandGrindrIcon;
/* prettier-ignore-end */
