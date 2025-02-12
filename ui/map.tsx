import { MapInterface } from "@/interfaces/MapInterface";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Map: React.FC<{
  location: MapInterface;
  region: MapInterface;
  onPress?: (e: any) => void;
  showUserLocation?: boolean;
  onChangeRegion?: (region: MapInterface) => void;
}> = ({
  location,
  region,
  onPress,
  onChangeRegion,
  showUserLocation = false,
}) => {
  return (
    <MapView
      style={{
        flex: 1,
      }}
      region={region}
      initialRegion={location}
      onPress={onPress}
      showsUserLocation={showUserLocation}
      onRegionChangeComplete={onChangeRegion}
    >
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
};

export default Map;
