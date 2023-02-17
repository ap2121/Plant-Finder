const db = require('../db')

const Plant = require('../models/plant')
const Region = require('../models/region')
const Gloss = require('../models/glossary')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    await Plant.collection.drop()
    await Region.collection.drop()
    await Gloss.collection.drop()
    const region1 = await new Region({
        name: 'Southeast Asia',
        rImg: 'https://static.scholar.harvard.edu/files/styles/os_files_xxlarge/public/vincentjelani/files/waterfall.jpg?m=1499794157&itok=oQsdLpry'

    })
    region1.save()
   
    const region2 = await new Region({
        name: 'North America',
        rImg: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg'
    })
    region2.save()
        
    const region3 = await new Region ({
        name: 'South America',
        rImg: 'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_747/v1622742349/12-Best-Places-to-Visit-in-South-America-pantanal/12-Best-Places-to-Visit-in-South-America-pantanal.jpg'
    })
    region3.save()
    
    const region4 = await new Region({
        name: "Caribbean",
        rImg: 'https://a.cdn-hotels.com/gdcs/production85/d1447/2c228b37-9ad7-4121-b01b-51a777a94fd4.jpg?impolicy=fcrop&w=800&h=533&q=medium'
    })

    region4.save()
    
    
    const region5 = await new Region({
        name: 'Southern Europe',
        rImg: 'https://www.eucom.mil/Img/42199/Large/us-b-52-assurance-overflights-demonstrate-commitment-to-southeastern-european-allies-partn'
    })

    region5.save()
    
    
    const region6 = await new Region({
        name: 'Northern Africa',
        rImg: 'https://i.pinimg.com/originals/1c/5e/32/1c5e322ea897f20a88d1a3ed49d09e6f.jpg'
    })
    region6.save()
    
    const plants = [
    {
        commonName: 'Rubber Plant',
        scientificName: 'Ficus elastica',
        img: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSOhl3dwPxHFW65odrBVKrNdRkk5pJJDafOsfl0LjlPwegohV1xv9SUQWBR3L8anewNkWAzikPl5S_TfiU',
        sunExposure: 'Part sun',
        matureSize: 12,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
       

    },
    {
        commonName: 'Chinese Fan Palm',
        scientificName: 'Livistona chinensis',
        img: 'https://www.thespruce.com/thmb/6anYYjuNuofoiMgB9fxu82YoTyw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/https---www.thespruce.com-grow-chinese-fan-palm-1902543-17-7bcf964a33c048e1b1bffe3949cb1e44.jpg',
        sunExposure: 'Full Sun', 
        matureSize: 40,
        soilType: 'Medium Moisture',
        soilPHAvg: 6.5,
        hardinessZone: 10,
        water: 'Bi-weekly',
        nativeRegion: region1._id,
        garden: false

     },
     {
        commonName: 'Hoya',
        scientificName: 'Hoya krohniana',
        img: 'https://images.squarespace-cdn.com/content/v1/550b57f0e4b03338e0474a39/1628207508240-SC8BQ88B4G25HYI67TG7/tempImagemu2OY9.jpg',
        sunExposure: 'Full Sun', 
        matureSize: 3,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
     },
    { 
        commonName: 'Neon Pothos',
        scientificName: 'Epipremnum aurenum neon',
        img: 'https://www.plantvine.com/plants/Neon-Pothos-2-2.jpg',
        sunExposure: 'Part sun', 
        matureSize: 10,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Orchid',
        scientificName: 'Phalaenopsis Orchid',
        img: 'https://www.1800flowers.com/blog/wp-content/uploads/2019/09/orchid-facts-hero.jpg',
        sunExposure: 'Part sun', 
        matureSize: 30,
        soilType: 'Bark',
        soilPHAvg: 6.5,
        hardinessZone: 11,
        water: 'Bi-weekly',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Monstera',
        scientificName: 'Monstera deliciosa',
        img: 'https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0901227_pe687834_s5.jpg?f=s',
        sunExposure: 'Full sun', 
        matureSize: 36,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 12,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false
    }, 
    {
        commonName: 'Heartleaf Philodendron',
        scientificName: 'Philodenron hederaceum',
        img: 'https://www.bybrittanygoldwyn.com/wp-content/uploads/2023/01/Heartleaf-Philodendron-Care-7-683x1024.jpg',
        sunExposure: 'Part sun', 
        matureSize: 96,
        soilType: 'Medium Moisture',
        soilPHAvg: 5,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'Watermelon Peperomia',
        scientificName: 'Peperomia argyreia',
        img: 'https://redsquareflowers.com/wp-content/uploads/2021/04/Watermelon-peperomia-scaled.jpeg',
        sunExposure: 'Full sun', 
        matureSize: 8,
        soilType: 'Well draining',
        soilPHAvg: 6.8,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Stromanthe Triostar',
        scientificName: 'Stromanthe sanguinea',
        img: 'https://www.theleafyplant.com/uploads/1/2/5/2/125274468/s220733784862813675_p213_i7_w2560.jpeg',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Elephant Bush',
        scientificName: 'Portulacaria afra',
        img: 'https://cdn.shopify.com/s/files/1/2203/9263/products/6fae283bf14f9f5551ab36475d7378d4.jpg?v=1571616111',
        sunExposure: 'Full sun', 
        matureSize: 96,
        soilType: 'Cactus mix',
        soilPHAvg: 6,
        hardinessZone: 9,
        water: 'Bi-weekly',
        nativeRegion: region6._id,
        garden: false
    },
    {
        commonName: 'String Of Pearls',
        scientificName: 'Senecio rowleyanus',
        img: 'https://gardenerspath.com/wp-content/uploads/2022/06/How-to-Grow-String-of-Pearls-Feature.jpg',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Cactus mix',
        soilPHAvg: 6,
        hardinessZone: 8,
        water: 'Once a month',
        nativeRegion: region6._id,
        garden: false
    },
    {
        commonName: 'Purple Shamrock',
        scientificName: 'Oxalis regnellii',
        img: 'https://i.etsystatic.com/29088823/r/il/f4733e/3746682415/il_570xN.3746682415_r1s0.jpg',
        sunExposure: 'Part sun', 
        matureSize: 12,
        soilType: 'Well draining',
        soilPHAvg: 6.2,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region6._id,
        garden: false
    },
    {
        commonName: 'Peace Lily',
        scientificName: 'Spathiphyllum',
        img: 'https://www.plants.com/images/157654MDS_20220221-1645468126653.jpg',
        sunExposure: 'Part sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Nerve Plant',
        scientificName: 'Fittonia Verschaffeltii',
        img: 'https://littleprinceplants.com/wp-content/uploads/2021/07/Fittonia-zebrano-Nerve-Plant-4-scaled.jpg.webp',
        sunExposure: 'Part sun', 
        matureSize: 3,
        soilType: 'Medium moisture',
        soilPHAvg: 4,
        hardinessZone: 11,
        water: 'Twice a week',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Chinese Evergreen',
        scientificName: 'Aglaonema commutatum',
        img: 'https://www.gardendesign.com/pictures/images/900x705Max/site_3/chinese-evergreen-plant-aglaonema-shutterstock-com_15962.jpg',
        sunExposure: 'Part sun', 
        matureSize: 20,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Snake Plant',
        scientificName: 'Sansevieria trifasciata',
        img: 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_small_hyde_olive.jpg?v=1673292264',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 9,
        water: 'Once a month',
        nativeRegion: region6._id,
        garden: false
    },

    {
        commonName: 'Wandering Jew (Spiderwort)',
        scientificName: 'Tradescantia zebrina',
        img: 'https://www.plantvine.com/plants/zebrina-wandering-jew.jpg',
        sunExposure: 'Part sun', 
        matureSize: 9,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region4._id,
        garden: false
    },
    {
        commonName: 'Aeonium Kiwi',
        scientificName: 'Aeonium haworthii Kiwi',
        img: 'https://www.succulentsandsunshine.com/wp-content/uploads/2021/05/How-to-care-for-and-propagate-Aeonium-Kiwi-1-624x936.jpg',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Cactus mix',
        soilPHAvg: 6.5,
        hardinessZone: 10,
        water: 'Once a month',
        nativeRegion: region6._id,
        garden: false
    },
    {
        commonName: 'American Beech Tree',
        scientificName: 'Fagus grandifolia',
        img: 'https://www.bates.edu/canopy/files/2015/12/AmericanBeech1_KCuthbert.jpeg',
        sunExposure: 'Full sun', 
        matureSize: 720,
        soilType: 'Medium moisture',
        soilPHAvg: 5.5,
        hardinessZone: 5,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false
    },
    
    {
        commonName: 'Angel Trumpet',
        scientificName: 'Burgmansia spp.',
        img: 'https://post.healthline.com/wp-content/uploads/2022/10/angel-trumpet-plant-flowers-1200-628-facebook-1200x628.jpg',
        sunExposure: 'Full sun', 
        matureSize: 120,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Bi-weekly',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Holly',
        scientificName: 'llex opaca',
        img: 'https://www.bhg.com/thmb/N5SO8UIjVr2y0mSCcwMH_PzIodk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/leaf-berries-ilex-opaca-a1d6017e-39e743da40ba4385a3f95c898c5d9f34.jpg',
        sunExposure: 'Part', 
        matureSize: 480,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Bi-weekly',
        nativeRegion: region2._id,
        garden: false
    }, 
   
    {
        commonName: 'Cuban Royal Palm',
        scientificName: 'Roystonea regia',
        img: 'https://www.picturethisai.com/wiki-image/1080/153868685184860195.jpeg',
        sunExposure: 'Full sun', 
        matureSize: 720,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region4._id,
        garden: false
    },
    {
        commonName: 'Carnation',
        scientificName: 'Dianthus caryophyllus',
        img: 'https://cdn.britannica.com/38/189538-050-6EC8A082/carnation-flowers.jpg',
        sunExposure: 'Full sun', 
        matureSize: 15,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region5._id,
        garden: false
    },
    {
        commonName: 'Witch Hazel',
        scientificName: 'Hamamelis virginiana',
        img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/witch-hazel-benefits-uses-1296x728-feature.jpg?w=1155&h=1528',
        sunExposure: 'Full sun', 
        matureSize: 180,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Twice a week',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'Wild Cosmos',
        scientificName: 'Cosmos caudatus',
        img: 'http://cdn.shopify.com/s/files/1/0620/2749/7724/products/cosmos-sensation-mix-1.jpg?v=1653064987',
        sunExposure: 'Full sun', 
        matureSize: 60,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'White Sage',
        scientificName: 'Salvia apiana',
        img: 'https://calscape.com/ExtData/allimages/Photos/Salvia_apiana_image_34.jpg',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 7.5,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'Weeping Willow',
        scientificName: 'Salix babylonica',
        img: 'https://shop-static.arborday.org/media/0003288_weeping-willow.jpeg',
        sunExposure: 'Full sun', 
        matureSize: 600,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Ficus',
        scientificName: 'Ficus benjamina',
        img: 'https://www.plantvine.com/plants/Variegated-Ficus-Benjamina-Braid.jpg',
        sunExposure: 'Full sun', 
        matureSize: 240,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Wallflower',
        scientificName: 'Erysimum',
        img: 'https://www.bhg.com/thmb/LmKc5yAd_KUXXaBaop4aRAzg_Jo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wallflower-erysimum-7c15c241-33196cd3b7514a7983b483115cf8e1fa.jpg',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 8,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region5._id,
        garden: false
    },
    {
        commonName: 'Virgina Blue Bells',
        scientificName: 'Mereensia virginica',
        img: 'https://www.americanmeadows.com/media/catalog/product/m/e/mertensia-virginica-virginia-bluebells_2_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 5,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'Virgina Blue Fern',
        scientificName: 'Ehlebodium areolatum',
        img: 'https://www.gardenista.com/wp-content/uploads/2015/04/fields/r-364x438.png',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 7,
        water: 'Once a week',
        nativeRegion: region4._id,
        garden: false
    },
    {
        commonName: 'Verona Vain',
        scientificName: 'Parthenocissus striata',
        img: 'https://i.pinimg.com/originals/1f/ba/41/1fba415c2199227c3805053e5376998e.jpg',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Venus Fly Trap',
        scientificName: 'Dionaea muscipula',
        img: 'https://cnr.ncsu.edu/news/wp-content/uploads/sites/10/2021/01/10212021-venus-fly-trap-iStock-featured.jpg',
        sunExposure: 'Part sun', 
        matureSize: 8,
        soilType: 'Medium moisture',
        soilPHAvg: 5,
        hardinessZone: 6,
        water: 'Twice a week',
        nativeRegion: region2._id,
        garden: false 
    },
    {
        commonName: 'Tulip',
        scientificName: 'Tuplia',
        img: 'https://www.johnscheepers.com/media/catalog/product/cache/0e0f8b55cb1429f46d7faa85732ae262/t/_/t_big_love_1-w.jpg',
        sunExposure: 'Full sun', 
        matureSize: 20,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 5,
        water: 'Once a week',
        nativeRegion: region5._id,
        garden: false
    }, 
    {
        commonName: 'Toad Lily',
        scientificName: 'Tricyrtis hirta',
        img: 'https://h2.commercev3.net/cdn.brecks.com/images/800/71110.jpg',
        sunExposure: 'Part sun', 
        matureSize: 30,
        soilType: 'Medium mosisture',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Tiger Flower',
        scientificName: 'Tigridia pavonia',
        img: 'https://h2.commercev3.net/cdn.brecks.com/images/800/99375.jpg',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 9,
        water: 'Twice a week',
        nativeRegion: region2._id,
        garden: false

    }, 
    {
        commonName: 'Ti Plant (Good luck plant)',
        scientificName: 'Cordyline terminalias',
        img: 'http://images.squarespace-cdn.com/content/v1/51835eb5e4b0999588582742/1600905166062-I68V6BKMP0CV3369HMFF/Ti%2Bplant%2Bwith%2Bred%2Bleaves.jpg',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'The Geo Plant',
        scientificName: 'Geogenanthus ciliatus',
        img: 'https://www.bybrittanygoldwyn.com/wp-content/uploads/2022/01/Geogenanthus-ciliatus-care-propagation-8.jpg',
        sunExposure: 'Part sun', 
        matureSize: 6,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region3._id,
        garden: false 
    },
    {
        commonName: 'Texas Sage',
        scientificName: 'Salvia coccinea',
        img: 'https://cdn.shopify.com/s/files/1/0305/7397/products/Texas_sage_6_ec7ea71e-a262-4832-afaa-6b4b72ff2d77.jpg?v=1569346471',
        sunExposure: 'Full sun', 
        matureSize: 36,
        soilType: 'Cactus mix',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Twice a week',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'String Of Bananas',
        scientificName: 'Senecio radicans',
        img: 'https://cdn.shopify.com/s/files/1/2203/9263/products/f927c8af777c06f4842e9b0f9eafe7de.jpg?v=1572038716',
        sunExposure: 'Full sun', 
        matureSize: 36,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Bi-weekly',
        nativeRegion: region6._id,
        garden: false
    },
    {
        commonName: 'Stinging Nettle',
        scientificName: 'Urtica Dioica',
        img: 'https://cdn.britannica.com/21/196021-050-45CAA3DB/Stinging-nettle.jpg',
        sunExposure: 'Part sun', 
        matureSize: 72,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'Stargazer Lily',
        scientificName: 'Lilium stargazer',
        img: 'http://cdn.shopify.com/s/files/1/0620/2749/7724/products/lily-stargazer-1.jpg?v=1654707970',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Spiral Aloe',
        scientificName: 'Aloe ployehylla',
        img: 'https://www.gardenia.net/storage/app/public/uploads/images/detail/Spiral%20aloe%20(Aloe%20polyphylla)3.webp',
        sunExposure: 'Full sun', 
        matureSize: 12,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 8,
        water: 'Once a month',
        nativeRegion: region6._id,
        garden: false
    },
    {
        commonName: 'Spider Plant',
        scientificName: 'Chlorophytum comosum',
        img: 'https://www.plantvine.com/plants/Variegated-Spider-Plant-2.jpg',
        sunExposure: 'Part sun', 
        matureSize: 36,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region6._id,
        garden: false
    },
    {
        commonName: 'Snow Pea',
        scientificName: 'Pisum sativum var',
        img: 'https://gardenerspath.com/wp-content/uploads/2022/02/How-to-Grow-Snow-Peas-Cover.jpg',
        sunExposure: 'Part sun', 
        matureSize: 18,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Three times a week',
        nativeRegion: region5._id,
        garden: false 
    },
    {
        commonName: 'Slipper plant',
        scientificName: 'Euphorbia lomelii',
        img: 'https://horticultureunlimited.com/wp-content/uploads/2016/01/Pedilanthus-macrocarpus-Lady-slipper-plant.jpg',
        sunExposure: 'Full sun', 
        matureSize: 60,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 8,
        water: 'Bi-weekly',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Silver Sword',
        scientificName: 'Philodendron hastatum',
        img: 'https://www.bybrittanygoldwyn.com/wp-content/uploads/2021/08/Silver-Sword-2.jpg.webp',
        sunExposure: 'Part sun', 
        matureSize: 12,
        soilType: 'Well draining',
        soilPHAvg: 5,
        hardinessZone: 7,
        water: 'Once a week',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Silver Dragon Alocasia',
        scientificName: 'Alocasia baginda silver dragon',
        img: 'https://cdn.shopify.com/s/files/1/0280/3725/1144/products/SilverDragon-bio-image-desktop_900x900.jpg?v=1660936381',
        sunExposure: 'Part sun', 
        matureSize: 6,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Twice a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Satin Pothos',
        scientificName: 'Scindapsus pictus',
        img: 'https://cdn11.bigcommerce.com/s-uemzj79jf9/images/stencil/2048x2048/products/1287/2892/Satin_Pothos_Epipremnum_pictum_Argyraeus_pic1__45641.1642531581.jpg?c=2',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Medium moisture',
        soilPHAvg: 6.5,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Sago Palm',
        scientificName: 'Cycas revoluta',
        img: 'https://cdn.shopify.com/s/files/1/2045/8185/products/5812646.jpg?v=1614289127',
        sunExposure: 'Full sun', 
        matureSize: 120,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false  
    },
    {
        commonName: 'Moon Cactus',
        scientificName: 'Gymnocalycium mihanodichii',
        img: 'https://i0.wp.com/unclejohnsplants.com/wp-content/uploads/2020/09/Moon-Cactus-Trio-b-scaled-e1599240586440.jpg?fit=1440%2C1523&ssl=1',
        sunExposure: 'Full sun', 
        matureSize: 8,
        soilType: 'Cactus mix',
        soilPHAvg: 6,
        hardinessZone: 12,
        water: 'Once a month',
        nativeRegion: region2._id,
        garden: false
    },
    {
        commonName: 'Rockrose',
        scientificName: 'Cistus',
        img: 'https://www.thespruce.com/thmb/ZPZF-z5nmhxBmneghlgTYnKfnJo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rockrose-plant-profile-4842337-hero-d8c99061eb0449c69a8ca85c7b799113.jpg',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 7,
        water: 'Once a week',
        nativeRegion: region5._id,
        garden: false
    },
    {
        commonName: 'Red Spider Lily',
        scientificName: 'Lycoris Radiata',
        img: 'http://cdn.shopify.com/s/files/1/1419/7120/products/Lycoris_Red_Radiata.SHUT.jpg?v=1571439604',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false

    },
    {
        commonName: 'Red Ginger',
        scientificName: 'Alpinia Purpurata',
        img: 'http://cdn.shopify.com/s/files/1/0419/5333/products/red_ginger_1024x.jpg?v=1571266826',
        sunExposure: 'Part sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region1._id,
        garden: false
    },
    {
        commonName: 'Rain Lily',
        scientificName: 'Zephyranthes',
        img: 'https://www.americanmeadows.com/media/catalog/product/p/i/pink-rain-lily-flower-cluster.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=',
        sunExposure: 'Full sun', 
        matureSize: 12,
        soilType: 'Medium moisture',
        soilPHAvg: 6.5,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region3._id,
        garden: false
    },
    {
        commonName: 'Pussy Willow',
        scientificName: 'Salix discolor',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Salix_caprea_02.jpg',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Medium Moisture',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region2._id,
        garden: false,
    
    }

     
]
const defs = [
    {
        term: 'Common Name',
        def: 'The local name given to a particular species of a plant, as opposed to the scientific latin or greek name, which is used universally.'
    },
    {
        term: 'Botanical Name',
        def: 'A botanical name is the scientific name given to a particular plant species. It must conform to the system of botanical nomenclature as prescribed by the International Code of Nomenclature for algae, fungi, and plants (ICN).'
    },
    {
        term: 'Sun Exposure',
        def: 'Full sun: Plants need at least 6 hours of direct sun daily. Part sun: Plants thrive with between 3 and 6 hours of direct sun per day. Part shade: Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun. '
    },
    {
        term: 'Mature Size',
        def: 'A plant/tree that has reached a desired size or age for its intended use. Complete in natural development or growth.'
    },
    {
        term: 'Soil Type',
        def: 'A soil type is a taxonomic unit in soil science. All soils that share a certain set of well-defined properties form a distinctive soil type. Soil type is a technical term of soil classification, the science that deals with the systematic categorization of soils. Every soil of the world belongs to a certain soil type.'
    },
    {
        term: 'Soil PH',
        def: 'Soil pH is a measurement of the alkalinity or acidity of soil. Soil pH is measured on a scale of 1-14, with 7 as the neutral mark. The ideal range for most plants is between 6 and 7. Most plants prefer a somewhat neutral pH, anything from 6.2 to 7.0.'
    },
    {
        term: 'Hardiness Zone',
        def: 'A hardiness zone is a geographic area defined as having a certain average annual minimum temperature, a factor relevant to the survival of many plants.'
    }
    
]
    await Plant.insertMany(plants)
    await Gloss.insertMany(defs)
    console.log('Created plants and defs')
    
}

const run = async() => {
    await main()
    // db.close()
}

run()