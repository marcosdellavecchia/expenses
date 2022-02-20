import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

import { Colors } from '../theme/colors';

/*
 * Constants
 */

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

/*
 * Types
 */

interface CategoryModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  categories: string[];
}

/*
 * Category Modal Component
 */

export const CategoryModal: FunctionComponent<CategoryModalProps> = ({
  isVisible,
  toggleModal,
  categories,
}) => {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        deviceWidth={SCREEN_WIDTH}
        deviceHeight={SCREEN_HEIGHT}
        onBackdropPress={toggleModal}>
        <View style={styles.screen}>
          <ScrollView style={styles.categoryScrollView}>
            {categories.map(category => (
              <Text style={styles.categoryItemsText}> {category} </Text>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: -10,
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.3,
    borderRadius: 10,
    backgroundColor: `${Colors.ALMOST_BLACK}`,
  },
  categoryScrollView: {
    padding: 10,
  },
  categoryItemsText: {
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
    color: `${Colors.GRAY}`,
  },
});
