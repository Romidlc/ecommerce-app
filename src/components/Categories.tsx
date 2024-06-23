import { View, Text, Button, FlatList, Image } from "react-native";
// import { categories } from "../data/categories";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "./SearchBar";

const Categories = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [clicked, setClicked] = useState<boolean>(false);
    const [searchPhrase, setSearchPhrase] = useState<string>("");
    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerTitle: "Catalog",
            headerRight: () => <Button title="Notif" />,
            headerSearchBarOptions: {
                placeholder: "Search",
            },
        });
    }, [navigation]);

    const fetchData = async () => {
        const response = await fetch("https://randomuser.me/api/?results=100");
        const { results } = await response.json();
        setFilteredData(results);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <SearchBar clicked={clicked} setClicked={setClicked} setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} />
            <View>
                <FlatList
                    data={filteredData}
                    keyExtractor={({ item }) => Math.random().toString()}
                    renderItem={({ item }: any) => (
                        <View style={{ flexDirection: "row", flex: 1, alignItems: "center", margin: 10 }}>
                            <Image source={{ uri: item.picture.large }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 17, marginLeft: 10, fontWeight: "600" }}>{item.name.first}</Text>
                                <Text>{item.login.username}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default Categories;
