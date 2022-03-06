import React, { FunctionComponent } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

/*
 * Constants
 */

const GESTURE_RECOGNIZER_CONFIG = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

/*
 * Types
 */

interface SwipeDownWrapperProps {
  onSwipeDown: () => void;
  style: any;
}

/*
 * Swipe Down Wrapper Component
 */

export const SwipeDownWrapper: FunctionComponent<SwipeDownWrapperProps> = ({
  onSwipeDown,
  children,
  style,
}) => {
  return (
    <GestureRecognizer
      onSwipeDown={onSwipeDown}
      config={GESTURE_RECOGNIZER_CONFIG}
      style={style}>
      {children}
    </GestureRecognizer>
  );
};
