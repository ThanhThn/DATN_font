import { reference } from "@/assets/reference";
import { IPermission } from "@/interfaces/Permission";
import BoxItem from "@/ui/box_item";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

function ManagementMenu({
  permissions,
}: {
  permissions: IPermission[];
}) {
  const route = useRouter();
  return (
    <Pressable className="p-2 gap-4">
      <Text className="font-BeVietnamMedium font-16">
        Danh mục quản lý nhà trọ
      </Text>
      <View className="flex-row gap-2 flex-wrap">
        {permissions.map((permission, index) => {
          return (
            <BoxItem
              onPress={() => route.push(permission?.end_point as any)}
              key={index}
              className="basis-1/4"
              title={
                reference.permission[permission.name as keyof typeof  reference.permission]
                  .name
              }
              description={permission.description ?? ""}
              icon={
                reference.permission[permission.name as keyof typeof  reference.permission]
                  .icon
              }
            />
          );
        })}
      </View>
    </Pressable>
  );
}

export default ManagementMenu;
