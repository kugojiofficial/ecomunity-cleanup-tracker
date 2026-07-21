/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindmillFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindmillFilledIcon(props: WindmillFilledIconProps) {
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
          "M12 2c3.292 0 6 2.435 6 5.5 0 1.337-.515 2.554-1.369 3.5H21a1 1 0 011 1c0 3.292-2.435 6-5.5 6-1.336 0-2.553-.515-3.5-1.368V21a1 1 0 01-1 1c-3.292 0-6-2.435-6-5.5 0-1.336.515-2.553 1.368-3.5H3a1 1 0 01-1-1c0-3.292 2.435-6 5.5-6 1.337 0 2.554.515 3.5 1.369V3a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WindmillFilledIcon;
/* prettier-ignore-end */
