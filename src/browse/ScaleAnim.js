import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withDelay,
    withSpring
} from 'react-native-reanimated';

const DELAY = 500;

const springConfig = {
    damping: 12,
    mass: .8,
    stiffness: 100,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: .5
};

const ScaleAnim = ({
    children,
    customContainerStyle,
    delay = DELAY
}) => {

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = 1;
    }, []);

    const scaleAnim = useAnimatedStyle(() => {

        return {
            transform: [{
                scale: withDelay(delay,
                    withSpring(scale.value, springConfig))
            }]
        };
    });

    return (
        <Animated.View style={[customContainerStyle, scaleAnim]}>
            {children}
        </Animated.View>
    );
};

export default ScaleAnim;