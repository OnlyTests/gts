import {Container} from 'native-base';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Featured from '../../components/RenderItem/Featured';
import MostPopular from '../../components/RenderItem/MostPopular';
import {mock, mockMore} from './mock';
import st from './styles';
function Home() {
  return (
    <Container style={{paddingTop: 20}}>
      <Text style={[st.paddingHorizontal, st.helloTxt]}>Olá,</Text>
      <Text style={[st.paddingHorizontal, st.nameTxt]}>João Paulo</Text>
      <View style={{paddingVertical: 10}} />
      <FlatList
        data={mock}
        keyExtractor={(item) => item.title}
        horizontal
        initialNumToRender={6}
        style={{paddingLeft: 8}}
        renderItem={({item, index}) => <Featured item={item} index={index} />}
      />
      <Text style={[st.paddingHorizontal, st.nameTxt]}>
        Recommended Courses
      </Text>
      <View style={{paddingVertical: 10}} />
      <FlatList
        data={mockMore}
        keyExtractor={(item) => item.title}
        horizontal
        style={{paddingLeft: 8}}
        initialNumToRender={6}
        renderItem={({item, index}) => (
          <MostPopular item={item} index={index} />
        )}
      />
    </Container>
  );
}

export default Home;
