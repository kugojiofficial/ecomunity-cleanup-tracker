import * as React from "react";
import {
  PlasmicCombobox,
  DefaultComboboxProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicCombobox";

export interface ComboboxProps extends DefaultComboboxProps {}

function Combobox(props: ComboboxProps) {

  return <PlasmicCombobox {...props} />;
}

export default Combobox;
