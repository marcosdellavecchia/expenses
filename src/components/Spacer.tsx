import React, { FunctionComponent } from 'react';
import { ViewProps, View } from 'react-native';

/*
 * Constants
 */

const MEASURES = {
  xl: 64,
  l: 48,
  m: 24,
  s: 16,
  xs: 8,
};

/*
 * Types
 */

type SpacerSizes = keyof typeof MEASURES;

/*
 * Types
 */

interface SpacerProps extends ViewProps {
  size?: SpacerSizes;
}

/*
 * Spacer
 */

export const Spacer: FunctionComponent<SpacerProps> = ({ size = 'm' }) => {
  const spacerHeight = getSpacerHeight(size);
  return <View style={spacerHeight} />;
};

/*
 * Styles
 */

function getSpacerHeight(size: SpacerSizes) {
  const spacerHeight = MEASURES[size];

  return {
    height: spacerHeight,
  };
}
