/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoneFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoneFilledIcon(props: BoneFilledIconProps) {
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
          "M15 2a4 4 0 013.881 3.03l.016.072.08.019a4 4 0 012.83 2.65l.057.193a4 4 0 01-5.847 4.51l-.047-.029-3.525 3.525.042.07a3.999 3.999 0 01.117 3.696l-.102.197a4 4 0 01-4.386 1.969 3.99 3.99 0 01-2.982-2.904l-.023-.095-.138-.033a4 4 0 01-2.82-2.783l-.05-.199a4 4 0 015.865-4.368l.068.04 3.524-3.524-.036-.061a4.001 4.001 0 01-.293-3.295l.079-.205a4 4 0 013.695-2.47l-.139.004.02-.003L15 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoneFilledIcon;
/* prettier-ignore-end */
