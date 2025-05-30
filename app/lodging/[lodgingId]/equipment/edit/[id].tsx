import Layout from "@/ui/layouts/Layout";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { BoxInfo } from "@/pages/Equipment/BoxInfo";
import Button from "@/ui/Button";
import * as FileSystem from "expo-file-system";
import { router, useLocalSearchParams } from "expo-router";
import { constant } from "@/assets/constant";
import { BoxRoom } from "@/ui/components/BoxRoom";
import { IRoom } from "@/interfaces/RoomInterface";
import { AssetInfo } from "expo-media-library";
import {
  ICreateEquipment,
  IEquipment,
  IUpdateEquipment,
} from "@/interfaces/EquipmentInterface";
import { EquipmentService } from "@/services/Equipment/EquipmentService";
import useToastStore from "@/store/toast/useToastStore";
import { IError } from "@/interfaces/ErrorInterface";
import { useEquipmentStore } from "@/store/equipment/useEquipmentStore";
import LodgingService from "@/services/Lodging/LodgingService";
import { useUI } from "@/hooks/useUI";
import ModalDelete from "@/ui/components/ModalDelete";
import LoadingScreen from "@/ui/layouts/LoadingScreen";

function UpdateEquipment() {
  const { lodgingId, id } = useLocalSearchParams();
  const {
    equipment,
    fetchEquipment,
    handleUpdateEquipment,
    loading,
    loadingProcess,
    name,
    quantity,
    rooms,
    selectPhotos,
    selectRooms,
    setName,
    setQuantity,
    setRooms,
    setSelectPhotos,
    setSelectRooms,
    setType,
    type,
  } = useEquipmentStore();
  const { addToast } = useToastStore();
  const { hideModal, showModal } = useUI();

  const [loadingDelete, setLoadingDelete] = useState(false);
  const deleteEquipment = useCallback(async () => {
    setLoadingDelete(true);

    try {
      const result = await new EquipmentService(lodgingId as string).delete(
        id as string
      );

      if (result.hasOwnProperty("message")) {
        addToast(constant.toast.type.error, "Xoá trang thiết bị thất bại.");
        return;
      }

      addToast(constant.toast.type.success, "Xoá trang thiết bị thành công!");

      hideModal();
      router.back();
    } catch (err) {
    } finally {
      setLoadingDelete(false);
    }
  }, [lodgingId, id]);

  useEffect(() => {
    fetchEquipment(id as string);
  }, [id]);

  const handleOpenConfirmDelete = useCallback(() => {
    showModal(
      <ModalDelete
        handleConfirmDelete={deleteEquipment}
        title="Xoá trang thiết bị"
        subTitle={`Bạn có chắc chắn muốn xoá trang thiết bị "${equipment?.name}" này?`}
      />
    );
  }, [deleteEquipment, lodgingId, id, equipment, loadingDelete]);

  return (
    <View className="flex-1">
      <Layout title="Cập nhật thiết bị">
      {loading && <LoadingScreen />}
        <ScrollView className="px-3 flex-grow bg-white-50">
          <View className="gap-3 items-center py-3 flex-1">
            <BoxInfo
              {...{
                photo: selectPhotos,
                setPhoto: setSelectPhotos,
                setType,
                type,
                name,
                setName,
                quantity,
                setQuantity,
              }}
            />
            {type === constant.equipment.type.private && (
              <BoxRoom
                {...{
                  rooms,
                  selectRooms,
                  setRooms,
                  setSelectRooms,
                  lodgingId: lodgingId as string,
                }}
              />
            )}
          </View>
        </ScrollView>
        <View className="p-3 flex bg-white-50">
          <View className="flex-row gap-2">
            <Button
              disabled={loadingProcess}
              onPress={handleOpenConfirmDelete}
              className="flex-1 bg-red-600 py-4"
            >
              <Text className="text-white-50 text-16 font-BeVietnamSemiBold">
                Xoá trang thiết bị
              </Text>
            </Button>
            <Button
              disabled={loadingProcess}
              loading={loadingProcess}
              onPress={() => handleUpdateEquipment(lodgingId as string)}
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

export default UpdateEquipment;
