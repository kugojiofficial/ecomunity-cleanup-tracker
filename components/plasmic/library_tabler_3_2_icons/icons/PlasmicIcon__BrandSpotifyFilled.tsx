/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSpotifyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSpotifyFilledIcon(props: BrandSpotifyFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-2.168 11.605c-1.285-1.927-4.354-2.132-6.387-.777a1 1 0 101.11 1.664c1.195-.797 3.014-.675 3.613.223a1 1 0 101.664-1.11zM16.1 11.7c-2.469-1.852-5.895-2.187-8.608-.589a1 1 0 001.016 1.724c1.986-1.171 4.544-.92 6.392.465a1 1 0 101.2-1.6zm1.43-3.048C13.853 6.354 9.764 6.5 6.553 8.106a1 1 0 00.894 1.788c2.635-1.317 5.997-1.437 9.023.454a1 1 0 101.06-1.696z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandSpotifyFilledIcon;
/* prettier-ignore-end */
