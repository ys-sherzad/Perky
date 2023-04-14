import React from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';

const springConfig = {
    damping: 8,
    mass: .5,
    stiffness: 120,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: .5
};

const Button = ({
    children,
    onPress,
    customContainerStyle
}) => {

    const scale = useSharedValue(1);

    const pressIn = () => {
        scale.value = 0.9;
    };

    const pressOut = () => {
        scale.value = 1;
    };

    const scaleAnim = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: withSpring(scale.value, springConfig)
            }]
        };
    });

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            onPressIn={pressIn}
            onPressOut={pressOut}
        >
            <Animated.View style={[
                customContainerStyle,
                scaleAnim
            ]}>
                {children}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};


const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    }
});

export default Button;
