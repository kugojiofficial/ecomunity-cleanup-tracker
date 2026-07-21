import * as React from "react";
import {
  PlasmicModal,
  DefaultModalProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicModal";

export interface ModalProps extends DefaultModalProps {}

function Modal(props: ModalProps) {

  return <PlasmicModal {...props} />;
}

export default Modal;
