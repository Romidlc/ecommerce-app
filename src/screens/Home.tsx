import { View, Image, ScrollView } from "react-native";

import Heros from "../components/Heros";
import ProductSlider from "../components/ProductSlider";
import CategoriesSlider from "../components/CategoriesSlider";

const Home = () => {
    return (
        <View>
            <Heros />
            <CategoriesSlider />
            <ProductSlider />
        </View>
    );
};

export default Home;
