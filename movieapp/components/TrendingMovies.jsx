import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { height, width } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                loop
                width={width}
                height={width * 0.8}
                data={data}
                scrollAnimationDuration={800}
                style={{display:"flex", alignItems:"center"}}
                renderItem={({ item }) => (
                    <MovieCard item={item} />
                )}
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
            />

        </View>
    );
};

const MovieCard = ({ item }) => {
    return (
        <TouchableWithoutFeedback onPress={() => console.log("Pressed", item)}>
            <Image
                source="https://movie4uz.wordpress.com/wp-content/uploads/2025/04/mv5byjhkzjm3zwytmjuxms00yzhlltkxzwytmzhkmzfhotq1njrkxkeyxkfqcgc40._v1_.jpg"
                style={{
                    width: width * 0.6,
                    height: height * 0.4,
                    borderRadius: 30,
                }}
                contentFit="cover"
            />
        </TouchableWithoutFeedback>
    );
};

export default TrendingMovies;
