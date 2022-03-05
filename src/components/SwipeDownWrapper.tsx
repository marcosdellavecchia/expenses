import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import { Colors } from '../theme/colors';

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
}

/*
 * Swipe Down Wrapper Component
 */

export const SwipeDownWrapper: FunctionComponent<SwipeDownWrapperProps> = ({
  onSwipeDown,
  children,
}) => {
  return (
    <GestureRecognizer
      onSwipeDown={onSwipeDown}
      config={GESTURE_RECOGNIZER_CONFIG}
      style={styles.screen}>
      {children}
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Colors.BLACK}`,
  },
});
