import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    theme,
    gradientLargeOneColors,
    gradientLargeTwoColors,
    gradientSmallOneColors,
    gradientSmallTwoColors,
    gradientLastColors,
    searchButtonColors,
    selectedTabColors
} from '../theme';
import Button from './Button';
import LinearGradient from 'react-native-linear-gradient';
import ScaleAnim from './ScaleAnim';
import FadeIn from './FadeIn';

import Facebook from '../../assets/fb.svg';
import Google from '../../assets/google.svg';
import UIUX from '../../assets/screen.svg';
import Pen from '../../assets/pen.svg';

import Computer from '../../assets/computer.svg';
import MiniComputer from '../../assets/mini-computer.svg';
import StarEmpty from '../../assets/star-empty.svg';
import StarFull from '../../assets/star-full.svg';

import HomeIcon from '../../assets/home.svg';
import MoreIcon from '../../assets/more.svg';
import SuitcaseIcon from '../../assets/suitcase.svg';
import PieChartIcon from '../../assets/piechart.svg';
import UserIcon from '../../assets/user.svg';
import SearchIcon from '../../assets/search.svg';
import ArrowRightIcon from '../../assets/arrow-right.svg';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../utils';
import SlideUp from './SlideUp';


/**
 * For the sake of saving
 * time, almost all components are in
 * one file, here. But they
 * are defined separately and you can
 * pluck each one out into their own
 * module
 */
//FIXME: Refactor this!



const ART_ICON_SIZE = 40;

const TAB_ICON_SIZE = 22;

const ARROW_ICON_SIZE = 24;

const Tabs = ['home', 'more', 'suitcase', 'piechart', 'user'];

const Art = {
    'Facebook': <Facebook height={ART_ICON_SIZE} width={ART_ICON_SIZE} fill={theme.light} style={{ marginLeft: -6 }} />,
    'Google': <Google height={ART_ICON_SIZE} width={ART_ICON_SIZE} fill={theme.light} style={{ marginLeft: -3 }} />,
    'UIUX': <UIUX height={ART_ICON_SIZE} width={ART_ICON_SIZE} fill={theme.light} style={{ marginLeft: -3 }} />,
    'Pen': <Pen height={ART_ICON_SIZE} width={ART_ICON_SIZE} fill={theme.light} style={{ marginLeft: -3 }} />
};

const TabIcons = {
    'home': <HomeIcon height={TAB_ICON_SIZE} width={TAB_ICON_SIZE} fill={theme.light} />,
    'more': <MoreIcon height={TAB_ICON_SIZE} width={TAB_ICON_SIZE} fill={theme.light} />,
    'suitcase': <SuitcaseIcon height={TAB_ICON_SIZE} width={TAB_ICON_SIZE} fill={theme.light} />,
    'piechart': <PieChartIcon height={TAB_ICON_SIZE} width={TAB_ICON_SIZE} fill={theme.light} />,
    'user': <UserIcon height={TAB_ICON_SIZE} width={TAB_ICON_SIZE} fill={theme.light} />
};

const HeaderIcon = {
    'arrow-right': <ArrowRightIcon height={ARROW_ICON_SIZE} width={ARROW_ICON_SIZE} fill={theme.light} stroke={theme.light} />
};


const SCR_HEIGHT = Dimensions.get('window').height;


const Spacer = ({ size, horizontal = false }) => {
    const horizontalStyle = {
        width: size
    };
    const verticalStyle = {
        height: size
    };
    return (
        <View style={horizontal ? horizontalStyle : verticalStyle} />
    );
};

const SearchButton = () => (
    <Button onPress={() => { }}>
        <LinearGradient
            colors={searchButtonColors}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
            style={{
                padding: 8,
                alignSelf: 'flex-start',
                borderRadius: 99,
                marginTop: 16
            }}>
            <SearchIcon height={26} width={26} stroke={theme.light} />
        </LinearGradient>
    </Button>
);

