import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}
interface inputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

// https://stackoverflow.com/questions/50263658/forwardref-error-with-typescript-and-react-native

const Input: React.forwardRef<InputRef, InputProps> = ({
  name,
  icon,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);

  const {
 registerField, defaultValue = '', fieldName, error
} = useField(name);
  const inputValueRef = useRef<inputValueReference>({ value: defaultValue });

  useImperativeHandle();

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark" // Only IOS
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={value => {
          // Essa prop já vem no formato string
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
