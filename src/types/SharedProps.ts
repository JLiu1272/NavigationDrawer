import {StyleProp} from 'react-native';

type ComponentProps = {
  style?: StyleProp<{}>;
};

export type OmitStyle<
  Props extends ComponentProps,
  ExtraProps extends string = '',
> = Omit<Props, 'style' | ExtraProps>;

export type DangerouslySetStyle<T> = {
  /**
   * @danger This is a migration escape hatch. It is not intended to be used normally
   */
  dangerouslySetStyle?: StyleProp<T>;
};
