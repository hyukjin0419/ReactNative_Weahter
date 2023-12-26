/*location component 사용하여 사용자 위치 불러오기
1. import "expo-location"
2. 사용자에게 권한 요청하기
3. 권한이 생기면 현재 위치의 위도 경도 가져오기,
4. 현재 위치의 위도 경도를가지고 reverseGeo..함수를 사용하여 현재 도시를 가져와서 변수에 저장하기
*/
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  DimensionValue,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  //React JS 코드로 진행

  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    console.log(granted);
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
});
