/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarHalfFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarHalfFilledIcon(props: StarHalfFilledIconProps) {
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
          "M12 1a.993.993 0 01.823.443l.067.116 2.852 5.781 6.38.925c.741.108 1.08.94.703 1.526l-.07.095-.078.086-4.624 4.499 1.09 6.355a1 1 0 01-1.249 1.135l-.101-.035-.101-.046-5.693-3-5.706 3c-.105.055-.212.09-.32.106l-.106.01a1.002 1.002 0 01-1.038-1.06l.013-.11 1.09-6.355-4.623-4.5a1.001 1.001 0 01.328-1.647l.113-.036.114-.023 6.379-.925 2.853-5.78A.968.968 0 0112 1zm0 3.274V16.75c.08 0 .16.01.239.029l.115.036.112.05 4.363 2.299-.836-4.873a1 1 0 01.136-.696l.07-.099.082-.09 3.546-3.453-4.891-.708a1 1 0 01-.62-.344l-.073-.097-.06-.106L12 4.274z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarHalfFilledIcon;
/* prettier-ignore-end */
