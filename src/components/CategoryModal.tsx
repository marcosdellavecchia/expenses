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
import { EntryCategory, EntryType } from '../interfaces';
import { Spacer } from './Spacer';

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
  categories: EntryCategory[];
  onCategoryChange: (selectedCategory: EntryCategory) => void;
}

/*
 * Category Modal Component
 */

export const CategoryModal: FunctionComponent<CategoryModalProps> = ({
  isVisible,
  toggleModal,
  categories,
  onCategoryChange,
}) => {
  const handleCategoryChange = (category: EntryCategory) => {
    onCategoryChange(category);
    toggleModal();
  };

  return (
    <View>
      <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
        <View style={styles.screen}>
          <ScrollView style={styles.categoryScrollView}>
            <View>
              <Text style={styles.categoryItemsText}>--- Gastos---</Text>
              {categories
                .filter(category => category.type === EntryType.EXPENSE)
                .map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleCategoryChange(category)}>
                    <Text style={styles.categoryItemsText}>
                      {category.label}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
            <Spacer size="xs" />
            <View>
              <Text style={styles.categoryItemsText}>--- Ingresos ---</Text>
              {categories
                .filter(category => category.type === EntryType.INCOME)
                .map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleCategoryChange(category)}>
                    <Text style={styles.categoryItemsText}>
                      {category.label}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
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
    marginTop: 10,
    marginBottom: 10,
  },
  categoryItemsText: {
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
    color: `${Colors.GRAY}`,
  },
});
