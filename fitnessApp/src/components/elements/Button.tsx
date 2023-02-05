import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Insets,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import ProgressBar from './progressBar';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
interface Props extends Animated.AnimateProps<TouchableOpacityProps> {
  hitSlop?: Insets;
  label?: string | number | null;
  loading?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
  nativeID?: string;
  childrenRight?: React.ReactNode;
  childrenLeft?: React.ReactNode;
}
const Button: FunctionComponent<Props> = React.memo(
  ({
    onPress,
    label,
    loading,
    disabled,
    style,
    hitSlop,
    indicatorStyle,
    nativeID,
    labelStyle,
    childrenRight,
    childrenLeft,
  }) => {
    return (
      <AnimatedTouchableOpacity
        activeOpacity={0.85}
        onPress={onPress}
        disabled={disabled || loading}
        hitSlop={hitSlop || {top: 8, bottom: 8, left: 8, right: 8}}
        style={[styles.wrapper, style]}>
        {childrenLeft}
        {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
        {childrenRight}
        {loading && (
          <View
            style={[styles.wrapper, styles.disabled, indicatorStyle]}
            nativeID={nativeID}>
            <ProgressBar />
          </View>
        )}
        {disabled && <View style={[styles.disabled]} />}
      </AnimatedTouchableOpacity>
    );
  },
);

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  disabled: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});
