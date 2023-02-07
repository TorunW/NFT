import React from 'react'
import { Text, View , StyleSheet, FlatList, Image} from 'react-native'

const DATA = [
    {
        user_name: 'John Doe',
        user_image: 'https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png',
        feed_image: 'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg',
        feed_image_link:  'https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg',
    
    },
    {
        user_name: 'Alex Doe',
        user_image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        feed_image: 'https://i.pinimg.com/originals/91/97/e0/9197e07cec099d6b4ab6b8478b7c9453.jpg',
        feed_image_link:  'https://i.pinimg.com/originals/91/97/e0/9197e07cec099d6b4ab6b8478b7c9453.jpg',

    },
]

const Item = ({user_name, user_image, feed_image, feed_image_link}) => (
    <View style={styles.card} >
    <View style={styles.cardHeader} >
        <View style={styles.headerLeft} >
            <Image style={styles.userImage} 
            source={{uri: user_image}}
            />
            <Text style={styles.userName} >{user_name}</Text>
        </View>
    </View>
    <Image style={styles.feedImage} source={{uri: feed_image }}  />
    <View style={styles.cardFooter} >
        <Text>{user_name} from unsplash</Text>
        <Text>{feed_image_link} </Text>
    </View>
</View>
);

export const Home = () => {

  return (
    <View style={styles.container} >
        <FlatList 
            data={DATA}
            renderItem={({item}) => <Item user_name={item.user_name}
            user_image={item.user_image}
            feed_image={item.feed_image}
            feed_image_link={item.feed_image_link}
             />}
            keyExtractor={item => item.id}
        />

      
    </View> )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',

    },
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,

    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headerLeft: {
        flexDirection: 'row',

    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50/2,
    },
    userName: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 15,
    },
    feedImage: {
        width: '100%',
        height: 300,
        marginTop: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

});