import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withDelay
} from 'react-native-reanimated';
import { FOOTER_HEIGHT } from '../utils';

const DELAY = 400;

const timingConfig = {
    duration: 700,
    easing: Easing.bezier(0.22, 1, 0.36, 1)
};

const SlideUp = ({ children }) => {

    const offset = useSharedValue(FOOTER_HEIGHT + 30);

    useEffect(() => {
        offset.value = 0;
    }, []);

    const animateY = useAnimatedStyle(() => {
        const duration = DELAY;
        return {
            transform: [{
                translateY: withDelay(duration,
                    withTiming(offset.value, timingConfig))
            }]
        };
    });

    return (
        <Animated.View style={animateY}>
            {children}
        </Animated.View>
    );
};

export default SlideUp;