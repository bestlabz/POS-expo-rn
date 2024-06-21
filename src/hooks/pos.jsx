import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/slice/Cart";
import { addModal } from "../redux/slice/ModalData";

const pos = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setselectedCategory] = useState("All");
  const [filterDatas, setFilterDatas] = useState([]);


  const { tableBodyData } = useSelector((state) => state.items);
  const { cartItem } = useSelector((state) => state.cart);

  useEffect(() => {
    if (selectedCategory === "All") {
      return setFilterDatas(tableBodyData);
    } else {
      const filter = tableBodyData.filter(
        (item) => item.category === selectedCategory
      );
      return setFilterDatas(filter);
    }
  }, [selectedCategory]);

  const categoryArray = [
    "All",
    "Snacks",
    "Rice",
    "Beverages",
    "Appetizers",
    "Thali",
    "Desserts",
  ];

  const toggleModal = ({ category, food_id }) => {
    const filterData = tableBodyData
      .filter((item) => item?.category === category)[0]
      ?.itemsData?.filter((items) => items?.food_id === food_id);

    dispatch(addCart({ category, items: filterData }));
  };

  const openModal = ({ category, food_id }) => {
    const filterData = cartItem
      .filter((item) => item?.category === category)[0]
      ?.itemsData?.filter((items) => items?.food_id === food_id)[0];
      console.log('filterData', filterData);
    dispatch(addModal({items: filterData}));
    setModalOpen(true)
  };

  const handleClickCategort = (e) => {
    setselectedCategory(e);
  };

  const closeModal = () => {
    setModalOpen(false)

  }

  return {
    toggleModal,
    modalOpen,
    categoryArray,
    handleClickCategort,
    selectedCategory,
    filterDatas,
    openModal,
    closeModal
  };
};

export default pos;
