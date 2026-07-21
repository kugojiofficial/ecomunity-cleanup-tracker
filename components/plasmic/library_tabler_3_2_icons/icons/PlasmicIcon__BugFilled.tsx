/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BugFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BugFilledIcon(props: BugFilledIconProps) {
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
          "M12 4a4 4 0 013.995 3.8L16 8a1 1 0 01.428.096l3.033-1.938a1 1 0 111.078 1.684l-3.015 1.931c.276.712.437 1.464.476 2.227h3a1 1 0 010 2h-3v1c0 .515-.065 1.027-.195 1.525l2.708 1.616a1.002 1.002 0 01-.268 1.83.999.999 0 01-.758-.112l-2.514-1.501A6.001 6.001 0 0113 20.918V15a1 1 0 00-2 0v5.917a6.001 6.001 0 01-3.973-2.56L4.513 19.86a1 1 0 01-1.026-1.718l2.708-1.616A6.01 6.01 0 016 15v-1H3a1 1 0 010-2h3.001v-.055a7 7 0 01.474-2.173l-3.014-1.93a1 1 0 111.078-1.684l3.032 1.939.024-.012.068-.027.019-.005.016-.006.032-.008.04-.013.034-.007.034-.004.045-.008.015-.001.015-.002L8 8a4 4 0 014-4zm0 2a2 2 0 00-2 2h4a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BugFilledIcon;
/* prettier-ignore-end */
