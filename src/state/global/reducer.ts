import { ModalType } from '@/config/constants';
import { createReducer } from '@reduxjs/toolkit';
import { closeModal, openModal } from './actions';

export interface GlobalState {
  modal: {
    isOpen: boolean;
    type?: ModalType;
    props?: any;
  };
}

const initialState: GlobalState = {
  modal: {
    isOpen: false,
    props: {},
  },
};

export default createReducer<GlobalState>(initialState, (builder) =>
  builder
    .addCase(openModal, (state, { payload }) => {
      state.modal = {
        type: payload.type,
        isOpen: true,
        props: payload.props,
      };
    })
    .addCase(closeModal, (state) => {
      state.modal = {
        isOpen: false,
        props: {},
      };
    })
);
