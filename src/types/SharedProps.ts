import {StyleProp} from 'react-native';

export type ComponentStyleProps = {
  style?: StyleProp<{}>;
};

export type OmitStyle<
  Props extends ComponentStyleProps,
  ExtraProps extends string = '',
> = Omit<Props, 'style' | ExtraProps>;

export type DangerouslySetStyle<T> = {
  /**
   * @danger This is a migration escape hatch. It is not intended to be used normally
   */
  dangerouslySetStyle?: StyleProp<T>;
};
