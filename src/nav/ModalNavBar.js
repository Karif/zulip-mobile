/* @flow strict-local */

import React, { PureComponent } from 'react';
import { View } from 'react-native';

import type { LocalizableText } from '../types';
import type { ThemeData } from '../styles';
import styles, { ThemeContext, NAVBAR_SIZE } from '../styles';
import Label from '../common/Label';
import NavBarBackButton from './NavBarBackButton';

type Props = $ReadOnly<{|
  canGoBack: boolean,
  title: LocalizableText,
|}>;

class ModalNavBar extends PureComponent<Props> {
  static contextType = ThemeContext;
  context: ThemeData;

  render() {
    const { canGoBack, title } = this.props;
    const textStyle = [
      styles.navTitle,
      canGoBack ? { marginRight: NAVBAR_SIZE } : { marginLeft: 16 },
    ];

    return (
      <View
        style={[
          {
            borderColor: 'hsla(0, 0%, 50%, 0.25)',
            flexDirection: 'row',
            height: NAVBAR_SIZE,
            alignItems: 'center',
            borderBottomWidth: 1,
            backgroundColor: this.context.backgroundColor,
          },
        ]}
      >
        {canGoBack && <NavBarBackButton />}
        <View style={styles.flexedLeftAlign}>
          <Label style={textStyle} text={title} numberOfLines={1} ellipsizeMode="tail" />
        </View>
      </View>
    );
  }
}

export default ModalNavBar;
