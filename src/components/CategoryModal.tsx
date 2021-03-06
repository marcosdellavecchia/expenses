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

import I18n from '../../i18n';
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
            <Text style={styles.categoryTitle}>{I18n.t('expenses')}</Text>
            <View style={styles.categoryTouchableContainer}>
              {categories
                .filter(category => category.type === EntryType.EXPENSE)
                .map((category, index) => (
                  <TouchableOpacity
                    style={styles.categoryItemsContainer}
                    key={index}
                    onPress={() => handleCategoryChange(category)}>
                    <Text style={styles.categoryItemsText}>
                      {category.icon}
                    </Text>
                    <Text style={styles.categoryItemsText} numberOfLines={1}>
                      {I18n.t(`categories.${category.label}`)}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>

            <Spacer size="xs" />

            <Text style={styles.categoryTitle}>{I18n.t('incomes')}</Text>
            <View style={styles.categoryTouchableContainer}>
              {categories
                .filter(category => category.type === EntryType.INCOME)
                .map((category, index) => (
                  <TouchableOpacity
                    style={styles.categoryItemsContainer}
                    key={index}
                    onPress={() => handleCategoryChange(category)}>
                    <Text style={styles.categoryItemsText}>
                      {category.icon}
                    </Text>
                    <Text style={styles.categoryItemsText} numberOfLines={1}>
                      {I18n.t(`categories.${category.label}`)}
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

/*
 * Styles
 */

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
    backgroundColor: Colors.ALMOST_BLACK,
  },
  categoryScrollView: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
  },
  categoryTouchableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  categoryItemsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 78,
    height: 60,
    margin: 5,
  },
  categoryItemsText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
    color: Colors.GRAY,
  },
  categoryTitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 8,
    color: Colors.DARK_GRAY,
    textTransform: 'uppercase',
  },
});
