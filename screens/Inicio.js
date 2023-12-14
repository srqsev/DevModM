import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Inicio = () => {
  return (
    <View style={styles.inicio}>
      <View style={styles.splashScreen}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={styles.backdrop}>
          <Image
            style={[styles.backdropBaseIcon, styles.backdropIconLayout]}
            contentFit="cover"
            source={require("../assets/backdrop-base.png")}
          />
 
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
          <View style={[styles.buttontext, styles.icon2Layout]}>
            <Text style={[styles.dismiss, styles.dismissTypo]}>dismiss</Text>
          </View>
          <View style={styles.buttonprimary}>
            <Text style={[styles.orderNow, styles.dismissTypo]}>order now</Text>
          </View>
        </View>
        <Image
          style={[styles.backdropBaseIcon1, styles.backdropIconLayout]}
          contentFit="cover"
          source={require("../assets/backdrop-base3.png")}
        />
        <Text style={[styles.title1, styles.icon1Position]}>MetaMeals</Text>
        <View style={[styles.splashScreenChild, styles.image1IconLayout]} />
        <Image
          style={styles.pngwing1Icon}
          contentFit="cover"
          source={require("../assets/pngwing-1.png")}
        />
        <ImageBackground
          style={[styles.image1Icon, styles.image1IconLayout]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
        <Text style={[styles.holaHector, styles.title1Clr]}>
          Hola Hector...
        </Text>
        <Text style={[styles.cerrarSesin, styles.title1Clr]}>
          Cerrar Sesión
        </Text>
        <TextInput
          style={[styles.rectangleTextinput, styles.rectangleChildLayout]}
        />
        <View style={[styles.rectangleView, styles.rectangleChildLayout]} />
        <View
          style={[styles.splashScreenChild1, styles.rectangleChildLayout]}
        />
        <View
          style={[styles.splashScreenChild2, styles.rectangleChildLayout]}
        />
    
        <View style={styles.splashScreenChild3} />
        <View style={styles.splashScreenChild4} />
        <View style={[styles.splashScreenChild5, styles.splashChildPosition]} />
        <View style={styles.splashScreenChild6} />
        <View style={[styles.splashScreenChild7, styles.splashChildPosition]} />
        <Text style={[styles.genero, styles.generoTypo]}>{`Genero: `}</Text>
        <Text style={[styles.edad, styles.edadTypo]}>Edad:</Text>
        <Text style={[styles.peso, styles.edadTypo]}>Peso:</Text>
        <Text style={[styles.estatura, styles.edadTypo]}>Estatura:</Text>
        <Text style={[styles.nivelDeActividad, styles.edadTypo]}>
          Nivel de actividad:
        </Text>
        <Text style={[styles.alergias, styles.generoTypo]}>
          Alergias:
        </Text>
        
        <Text style={[styles.preferenciasDieteticas, styles.generoTypo]}>
          Preferencias dieteticas:
        </Text>

      </View>
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo4.png")}
      />   
      <Image
        style={[styles.icon1, styles.icon1Position]}
        contentFit="cover"
        source={require("../assets/icon2.png")}
      />
      <ImageBackground
        style={[styles.icon2, styles.icon2Layout]}
        resizeMode="cover"
        source={require("../assets/1887041-1.png")}
      />
      <Image
        style={styles.chef1Icon}
        contentFit="cover"
        source={require("../assets/chef-1.png")}
      />
      <Image
        style={styles.inicioChild}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Text style={[styles.caloriasDiarias, styles.text2FlexBox]}>
        Calorias diarias:
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  backdropIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icon2Layout: {
    width: 64,
    position: "absolute",
  },
  dismissTypo: {
    fontWeight: "600",
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    position: "absolute",
  },
  icon1Position: {
    height: 63,
    left: "50%",
    position: "absolute",
  },
  image1IconLayout: {
    width: 50,
    position: "absolute",
  },
  logoLayout: {
    width: 63,
    height: 63,
    position: "absolute",
  },
  title1Clr: {
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
  },
  rectangleChildLayout: {
    height: 23,
    position: "absolute",
  },
  splashChildPosition: {
    top: 491,
    width: 78,
    height: 23,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  generoTypo: {
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    lineHeight: 41,
  },
  edadTypo: {
    left: 46,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text1Position: {
    top: 223,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  splashChildLayout1: {
    height: 20,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  splashChildLayout: {
    width: 65,
    borderRadius: Border.br_3xs,
    height: 21,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  noCarnesTypo: {
    height: 19,
    width: 57,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  bajoEnGrasaTypo: {
    width: 139,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    fontSize: FontSize.size_3xs,
    height: 20,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  text2FlexBox: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo: {
    width: 66,
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  bgIcon: {
    top: 22,
    left: 10,
    width: 1032,
    height: 976,
    position: "absolute",
  },
  backdropBaseIcon: {
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    marginTop: 5.5,
    marginLeft: -186,
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    width: 374,
    height: 79,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    color: Color.textSecondary,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  title: {
    marginLeft: -163,
    bottom: 312,
    fontFamily: FontFamily.sFProDisplay,
    color: Color.textPrimary,
    width: 326,
    height: 80,
    fontWeight: "700",
    alignItems: "center",
    lineHeight: 41,
    fontSize: FontSize.size_15xl,
    textAlign: "center",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  icon: {
    marginTop: -227.5,
    marginLeft: -50,
    width: 104,
    height: 104,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  dismiss: {
    top: "0%",
    left: "4.69%",
    color: Color.textSecondary,
    fontWeight: "600",
  },
  buttontext: {
    marginLeft: -33,
    top: 512,
    height: 18,
    left: "50%",
  },
  orderNow: {
    height: "42.86%",
    width: "69.73%",
    top: "28.57%",
    left: "15.14%",
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  buttonprimary: {
    top: 424,
    right: 20,
    left: 20,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primaryButton,
    height: 56,
    position: "absolute",
  },
  backdrop: {
    top: 271,
    bottom: 41,
    display: "none",
    left: 0,
    right: 0,
    position: "absolute",
  },
  backdropBaseIcon1: {
    top: 38,
    right: 19,
    bottom: 15,
    left: 22,
  },
  title1: {
    marginLeft: -114.2,
    bottom: 589,
    width: 273,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.montserratBold,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    lineHeight: 41,
    fontSize: FontSize.size_15xl,
    height: 63,
    display: "none",
  },
  splashScreenChild: {
    top: 488,
    left: 233,
    height: 50,
    overflow: "hidden",
  },
  pngwing1Icon: {
    top: 219,
    left: 152,
    width: 107,
    height: 93,
    display: "none",
    position: "absolute",
  },
  splashScreenItem: {
    top: 389,
    left: 77,
    width: 257,
    height: 38,
    position: "absolute",
  },
  baseIcon: {
    top: 0,
    left: 0,
  },
  lgLogoUdgEnJpgOrig1Icon: {
    top: 1,
    left: 1,
    borderRadius: Border.br_25xl,
    width: 62,
    height: 60,
    position: "absolute",
  },
  logo: {
    top: 65,
    left: 22,
    display: "none",
  },
  image1Icon: {
    top: 793,
    left: 288,
    height: 49,
  },
  holaHector: {
    top: 81,
    left: 49,
    fontSize: FontSize.size_5xl,
    width: 210,
    height: 46,
    fontFamily: FontFamily.montserratBold,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    textTransform: "uppercase",
    lineHeight: 18,
    display: "flex",
    position: "absolute",
  },
  cerrarSesin: {
    top: 113,
    left: 285,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    lineHeight: 41,
    position: "absolute",
  },
  splashScreenInner: {
    top: 168,
    left: 27,
    width: 357,
    height: 0,
    display: "none",
    position: "absolute",
  },
  rectangleTextinput: {
    top: 232,
    width: 179,
    left: 123,
    height: 23,
    backgroundColor: Color.colorGainsboro,
  },
  rectangleView: {
    top: 273,
    width: 179,
    left: 123,
    height: 23,
    backgroundColor: Color.colorGainsboro,
  },
  splashScreenChild1: {
    top: 311,
    width: 179,
    left: 123,
    height: 23,
    backgroundColor: Color.colorGainsboro,
  },
  splashScreenChild2: {
    top: 351,
    width: 179,
    left: 123,
    height: 23,
    backgroundColor: Color.colorGainsboro,
  },
  splashScreenChild3: {
    top: 392,
    width: 159,
    height: 21,
    left: 212,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  splashScreenChild4: {
    width: 78,
    left: 52,
    top: 458,
    height: 23,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  splashScreenChild5: {
    left: 52,
    top: 491,
  },
  splashScreenChild6: {
    left: 266,
    top: 491,
    width: 78,
    height: 23,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  splashScreenChild7: {
    left: 156,
  },
  rectangleIcon: {
    left: 155,
    width: 189,
    top: 458,
  },
  genero: {
    left: 44,
    top: 223,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  edad: {
    top: 263,
  },
  peso: {
    top: 304,
  },
  estatura: {
    top: 342,
  },
  nivelDeActividad: {
    top: 384,
  },
  preferenciasDieteticas: {
    top: 522,
    left: 38,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    position: "absolute",
  },
  alergias: {
    top: 420,
    left: 45,
    color: Color.colorBlack,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    fontWeight: "800",
    position: "absolute",
  },
  text1: {
    left: 115,
    fontFamily: FontFamily.fontAwesome6Free,
    width: 36,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
  },
  splashScreenChild8: {
    top: 577,
    left: 32,
    width: 339,
    height: 147,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  splashScreenChild9: {
    top: 687,
    left: 61,
    backgroundColor: Color.colorGray,
    width: 273,
  },
  splashScreenChild10: {
    left: 129,
    top: 618,
  },
  splashScreenChild11: {
    left: 209,
    height: 22,
    width: 119,
    top: 617,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  splashScreenChild12: {
    left: 51,
    top: 587,
  },
  splashScreenChild13: {
    left: 50,
    top: 617,
  },
  splashScreenChild14: {
    width: 129,
    top: 588,
    left: 129,
    backgroundColor: Color.colorWhite,
  },
  splashScreenChild15: {
    width: 86,
    top: 587,
    borderRadius: Border.br_3xs,
    left: 266,
    height: 23,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  noCarnes: {
    left: 54,
    width: 57,
    top: 588,
  },
  sinGluten: {
    left: 54,
    width: 57,
    top: 617,
  },
  noAzucar: {
    left: 132,
    top: 618,
  },
  comidaMexicana: {
    width: 111,
    fontFamily: FontFamily.montserratThin,
    fontWeight: "100",
    fontSize: FontSize.size_3xs,
    height: 22,
    top: 617,
    left: 212,
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  altoContenidoDe: {
    left: 124,
    top: 588,
  },
  bajoEnGrasa: {
    left: 240,
    top: 587,
  },
  splashScreen: {
    top: -22,
    left: -10,
    backgroundColor: Color.colorYellowgreen,
    width: 408,
    height: 875,
    position: "absolute",
    overflow: "hidden",
  },
  logoIcon: {
    top: 18,
    left: 16,
    width: 358,
    height: 747,
    position: "absolute",
  },
  text2: {
    top: 675,
    left: 237,
    fontFamily: FontFamily.fontAwesome5Brands,
    width: 61,
    height: 62,
    textTransform: "uppercase",
    lineHeight: 18,
  },
  icon1: {
    marginTop: 329,
    marginLeft: -41,
    width: 79,
    top: "50%",
  },
  icon2: {
    top: 764,
    left: 43,
    height: 64,
  },
  chef1Icon: {
    top: 48,
    left: 305,
    width: 31,
    height: 44,
    position: "absolute",
  },
  text3: {
    top: 241,
    left: 278,
  },
  text4: {
    top: 280,
    left: 279,
  },
  text5: {
    top: 321,
    left: 280,
  },
  text6: {
    top: 427,
    left: 101,
  },
  text7: {
    top: 457,
    left: 103,
  },
  text8: {
    top: 422,
    left: 212,
    width: 66,
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_base,
  },
  text9: {
    top: 456,
    left: 210,
  },
  text10: {
    top: 426,
    left: 319,
  },
  text11: {
    left: 321,
    top: 458,
  },
  inicioChild: {
    top: 170,
    left: 165,
    width: 119,
    height: 23,
    position: "absolute",
  },
  caloriasDiarias: {
    top: 153,
    left: -22,
    width: 216,
    fontFamily: FontFamily.montserratExtraBold,
    fontWeight: "800",
    lineHeight: 41,
    height: 56,
  },
  text12: {
    top: 161,
    left: 274,
  },
  inicio: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Inicio;
