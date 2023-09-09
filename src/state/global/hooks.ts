import { ModalType } from '@/config/constants';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '..';
import { closeModal, openModal } from './actions';

export function useModalState() {
  return useSelector<AppState, AppState['global']['modal']>(
    (state) => state.global.modal
  );
}

export function useModal() {
  const dispatch = useAppDispatch();
  const modal = useModalState();

  const open = useCallback(
    (type: ModalType, props?: any) => {
      dispatch(
        openModal({
          type,
          props,
        })
      );
    },
    [dispatch]
  );

  const close = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return {
    isOpenModal: modal.isOpen,
    type: modal.type,
    props: modal.props,
    openModal: open,
    closeModal: close,
  };
}
