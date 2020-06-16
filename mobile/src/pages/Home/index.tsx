import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";

interface IBGEUFRresponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface Select {
  label: string;
  value: string;
}

const Home = () => {
  const navigation = useNavigation();

  const [ufs, setUfs] = useState<Select[]>([]);
  const [cities, setCities] = useState<Select[]>([]);
  const [selectedUf, setSelectedUf] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  /**
   * Stores UFs
   * API Documentation: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs
   */
  useEffect(() => {
    axios
      .get<IBGEUFRresponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        const ufsFormated = ufInitials.map((uf) => {
          return { key: uf, label: uf, value: uf };
        });
        setUfs(ufsFormated);
      });
  }, []);

  /**
   * Stores cities based on state
   * API Documentation: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosUFGet
   */
  useEffect(() => {
    if (selectedUf === "") {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const CityNames = response.data.map((city) => city.nome);
        const citiesFormated = CityNames.map((city) => {
          return { key: city, label: city, value: city };
        });
        setCities(citiesFormated);
      });
  }, [selectedUf]);

  function handleNavigateToPoints() {
    navigation.navigate("Points", {
      uf: selectedUf,
      city: selectedCity,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Text style={styles.title}>
              {" "}
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <RNPickerSelect
            onValueChange={(value) => setSelectedUf(value)}
            items={ufs}
            placeholder={{ label: "Selecione seu estado", value: null }}
          />

          <RNPickerSelect
            onValueChange={(value) => setSelectedCity(value)}
            items={cities}
            placeholder={{ label: "Selecione sua cidade", value: null }}
            disabled={!(cities.length > 0)}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#fff" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default Home;
