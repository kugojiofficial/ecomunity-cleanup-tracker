/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SoupFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SoupFilledIcon(props: SoupFilledIconProps) {
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
          "M20 10a2 2 0 012 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V20a2 2 0 01-1.85 1.995L16 22H8a2 2 0 01-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 12.5V12a2 2 0 012-2h16zm-8.583-6.812a1 1 0 111.166 1.624c-.375.27-.593.706-.583 1.209a1.4 1.4 0 00.583 1.167 1 1 0 11-1.166 1.624A3.38 3.38 0 0110 6.021a3.4 3.4 0 011.417-2.833zm4 0a1 1 0 111.166 1.624c-.375.27-.593.706-.583 1.209a1.4 1.4 0 00.583 1.167 1 1 0 11-1.166 1.624A3.38 3.38 0 0114 6.021a3.4 3.4 0 011.417-2.833zm-8 0a1 1 0 111.166 1.624c-.375.27-.593.706-.583 1.209a1.4 1.4 0 00.583 1.167 1 1 0 11-1.166 1.624A3.38 3.38 0 016 6.021a3.4 3.4 0 011.417-2.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SoupFilledIcon;
/* prettier-ignore-end */
