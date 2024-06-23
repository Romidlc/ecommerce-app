import { View, Image } from "react-native";
import { homeStyles } from "../styles/customStyles";
import Heros from "../components/Heros";
import ProductSlider from "../components/ProductSlider";

const Home = ({ navigation }: any) => {
    return (
        <View style={homeStyles.homeContainer}>
            <Heros />
            <ProductSlider />
        </View>
    );
};

export default Home;
