import { Text, View, Image } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'
const NFTCard = ({ data, navigation }) => {
  return (
    <View  style={{
        backgroundColor: COLORS.white,
        barderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }}>
        <View style={{
            width: '100%',
            height: 250
        }}>
            <Image source={data.image} resizeMode="cover" style={{
                width: '100%',
                height: '100%'
            }}/>
        </View>

        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
        <SubInfo />
        <View style={{width: '100%', padding: SIZES.font}}>
            <NFTTitle 
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}/>

            <View style={{
                marginTop: SIZES.font,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <EthPrice price={data.price} />
                <RectButton
                minWidth={120}
                fontSize={SIZES.font}
                handlePress={() => navigation.navigate("Details", { data })} />
            </View>
        </View>
    </View>
  )
}

export default NFTCard