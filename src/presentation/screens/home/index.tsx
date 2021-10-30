import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Div, Image, Text } from 'react-native-magnus';
import useUser from '../../hooks/useUser';
import Container from '../../layouts/container';
import Banner from '../../../assets/banner.png';
import Product from '../../../domain/models/Product';
import ProductRepository from '../../infra/repositories/ProductRepository';
import ProductFactory from '../../../domain/factories/ProductFactory';

const Home: React.FC = () => {
  const { user } = useUser();
  const [products, setProducts] = useState<Product[]>([]);

  const getProcuts = useCallback(async () => {
    const receivedProducts = await ProductRepository.index();

    if (receivedProducts) {
      setProducts(receivedProducts);
    }
  }, []);

  useEffect(() => {
    getProcuts();
  }, [getProcuts]);

  return (
    <Container>
      <Div flexDir="row" alignItems="center" justifyContent="space-between">
        <Div>
          <Text fontWeight="bold" color="gray700">
            Olá, {user.name || 'Alessandro'}
          </Text>
          <Text fontSize="sm" color="gray700">
            Lorem ipsum dolor sit amet.
          </Text>
        </Div>

        <Image
          source={{
            uri:
              user.imageProfile ||
              'https://w.wallhaven.cc/full/v9/wallhaven-v9dm9p.jpg',
          }}
          w={40}
          h={40}
          rounded={20}
        />
      </Div>

      <Div mt="xl">
        <Image source={Banner} w="100%" h={145} resizeMode="cover" />
      </Div>

      <Div mt="lg">
        <Text>Ovos</Text>

        <FlatList
          style={{
            padding: 5,
            marginTop: 10,
            flexDirection: 'row',
          }}
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Div flex={1}>
              <ActivityIndicator color="primary" size="large" />
            </Div>
          )}
          contentContainerStyle={{
            marginHorizontal: -4,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          renderItem={({ item: product }) => {
            return (
              <Div
                key={JSON.stringify(product)}
                bg="gray300"
                rounded="md"
                justifyContent="space-between"
                mx="xs"
                w={130}
                p="md"
              >
                <Div>
                  <Text fontWeight="bold" fontSize={16} numberOfLines={1}>
                    {product.name}
                  </Text>
                  <Text fontSize="sm" numberOfLines={2} mt="sm">
                    {product.description}
                  </Text>
                </Div>

                <Text
                  fontSize={18}
                  mt="lg"
                  textAlign="right"
                  color={product.isPromotion ? 'green600' : 'black'}
                  fontWeight={product.isPromotion ? 'bold' : 'normal'}
                >
                  {ProductFactory.formatPrice(product.price)}
                </Text>
              </Div>
            );
          }}
        />
      </Div>
    </Container>
  );
};

export default Home;
