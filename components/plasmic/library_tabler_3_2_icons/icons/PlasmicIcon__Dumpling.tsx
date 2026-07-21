/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DumplingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DumplingIcon(props: DumplingIconProps) {
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
          "M5.532 5.532a2.53 2.53 0 012.56-.623 2.532 2.532 0 014.604-.717 2.532 2.532 0 014.674 1.187 2.53 2.53 0 012.844.511l.358.358c1.384 1.385-.7 5.713-4.655 9.669-3.956 3.955-8.284 6.04-9.669 4.655l-.358-.358-.114-.122a2.53 2.53 0 01-.398-2.724 2.531 2.531 0 01-1.186-4.675A2.533 2.533 0 014.91 8.09a2.53 2.53 0 01.622-2.558z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DumplingIcon;
/* prettier-ignore-end */