const Header = () => {
    return (
        <FadeIn>
            <View style={styles.header}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '700',
                    color: theme.light,
                    alignSelf: 'center',
                    lineHeight: 32,
                }}>Hey Yasir!{'\n'}Find what you want</Text>
                <View style={styles.flexOne} />
                <SearchButton />
            </View>
        </FadeIn>
    );
};

const Column = ({ children }) => {
    return (
        <View style={styles.column}>
            {children}
        </View>
    );
};

const Title = ({ title }) => (
    <Text style={{
        marginTop: 10,
        color: theme.light,
        fontWeight: '700',
        fontSize: 20,
        marginRight: 30,
    }}>
        {title}
    </Text>
);

const Logo = ({ icon }) => {
    const Icon = icon ? Art[icon] : null;
    if (Icon) {
        return (
            <>
                {Icon}
            </>
        );
    }
    return (
        <View style={{
            height: 40,
            width: 40,
            backgroundColor: '#fff'
        }} />
    );
};

const Rating = ({ rating }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <StarFull
                height={14}
                width={14}
                fill={theme.light}
            />
            <Spacer size={7} horizontal />
            <Text style={{
                fontSize: 15,
                fontWeight: '700',
                color: theme.light,
            }}>
                {rating}
            </Text>
        </View>

    );
};

const Reviews = ({ reviewCount }) => {
    return (
        <Text style={{
            fontSize: 13,
            fontWeight: '300',
            color: theme.light
        }}>
            {reviewCount} review
        </Text>
    );
};

const SmallBoxView = ({
    content: {
        icon,
        title
    },
    colors
}) => {
    return (
        <Button>
            <LinearGradient
                start={{ x: 0.2, y: 0.2 }}
                colors={colors}
                style={styles.smallBoxView}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo {...{ icon }} />
                    <View style={styles.flexOe} />
                    {HeaderIcon['arrow-right']}
                </View>


                <Title
                    {...{ title }}
                />

            </LinearGradient>
        </Button>
    );
};

const LargeBoxView = ({
    content: {
        icon,
        title,
        rating,
        reviewCount
    },
    colors
}) => {

    return (
        <Button customContainerStyle={styles.flexOne}>
            <LinearGradient
                start={{ x: 0.0, y: 0.2 }}
                colors={colors}
                style={styles.largeBoxView}
            >
                <Logo {...{ icon }} />
                <Title
                    {...{ title }}
                />

                <View style={styles.flexOne} />

                <Rating
                    {...{ rating }}
                />
                <Spacer size={10} />
                <Reviews
                    {...{ reviewCount }}
                />
            </LinearGradient>
        </Button>
    );
};

const Categories = () => {
    return (
        <View style={styles.categoriesContainer}>
            <Column>

                <ScaleAnim customContainerStyle={styles.flexOne}>
                    <LargeBoxView
                        colors={gradientLargeOneColors}
                        content={{
                            icon: 'Facebook',
                            title: 'Facebook ads',
                            rating: 4.9,
                            reviewCount: 2495
                        }}
                    />
                </ScaleAnim>

                <Spacer size={14} />

                <ScaleAnim delay={550}>
                    <SmallBoxView
                        colors={gradientSmallTwoColors}
                        content={{
                            icon: 'Pen',
                            title: 'Art & draw illustration',
                        }}
                    />
                </ScaleAnim>

            </Column>
            <Spacer size={14} horizontal />
            <Column>
                <ScaleAnim delay={650}>
                    <SmallBoxView
                        colors={gradientSmallOneColors}
                        content={{
                            icon: 'UIUX',
                            title: 'UI/UX Design',
                        }}
                    />
                </ScaleAnim>

                <Spacer size={14} />

                <ScaleAnim delay={750} customContainerStyle={styles.flexOne}>
                    <LargeBoxView
                        colors={gradientLargeTwoColors}
                        content={{
                            icon: 'Google',
                            title: `Google\nads`,
                            rating: 4.8,
                            reviewCount: 230
                        }}
                    />
                </ScaleAnim>


            </Column>
        </View>
    );
};

