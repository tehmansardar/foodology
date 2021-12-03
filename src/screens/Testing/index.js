import React from 'react';
import {View, Text} from 'react-native';

import Block from '../../components/Block';

const Testing = () => {
  return (
    <View>
      <Block center middle>
        <Block center middle>
          <Text style={{color: '#000'}}>Testing</Text>
        </Block>
      </Block>
    </View>
  );
};

export default Testing;
