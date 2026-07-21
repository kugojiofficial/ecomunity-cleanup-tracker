/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowAutofitContentFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowAutofitContentFilledIcon(
  props: ArrowAutofitContentFilledIconProps
) {
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
          "M6.707 3.293a1 1 0 01.083 1.32l-.083.094L5.415 6H10a1 1 0 01.117 1.993L10 8H5.415l1.292 1.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-3-3a1.007 1.007 0 01-.097-.112l-.071-.11-.054-.114-.035-.105-.025-.118-.007-.058L2 7l.003-.075.017-.126.03-.111.044-.111.052-.098.064-.092.083-.094 3-3a1 1 0 011.414 0zm11.906-.083l.094.083 3 3a.925.925 0 01.097.112l.071.11.054.114.035.105.03.148L22 7l-.003.075-.017.126-.03.111-.044.111-.052.098-.074.104-.073.082-3 3a1 1 0 01-1.497-1.32l.083-.094L18.585 8H14a1 1 0 01-.117-1.993L14 6h4.585l-1.292-1.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083zM18 13H6a3 3 0 00-3 3v2a3 3 0 003 3h12a3 3 0 003-3v-2a3 3 0 00-3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowAutofitContentFilledIcon;
/* prettier-ignore-end */
