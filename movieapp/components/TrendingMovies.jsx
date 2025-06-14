import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { height, width } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                loop
                width={width}
                height={width}
                data={data}
                autoPlay
                autoPlayInterval={1000}
                scrollAnimationDuration={1000}
                style={{display:"flex", alignItems:"center"}}
                renderItem={({ item }) => (
                    <MovieCard item={item} />
                )}
            />

        </View>
    );
};

const MovieCard = ({ item }) => {
    return (
        <Link href={{
            pathname: "/MovieScreen",
            params: {name: item.title}
        }} className='flex items-center justify-around w-full'>
            <Image
                source="https://movie4uz.wordpress.com/wp-content/uploads/2025/04/mv5byjhkzjm3zwytmjuxms00yzhlltkxzwytmzhkmzfhotq1njrkxkeyxkfqcgc40._v1_.jpg"
                style={{
                    width: width*0.7,
                    height: width
                }}
                contentFit='cover'
                className='rounded-3xl'
            />
        </Link>
    );
};

export default TrendingMovies;
