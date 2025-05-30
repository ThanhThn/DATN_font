import { constant } from "@/assets/constant";
import { env, formatDateForRequest, formatNumber } from "@/helper/helper";
import BoxInfo from "@/pages/Contract/BoxInfo";
import BoxPrice from "@/pages/Contract/Create/BoxPrice";
import ContractService from "@/services/Contract/ContractService";
import useUserStore from "@/store/user/useUserStore";
import Button from "@/ui/Button";
import Layout from "@/ui/layouts/Layout";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, View } from "react-native";

function CreateContract() {
  const { roomId, name, price, filter } = useLocalSearchParams();
  const { genders } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [nameCustom, setNameCustom] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [time, setTime] = useState(1);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [birthDay, setBirthDay] = useState<Date>(new Date());
  const [address, setAddress] = useState("");
  const [identityCard, setIdentityCard] = useState("");
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [depositAmount, setDepositAmount] = useState<string>(price as string);

  const [gender, setGender] = useState(genders[0]);

  const handleCreateContract = useCallback(async () => {
    setLoading(true);
    const data = await new ContractService().createContract({
      address,
      phone,
      date_of_birth: formatDateForRequest(birthDay),
      end_date: formatDateForRequest(endDate),
      full_name: nameCustom,
      deposit_amount: formatNumber(depositAmount, "float") || 0,
      gender: gender.value,
      identity_card: identityCard,
      lease_duration: time,
      quantity,
      room_id: roomId as string,
      start_date: formatDateForRequest(startDate),
      status: constant.contract.status.active,
    });

    if (!data || !("message" in data)) {
      router.back();
    }
    setLoading(false);
  }, [
    roomId,
    nameCustom,
    phone,
    address,
    quantity,
    time,
    startDate,
    birthDay,
    identityCard,
    endDate,
    depositAmount,
    gender,
  ]);

  useEffect(() => {
    if (!filter) return;

    const base64 = (filter as string).replace(/-/g, "+").replace(/_/g, "/");
    const data = JSON.parse(atob(base64));
    setTime(data.lease_duration);
    setQuantity(data.quantity);
  }, [filter]);

  return (
    <View className="flex-1">
      <Layout title={`Lập hợp đồng thuê phòng ${name && `- ${name}`} `}>
        <ScrollView className="px-3 flex-grow bg-white-50">
          <View className="gap-3 items-center py-3 flex-1">
            <BoxInfo
              {...{
                address,
                birthDay,
                endDate,
                gender,
                identityCard,
                phone,
                quantity,
                setAddress,
                setBirthDay,
                setEndDate,
                setGender,
                setIdentityCard,
                setPhone,
                setQuantity,
                setStartDate,
                setTime,
                time,
                startDate,
                name: nameCustom,
                setName: setNameCustom,
              }}
            />
            <BoxPrice
              priceRoom={price as string}
              {...{ depositAmount, setDepositAmount }}
            />
          </View>
        </ScrollView>
        <View className="p-3 flex bg-white-50">
          <View className="flex-row">
            <Button
              disabled={loading}
              loading={loading}
              onPress={handleCreateContract}
              className="flex-1 bg-lime-400 py-4"
            >
              <Text className="text-mineShaft-900 text-16 font-BeVietnamSemiBold">
                Hoàn thành
              </Text>
            </Button>
          </View>
        </View>
      </Layout>
    </View>
  );
}

export default CreateContract;
