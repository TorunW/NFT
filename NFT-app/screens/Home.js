import React, {useState, useEffect} from 'react'
import { Text, View , StyleSheet, FlatList, Image} from 'react-native'
import config from '../config/index.js'

const DATA = [
    {
        "alt_description": "a horse grazing in a field at sunset",
        "blur_hash": "L+G+UOtRR*M{?wt7WVWBtSWBoKt7",
        "color": "#c0d9d9",
        "created_at": "2023-01-08T09:14:04Z",
        "description": null,
        "exif": {
            "aperture": "2.8",
            "exposure_time": "1/200",
            "focal_length": "39.0",
            "iso": 100,
            "make": "Canon",
            "model": " EOS R5 C",
            "name": "Canon, EOS R5 C"
        },
        "likes": 56,
        "links": {
            "download": "https://unsplash.com/photos/sfgvq9JtlK0/download?ixid=Mnw0MDc0NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5NjYwNDE",
            "download_location": "https://api.unsplash.com/photos/sfgvq9JtlK0/download?ixid=Mnw0MDc0NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5NjYwNDE",
            "html": "https://unsplash.com/photos/sfgvq9JtlK0",
            "self": "https://api.unsplash.com/photos/sfgvq9JtlK0"
        },
        "location": {
            "city": "Reykjahlíð",
            "country": "Iceland",
            "name": "Reykjahlíð, Iceland",
            "position": [Object
            ]
        },
        "urls": {
            "full": "https://images.unsplash.com/photo-1673169128434-90faeb36aaa3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDc0NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5NjYwNDE&ixlib=rb-4.0.3&q=80",
            "raw": "https://images.unsplash.com/photo-1673169128434-90faeb36aaa3?ixid=Mnw0MDc0NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5NjYwNDE&ixlib=rb-4.0.3",
            "regular": "https://images.unsplash.com/photo-1673169128434-90faeb36aaa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDc0NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5NjYwNDE&ixlib=rb-4.0.3&q=80&w=1080",
            "small": "https://images.unsplash.com/photo-1673169128434-90faeb36aaa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDc0NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5NjYwNDE&ixlib=rb-4.0.3&q=80&w=400",
            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1673169128434-90faeb36aaa3",
            "thumb": "https://images.unsplash.com/photo-1673169128434-90faeb36aaa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDc0NDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5NjYwNDE&ixlib=rb-4.0.3&q=80&w=200"
        },
        "user": {
            "bio": "Scenes of travel and adventure around the world | Instagram @spensersembrat",
            "id": "nTOCTRi5GnU",
            "instagram_username": "spensersembrat",
            "name": "Spenser Sembrat",
            "portfolio_url": "https://www.spensersembrat.com",
            "total_collections": 10,
            "total_likes": 1185,
            "total_photos": 513,
            "twitter_username": "spensersembrat",
            "username": "spensersembrat"
        },
        "views": 400843,
    }
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
  const [unsplashData, setUnsplashData] = useState([]);

  useEffect(() => {
    //getUnsplashData();
  }, []);

  function getUnsplashData() {
    fetch(
     // `https://api.unsplash.com/photos?page=1&client_id=${config.unsplash.accessKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUnsplashData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } 

  return (
    <View style={styles.container} >
        <FlatList 
            data={DATA}
            renderItem={({item}) => <Item user_name={item.user.name}
            user_image={item.user.profile_image}
            feed_image={item.urls.small}
            feed_image_link={item.links.download}
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