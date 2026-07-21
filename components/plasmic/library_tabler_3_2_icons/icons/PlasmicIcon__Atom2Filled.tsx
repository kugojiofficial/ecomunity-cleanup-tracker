/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Atom2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Atom2FilledIcon(props: Atom2FilledIconProps) {
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
          "M12 8a4 4 0 11-3.995 4.2L8 12l.005-.2A4 4 0 0112 8zm0 12a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L11 21a1 1 0 011-1zM3 8a1 1 0 01.993.883L4 9.01a1 1 0 01-1.993.117L2 9a1 1 0 011-1zm18 0a1 1 0 01.993.883L22 9.01a1 1 0 01-1.993.117L20 9a1 1 0 011-1zM2.89 12.006a1 1 0 011.104.884 8 8 0 004.444 6.311A1 1 0 117.562 21a10 10 0 01-5.556-7.89 1 1 0 01.884-1.103v-.001zM20.993 12l.117.006a.999.999 0 01.884 1.104 10 10 0 01-5.556 7.889 1.001 1.001 0 01-1.187-1.562 1 1 0 01.311-.236 8 8 0 004.444-6.31 1 1 0 01.987-.891zM5.567 4.226a10 10 0 0112.666 0 1.001 1.001 0 11-1.266 1.548 8 8 0 00-10.134 0 1 1 0 11-1.266-1.548z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Atom2FilledIcon;
/* prettier-ignore-end */
