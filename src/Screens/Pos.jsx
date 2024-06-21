import { useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import { menuItems } from "../constants";
// import SelectedFoodItem from './SelectedFoodItem';

//Hooks
import PopFunction from "../hooks/pos";
import ModalPage from "../components/properties/ModalPage";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const pos = () => {
  const navigation = useNavigation();

  const {
    modalOpen,
    toggleModal,
    categoryArray,
    selectedCategory,
    handleClickCategort,
    filterDatas,
    openModal,
    closeModal
  } = PopFunction();

  const { cartItem } = useSelector((state) => state.cart);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    StatusBar.setHidden(true);
  }, []);

  const subTotal = () => {
    const total = cartItem?.map((item) => item?.itemsData)
      .flatMap(items => items).map(p => parseFloat(p?.price))  // Extract the price from each item and convert it to a number
      .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);  // Sum up all the prices
  
    return Math.round(total) // Return the calculated subtotal
  };

  const total = () => {
    const totalAmount = subTotal() + 2

    return totalAmount // Return the calculated;

  }
  return (
    <SafeAreaView className="flex-1 flex-row pr-2">
      <View className="bg-sidebar py-2 mx-auto w-[20%] overflow-hidden">
        <View className="w-[95%] h-[15%] mx-auto rounded-md overflow-hidden border-b-[1px] border-white">
          <Image
            className=" object-contain"
            source={require("../../assets/logo-large-roti-ghar (250 x 100 px).png")}
          />
        </View>

        <View className="flex flex-col gap-3 mt-3">
          <View className="flex flex-row items-center gap-3 bg-white w-[80%] h-[15%] rounded-r-md ">
            <Image
              className=" w-[35px] h-[35px] object-contain"
              source={require("../../assets/activate-home.png")}
            />
            <Text className="text-sidebar_activate_text text-[18px]">POS</Text>
          </View>
          <View className="flex flex-row items-center gap-3 w-[80%] h-[15%] rounded-r-md ">
            <Image
              className=" w-[35px] h-[35px] object-contain"
              source={require("../../assets/deactivate-orders.png")}
            />
            <Text className="text-white text-[18px]">Orders</Text>
          </View>

          <View className="flex flex-row items-center gap-3 w-[80%] h-[15%] rounded-r-md ">
            <Image
              className=" w-[35px] h-[35px] object-contain"
              source={require("../../assets/deactivate-logout.png")}
            />
            <Text className="text-white text-[18px]">Logout</Text>
          </View>
        </View>
      </View>

      <View className="w-[50%] h-full ">
        <View className=" w-full h-[10%] p-[10px] flex-col items-center justify-center">
          <TextInput
            className="w-full border-[1px] border-secondary_text rounded-md p-[10px] mb-[10px]"
            placeholder="Search by item name"
          />
        </View>
        <View className="w-[97%] h-full rounded-md mx-auto border-[1px] border-secondary_text">
          <View className="h-[5%] ml-1 mr-3">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className=" w-full flex-row gap-10 items-center px-6">
                {categoryArray.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => handleClickCategort(item)}
                    key={index}
                    className={` transition-all duration-300 px-5 py-1 rounded-md  ${
                      item === selectedCategory
                        ? "bg-primary_color"
                        : "bg-transparent"
                    }`}
                  >
                    <Text
                      className={`${
                        item === selectedCategory ? "text-white" : "text-black"
                      }`}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full h-full flex-row flex-wrap items-center justify-start">
              {filterDatas.map((item) => (
                <>
                  {item?.itemsData.map((items, index) => (
                    <TouchableOpacity
                      onPress={() =>
                        toggleModal({
                          category: item.category,
                          food_id: items.food_id,
                        })
                      }
                      key={index}
                      className="relative m-[5px] border-[1px] w-[194px] h-[300px] overflow-hidden border-secondary_text rounded-md "
                    >
                      <Image
                        className="w-full h-full object-contain"
                        source={{ uri: items?.image }}
                      />
                      <Text className="absolute bottom-14 right-2 text-[24px] text-white font-semibold ">
                        {items?.name}
                      </Text>
                      <Text className="absolute bottom-4 right-2 text-[28px] text-white font-bold">
                        ${items?.price}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>

      <View className="w-[30%] h-[97.5%] shadow-lg shadow-secondary_text my-auto bg-white border-[1px] border-secondary_text rounded-md">
        <View className="w-full h-[59%] py-3">
          <ScrollView>
            {cartItem && cartItem.map((item) => (
              <>
                {item?.itemsData?.map((items, index) => (
                  <TouchableOpacity
                  onPress={() => openModal({food_id: items?.food_id, category: item?.category})}
                    key={index}
                    className="flex-row w-[95%] mx-auto mb-3 items-center justify-between px-4 py-2 border-b-[1px] border-secondary_text rounded-lg"
                  >
                    <Text className="text-[18px]">{items?.name}</Text>
                    <Text className="text-[18px] font-bold">
                      ${items?.price}
                    </Text>
                  </TouchableOpacity>
                ))}
              </>
            ))}
          </ScrollView>
        </View>
        <View className="w-full h-[40%] px-3">
          <View className="w-full flex-row items-center justify-between border-b-[1px] border-secondary_text py-2">
            <Text className="text-[22px] font-semibold">Add</Text>

            <TouchableOpacity className="bg-primary_color px-4 py-2 rounded-md">
              <Text className="text-white font-semibold text-[18px]">
                Discount
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between pt-6 pb-1">
            <Text className="text-[20px] font-medium">Subtotal</Text>
            <Text className="text-[18px] pr-3">${subTotal()}.00</Text>
          </View>

          <View className="flex-row justify-between py-1">
            <Text className="text-[20px] font-medium">Tax</Text>
            <Text className="text-[18px] pr-3">$2.00</Text>
          </View>

          <View className="flex-row justify-between py-1 border-b-[1px] pb-4 border-secondary_text">
            <Text className="text-[20px] font-medium">Discount</Text>
            <Text className="text-[18px] pr-3 text-text_danger">$0.00</Text>
          </View>

          <View className="flex-row justify-between py-3 border-b-[2px] pb-4 border-secondary_text mb-3">
            <Text className="text-[22px] font-bold">Total Price</Text>
            <Text className="text-[18px] pr-3 font-bold">${total()}.00</Text>
          </View>

          <View className=" flex-row items-center justify-center gap-6">
            <TouchableOpacity className="bg-secondary_color w-[100px] h-[50px] rounded-lg items-center justify-center">
              <Text className="text-white text-[20px] font-semibold">
                Clear
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-primary_color items-center justify-center flex-1 rounded-lg py-4">
              <Text className="text-white text-[20px] font-semibold">Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ModalPage show={modalOpen} hide={closeModal} />
    </SafeAreaView>
  );
};

export default pos;
