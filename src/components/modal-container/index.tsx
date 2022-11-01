import { Layer } from 'grommet';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';

import { modalsState } from '@/shared/recoil/modal';

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
