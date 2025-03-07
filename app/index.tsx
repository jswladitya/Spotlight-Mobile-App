import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React native</Text>

      {/* --> touchableOpacity gives you the popping up feedback card */}
      {/* <TouchableOpacity onPress={() => alert("You Touched")}>
        <Text>Press Me</Text>
      </TouchableOpacity> */}


      {/* --> Image Element : if image is in local system*/}
      <Image source={require("../assets/images/icon.png")}
      style={{width:100, height:100}}
      />

      {/* --> Image Element : if image is coming from the url*/}
      {/* <Image source={{
        uri: "Link-of-the-image"
      }}
      style={{width:100, height:100}}
      /> */}

      
      
      {/* routing the other screen */}
      <Link href={"/notifications"}>Visit notifications screen</Link>
    </View>
  );
}
