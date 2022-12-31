import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, View } from "react-native";
import styles from './styles';


const Carrosel = ({ data, animationTimeInSeconds = 2 }) => {
  const carrosselRef = useRef();
  const [indice, setIndice] = useState(0);

  const passaParaProximo = () => {
    setIndice(indice < data.length - 1 ? indice + 1 : 0);
  }

  useEffect(() => {
    carrosselRef.current.scrollToIndex({ index: indice, animated: true });

    const intervalo = setInterval(() => {
      passaParaProximo();
    }, animationTimeInSeconds * 1000);

    return () => clearInterval(intervalo);
  }, [indice]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Image
            source={item.imagem}
            style={[styles.image,
            index == data.length - 1 ? { marginRight: 200 } : null
            ]}
            resizeMode="contain"
          />
        )}
        ref={carrosselRef}
      />
    </View>
  )
};

export default Carrosel;