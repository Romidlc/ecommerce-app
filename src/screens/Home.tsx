import { ScrollView } from "react-native";
import Heros from "../components/Heros";
import ProductSlider from "../components/ProductSlider";
import CategoriesSlider from "../components/CategoriesSlider";

const Home = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Heros />
            <CategoriesSlider />
            <ProductSlider />
        </ScrollView>
    );
};

export default Home;
