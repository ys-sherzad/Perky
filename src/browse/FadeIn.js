import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

const timingConfigOpacity = {
    duration: 1300,
    easing: Easing.inOut(Easing.cubic)
};

const timingConfigTranslate = {
    duration: 1200,
    easing: Easing.bezier(0.25, 1, 0.5, 1)
};

const FadeIn = ({ children }) => {

    const opacity = useSharedValue(0);
    const animateY = useSharedValue(-30);

    useEffect(() => {
        opacity.value = 1;
        animateY.value = 0;
    }, []);

    const animationStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(opacity.value, timingConfigOpacity),
            transform: [{
                translateY: withTiming(animateY.value, timingConfigTranslate)
            }]
        };
    });

    return (
        <Animated.View style={animationStyle}>
            {children}
        </Animated.View>
    );
};

export default FadeIn;