import { AnimationProps } from 'framer-motion';

export const defaultModalAnimation: AnimationProps = {
  initial: {
    opacity: 0
  },

  animate: {
    opacity: 1
  },

  exit: {
    opacity: 0
  }
};
