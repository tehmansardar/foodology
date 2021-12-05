import React from 'react';
import {Text, StyleSheet} from 'react-native';
const Typography = ({...props}) => {
  const {
    center,
    right,
    color,
    size,
    height,
    weight,
    spacing,
    h1,
    h2,
    h3,
    h4,
    paragraph,
    family,
    caption,
    medium,
    bold,
    light,
    italic,
    button,
    mt,
    mb,
    mr,
    ml,
    mh,
    mv,
    pt,
    pb,
    pl,
    pr,
    ph,
    pv,
    addStyle,
    style,
    children,
  } = props;

  const textStyles = [
    center && styles.center,
    right && styles.right,
    color && {color},
    size && {fontSize: size},
    height && {height},
    weight && {fontWeight: weight},
    spacing && {letterSpacing: spacing},
    family && {fontFamily: family},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    mr && {marginRight: mr},
    ml && {marginRight: ml},
    mh && {marginHorizontal: mh},
    mv && {marginVertical: mv},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    pr && {paddingRight: pr},
    pl && {paddingLeft: pl},
    ph && {paddingHorizontal: ph},
    pv && {paddingVertical: pv},
    addStyle,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
});

export default Typography;
