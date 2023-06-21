import { App, reactive } from "vue";

export type ModalProps = {
  show: boolean;
  title: string;
  content: string;
  confirmText: string;
  cancelText: string;
  confirm: () => void;
  cancel: () => void;
};

export const install = (app: App) => {
  const modalProps: ModalProps = reactive({
    show: false,
    title: "",
    content: "",
    confirmText: "",
    cancelText: "",
    confirm: () => {},
    cancel: () => {
      hideModal();
    },
  });

  function showModal() {
    modalProps.show = true;
  }

  function hideModal() {
    modalProps.show = false;
  }
  app.provide("modalProps", modalProps);
  app.provide("showModal", showModal);
  app.provide("hideModal", hideModal);
};
