/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MeatIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MeatIcon(props: MeatIconProps) {
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
          "M13.62 8.382l1.966-1.967A2 2 0 1119 5a2 2 0 11-1.413 3.414l-1.82 1.821m-9.863 8.361c2.733 2.734 5.9 4 7.07 2.829 1.172-1.172-.094-4.338-2.828-7.071-2.733-2.734-5.9-4-7.07-2.829-1.172 1.172.094 4.338 2.828 7.071zM7.5 16l1 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.975 21.425c3.905-3.906 4.855-9.288 2.121-12.021-2.733-2.734-8.115-1.784-12.02 2.121"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MeatIcon;
/* prettier-ignore-end */
