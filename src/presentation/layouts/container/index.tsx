import React, { useCallback, useMemo } from 'react';
import { Button, Div, DivProps, Icon } from 'react-native-magnus';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

type ContainerProps = {
  customContainerProps?: DivProps;
  shouldDisplayNavigationBackArrow?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  customContainerProps = {},
  shouldDisplayNavigationBackArrow,
} = {}) => {
  const navigator = useNavigation();

  const statusBarHeight = useMemo(() => {
    return Constants.statusBarHeight;
  }, []);

  const handleGoBack = useCallback(() => {
    if (navigator.canGoBack()) {
      navigator.goBack();
    }
  }, [navigator]);

  return (
    <Div bg="white" flex={1} p={16} mt={statusBarHeight}>
      {shouldDisplayNavigationBackArrow && (
        <Div justifyContent="flex-start" alignItems="flex-start">
          <TouchableOpacity onPress={() => handleGoBack()}>
            <Icon name="chevron-left" fontFamily="Entypo" color="black" />
          </TouchableOpacity>
        </Div>
      )}

      <Div bg="white" flex={1} {...customContainerProps}>
        {children}
      </Div>
    </Div>
  );
};

Container.defaultProps = {
  customContainerProps: {},
  shouldDisplayNavigationBackArrow: false,
};

export default Container;
