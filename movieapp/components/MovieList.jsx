import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const { height, width } = Dimensions.get("window");
const MovieList = ({title, data}) => {
    let movieName = "The singham Returns 2"
  return (
    <View className='mb-8 space-y-4'>
        <View className='mx-4 flex-row justify-between items-center'>
            <Text className='text-white text-xl'>{title}</Text>
            <TouchableOpacity>
                <Text className='text-yellow-500 font-bold'>See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                data.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                        >
                            <View className='space-y-1 mr-4'>
                                <Image
                                    source="https://movie4uz.wordpress.com/wp-content/uploads/2025/04/mv5byjhkzjm3zwytmjuxms00yzhlltkxzwytmzhkmzfhotq1njrkxkeyxkfqcgc40._v1_.jpg"
                                    className='rounded-3xl'
                                    style={{width: width*0.33, height:height*0.22}}
                                />
                                <Text className='text-neutral-300 ml-1'>
                                     {
                                        movieName.length>14?movieName.slice(0,14)+"...":movieName
                                     }
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}

export default MovieList