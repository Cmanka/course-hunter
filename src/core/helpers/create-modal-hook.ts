import { ModalInstance } from 'core/constants/modal-instance';
import { modalsState } from 'core/recoil/modal';
import { FC, memo } from 'react';
import { useSetRecoilState } from 'recoil';

export const createModalHook =
  <T extends {}>(instance: ModalInstance, component: (props: T) => FC<T>) =>
  () => {
    const setModals = useSetRecoilState(modalsState);

    const closeModal = () => {
      setModals((prev) => prev.filter(({ id }) => id !== instance));
    };

    const openModal = (props?: T) => {
      setModals((prev) => [
        ...prev,
        {
          id: instance,
          Component: memo(component({ ...props } as T)),
        },
      ]);
    };

    return [openModal, closeModal];
  };
