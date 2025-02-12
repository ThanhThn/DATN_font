import { MapInterface } from "./MapInterface";

export interface LocationUnit {
  id: number;
  name: string;
}


export default interface LocationInterface {
  province: LocationUnit | null;
  setProvince: (province: LocationUnit | null) => void;

  district: LocationUnit | null;
  setDistrict: (district: LocationUnit | null) => void;

  ward: LocationUnit | null;
  setWard: (ward: LocationUnit | null) => void;

  street: string;
  setStreet: (street: string) => void;

  location: MapInterface | null;
}
