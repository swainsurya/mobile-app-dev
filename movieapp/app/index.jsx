import MovieList from "@/components/MovieList";
import TrendingMovies from "@/components/TrendingMovies";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";


const ios = Platform.OS == 'ios';
export default function Index() {
  const [trending, setTrending] = useState([
    {
      id: 1,
      title: "Movie One",
      poster_path: "https://movies4uu.com/wp-content/uploads/2024/12/Gladiator-2-Hindi-2024-Hindi-Vegamovies.webp"
    },
    {
      id: 2,
      title: "Movie Two",
      poster_path: "https://movies4uu.com/wp-content/uploads/2024/12/Gladiator-2-Hindi-2024-Hindi-Vegamovies.webp"
    },
    {
      id: 3,
      title: "Movie Three",
      poster_path: "https://movies4uu.com/wp-content/uploads/2024/12/Gladiator-2-Hindi-2024-Hindi-Vegamovies.webp"
    }
  ]);

  const [upcoming, setUpcoming] = useState([1,2,3,4,5,6,7]);
  const [topRated, setTopRated] = useState([1,2,3,4,5]);

  return (
    <View className="flex-1 bg-neutral-800">
      {/* searchbar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-3xl font-bold text-white">
            <Text className="text-yellow-500">M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        {/* Trending movies carousel*/}
        <TrendingMovies data={trending} />

        {/* Upcoming movies */}
        <MovieList title={"Upcoming"} data={upcoming} />

        {/* Top Rated Movies */}
        <MovieList title={"Top Rated"} data={topRated} />
      </ScrollView>
    </View>
  );
}
