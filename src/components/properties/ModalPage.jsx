import {
  View,
  Text,
  Modal,
  StatusBar,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useSelector } from "react-redux";

const ModalPage = ({ show, hide, details }) => {
  const { modaldata } = useSelector((state) => state.modal);

  useLayoutEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setModalVisible(!hide);
      }}
    >
      <View className="w-full h-full items-center justify-center bg-[#00000024]">
        <View className="relative bg-white w-[90%] h-[85%] rounded-lg p-5 gap-2">
          <TouchableOpacity
            onPress={hide}
            className="absolute top-8 right-8 z-50"
          >
            <AntDesign name="close" size={40} color="gray" />
          </TouchableOpacity>

          <View className="flex-row h-[40%] w-[96%] gap-4 mt-2 border-b-[1px] border-secondary_text pb-4 mx-auto">
            <View className="rounded-md w-[25%] overflow-hidden">
              <Image
                className=" w-full h-full object-contain"
                source={{
                  uri: modaldata?.image,
                }}
              />
            </View>
            <View className="flex-1 px-6">
              <Text className="text-[28px] font-bold pb-6">
                {modaldata?.name}
              </Text>
              <Text className="w-[80%] text-[22px] font-medium text-secondary_text">
                {modaldata?.description}
              </Text>
            </View>
          </View>

          <View className="w-full h-[40%]">
            <View className="flex-row pt-2">
              <Text className="w-[30%] text-[24px] font-bold">Sub-items</Text>
              <Text className="w-[10%] text-[24px] font-bold">Extra</Text>
              <Text className="w-[10%] text-[24px] font-bold">No</Text>
              <Text className="w-[30%] text-[24px] font-bold">Sub-items</Text>
              <Text className="w-[10%] text-[24px] font-bold">Extra</Text>
              <Text className="w-[10%] text-[24px] font-bold">No</Text>
            </View>
            <ScrollView>
              <View className="flex-row flex-wrap pt-4 space-y-5">
                {modaldata?.subItem.map((item) => (
                  <>
                    <Text className="w-[30%] text-[22px] font-medium mb-5">
                      {item?.name}
                    </Text>
                    <View className="w-[10%] ">
                      <Checkbox className=" w-[30px] h-[30px] mb-5" />
                    </View>
                    <View className="w-[10%]">
                      <Checkbox className=" w-[30px] h-[30px] mb-5" />
                    </View>
                  </>
                ))}
              </View>
            </ScrollView>
          </View>

          <View className="w-full flex-row h-[18%]">
            <View className="w-[20%] h-full justify-center">
              <Text className="text-[26px] font-medium">Price:</Text>
              <Text className="text-[36px] font-bold">${modaldata?.price}</Text>
            </View>
            <View className=" w-[80%] flex-row items-center justify-end space-x-20 px-4">
              <TouchableOpacity className="w-[180px] rounded-lg py-4 items-center justify-center bg-secondary_color">
                <Text className="text-[22px] text-white">Notes</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-[180px] rounded-lg py-4 items-center justify-center bg-primary_color">
                <Text className="text-[22px] text-white">Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPage;
