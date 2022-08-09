import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import QRCode from "react-native-qrcode-svg";

const QRCodeScreen = () => {
  const [state, setState] = useState({
    isLoading: true,
    address: "",
  });

  const checkWallet = async () => {
    const accountStr = await AsyncStorage.getItem('account');
    if (accountStr) {
      const account = JSON.parse(accountStr);
      setState({
        isLoading: false,
        address: account.address,
      });
    }
  };

  useEffect(() => {
    checkWallet();
  }, []);


  if (state.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{ marginTop: 64 }}>
        <Text style={styles.addressTextStyle}>Address: {state.address}</Text>
      </View>
      <View style={styles.qrcodeContainerStyle}>
        <QRCode
          size={200}
          color="#fff"
          backgroundColor="#0A0F24"
          value={state.address}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
  },
  addressTextStyle: {
    fontSize: 18,
    color: "#8A8D97",
    textAlign: "center",
    marginBottom: 10,
  },
  qrcodeContainerStyle: { marginTop: 200 },
});

export default QRCodeScreen;