const SectionTitle = ({ title }) => {
    return (
        <FadeIn>
            <View style={styles.sectionTitleContainer}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '700',
                    color: theme.text1
                }}>{title}</Text>
            </View>
        </FadeIn>
    );
};

const BestSection = () => {
    return (
        <Button>
            <ScaleAnim delay={850} customContainerStyle={{ height: 170, paddingHorizontal: 28 }}>
                <LinearGradient
                    colors={gradientLastColors}
                    start={{ x: 0.1, y: 0.1 }}
                    style={styles.bestSection}
                >
                    <View style={{ flex: 1.4, justifyContent: 'center' }}>
                        <Computer height={180} width={180} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: theme.light,
                            lineHeight: 21
                        }}>Website Design{'\n'}& Development</Text>


                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 12
                        }}>
                            <MiniComputer height={14} width={14} fill={theme.light} />
                            <Spacer size={10} horizontal />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '300',
                                color: theme.light
                            }}>Computer Website</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 12,
                        }}>
                            <StarFull width={10} height={10} fill={theme.star} />
                            <Spacer size={2} horizontal />

                            <StarFull width={10} height={10} fill={theme.star} />
                            <Spacer size={2} horizontal />

                            <StarFull width={10} height={10} fill={theme.star} />
                            <Spacer size={2} horizontal />

                            <StarFull width={10} height={10} fill={theme.star} />
                            <Spacer size={2} horizontal />

                            <StarEmpty width={10} height={10} stroke={theme.star} />
                            <Spacer size={8} horizontal />
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: '300',
                                    color: theme.light
                                }}
                            >264 Review</Text>

                        </View>


                        <Text style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: '#B0CEEE',
                            marginTop: 12
                        }}>$1250</Text>

                    </View>
                </LinearGradient>
            </ScaleAnim>
        </Button>
    );
};



const Footer = () => {
    const [selected, setSelected] = useState(2);

    const getTabStyle = (index) => {
        if (selected === index) {
            return selectedTabColors;
        }
        return ['transparent', 'transparent', 'transparent'];
    };

    return (
        <SlideUp>
            <View style={styles.footer}>
                {Tabs.map((tab, index) => {
                    return (
                        <TouchableOpacity key={tab}>
                            <LinearGradient
                                colors={getTabStyle(index)}
                                style={{
                                    padding: 14,
                                    borderRadius: 99
                                }}>
                                {TabIcons[tab]}
                            </LinearGradient>
                        </TouchableOpacity>

                    );
                })}
            </View>
        </SlideUp>
    );
};

const Screen = () => {
    return (
        <View style={styles.flexOne}>
            <Header />

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}>
                <Spacer size={20} />

                <Categories />

                <Spacer size={20} />

                <SectionTitle
                    title='Best Services'
                />

                <Spacer size={20} />

                <BestSection />


            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        height: HEADER_HEIGHT,
        paddingHorizontal: 28,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        width: '48%',
        marginTop: 16,
        borderRadius: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        height: SCR_HEIGHT * .4,
        borderRadius: 20,
        paddingHorizontal: 28,
    },
    column: {
        flex: 1,
    },
    smallBoxView: {
        height: 150,
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 26,
        backgroundColor: theme.box,
        borderColor: theme.light
    },
    largeBoxView: {
        flex: 1,
        padding: 20,
        borderRadius: 26,
        backgroundColor: theme.box,
        borderColor: theme.light
    },
    sectionTitleContainer: {
        height: 42,
        borderColor: theme.light,
        borderRadius: 20,
        justifyContent: 'center',
        paddingHorizontal: 28,
    },
    bestSection: {
        height: 180,
        flexDirection: 'row',
        backgroundColor: theme.box,
        borderColor: theme.light,
        borderRadius: 22,
        padding: 10
    },
    footer: {
        height: FOOTER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: theme.border,
        paddingHorizontal: 10
    }
});

export default Screen;
