import { modalsState } from 'core/recoil/modal';
import { Layer } from 'grommet/components/Layer';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';

const ModalContainer: FC = () => {
  const [modals, setModals] = useRecoilState(modalsState);

  if (!modals.length) {
    return null;
  }

  return (
    <>
      {modals.map(({ id, Component }) => {
        const handleClose = () => {
          setModals((prev) => prev.filter((current) => current.id !== id));
        };

        return (
          <Layer key={id} onEsc={handleClose} onClickOutside={handleClose}>
            <Component />
          </Layer>
        );
      })}
    </>
  );
};

export { ModalContainer };
