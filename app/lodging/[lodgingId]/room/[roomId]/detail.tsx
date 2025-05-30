import { BoxPaymentTimeBill } from "@/ui/components/BoxPaymentTimeBill";
import Layout from "@/ui/layouts/Layout";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "@/ui/Button";
import { Href, router, useLocalSearchParams, useRouter } from "expo-router";
import RoomService from "@/services/Room/RoomService";
import { constant } from "@/assets/constant";
import { BoxInfo } from "@/pages/Room/BoxInfo";
import LoadingAnimation from "@/ui/LoadingAnimation";
import { IRoom } from "@/interfaces/RoomInterface";
import BoxServiceDetail from "@/pages/Room/Detail/BoxServiceDetail";
import useLodgingsStore from "@/store/lodging/useLodgingsStore";
import { useUI } from "@/hooks/useUI";
import useToastStore from "@/store/toast/useToastStore";
import ModalDelete from "@/ui/components/ModalDelete";

function Detail() {
  const { lodgings } = useLodgingsStore();
  const { roomId, lodgingId } = useLocalSearchParams();
  const [paymentDate, setPaymentDate] = useState<number>(5);
  const [lateDays, setLateDays] = useState<number>(5);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [maxTenants, setMaxTenants] = useState(
    constant.room.max_tenants_default
  );
  const [services, setServices] = useState<IRoom["room_services"]>([]);
  const [loading, setLoading] = useState(false);
  const { hideModal, showModal } = useUI();
  const { addToast } = useToastStore();
  const roomService = new RoomService();

  const lodging = useMemo(() => {
    return lodgings?.find((item) => item.id == lodgingId) || null;
  }, [lodgings, lodgingId]);

  useEffect(() => {
    if (lodging) {
      setPaymentDate(lodging.payment_date ?? paymentDate);
      setLateDays(lodging.late_days ?? lateDays);
      setPrice(lodging.price_room_default?.toString() || price);
      setArea(lodging.area_room_default?.toString() || area);
    }
  }, [lodging]);

  const fetchDetailRoom = useCallback(async () => {
    setLoading(true);
    const data = await roomService.detail(roomId as string);
    if (!data || "message" in data) {
      router.back();
      return;
    }

    setName(data.room_code);
    data.price && setPrice(data.price.toString());
    data.area && setArea(data.area.toString());
    data.late_days && setLateDays(data.late_days);
    data.payment_date && setPaymentDate(data.payment_date);
    data.room_services &&
      setServices(data.room_services.filter((item) => item.is_enabled));
    setMaxTenants(data.max_tenants);
    setLoading(false);
  }, [roomId]);


    const deleteRoom = useCallback(async () => {
      try {
        roomService.lodgingId = lodgingId as string;
        const result = await roomService.delete(
          roomId as string
        );
  
        if (result.hasOwnProperty("message")) {
          addToast(constant.toast.type.error, "Xoá phòng thất bại.");
          return;
        }
  
        addToast(constant.toast.type.success, "Xoá phòng thành công!");
  
        hideModal();
        router.back();
      } catch (err) {
      }
    }, [lodgingId, roomId]);

    const handleOpenConfirmDelete = useCallback(() => {
      showModal(
        <ModalDelete
          handleConfirmDelete={deleteRoom}
          title="Xoá phòng"
          subTitle={`Bạn có chắc chắn muốn xoá phòng "${name}" này?`}
        />
      );
    }, [deleteRoom, lodgingId, roomId, name]);

  useEffect(() => {
    fetchDetailRoom();
  }, []);

  return (
    <View className="flex-1 bg-white-50">
      <Layout title="Chi tiết phòng trọ">
        {loading && (
          <View className="bg-mineShaft-950/70 z-10 absolute h-full w-full top-0 items-center justify-center">
            <LoadingAnimation className="text-white-50" />
          </View>
        )}
        <ScrollView className="px-3 flex-grow bg-white-50">
          <View className="gap-3 items-center py-3 flex-1">
            <BoxInfo
              disabled
              {...{
                name,
                price,
                setName,
                setPrice,
                area,
                maxTenants,
                setArea,
                setMaxTenants,
              }}
            />
            <BoxPaymentTimeBill
              disabled
              {...{ lateDays, paymentDate, setLateDays, setPaymentDate }}
            />
            <BoxServiceDetail services={services} />
          </View>
        </ScrollView>
        <View className="p-3 flex bg-white-50">
          <View className="flex-row gap-2">
            <Button
              onPress={handleOpenConfirmDelete}
              className="flex-1 bg-red-600 py-4"
            >
              <Text className="text-white-50 text-16 font-BeVietnamSemiBold">
                Xoá phòng
              </Text>
            </Button>
            <Button
              onPress={() =>
                router.push(`lodging/${lodgingId}/room/${roomId}/edit` as Href)
              }
              className="flex-1 bg-lime-400 py-4"
            >
              <Text className="text-mineShaft-900 text-16 font-BeVietnamSemiBold">
                Chỉnh sửa
              </Text>
            </Button>
          </View>
        </View>
      </Layout>
    </View>
  );
}

export default Detail;
