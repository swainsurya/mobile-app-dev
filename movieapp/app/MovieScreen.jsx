import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';

const MovieScreen = () => {
    const {name} = useLocalSearchParams();
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className='flex-1 bg-neutral-900'
    >
        {/* back bottom and poster */}
        <View className='w-full'>
            <SafeAreaView className='absolute z-20 w-full flex-row justify-between items-center px-4'>
                <TouchableOpacity className='rounded-xl p-1 bg-yellow-600' onPress={router.back()}>
                    <ChevronLeftIcon size={20} strokeWidth={2.5} color={"white"} />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    </ScrollView>
  )
}

export default MovieScreen