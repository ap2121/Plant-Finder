const db = require('../db')

const Plant = require('../models/plant')
const Region = require('../models/region')
const Gloss = require('../models/glossary')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    await Plant.collection.drop()
    await Region.collection.drop()
    const region1 = await new Region({
        name: 'Southeast Asia',
        rImg: 'dsjfj'

    })
    region1.save()
   
    const region2 = await new Region({
        name: 'North America',
        rImg: 'asfb'
    })
    region2.save()
        
    const region3 = await new Region ({
        name: 'South America',
        rImg: 'afhfbs'
    })
    region3.save()
    
    const region4 = await new Region({
        name: "Caribbean",
        rImg: 'djfnsa'
    })

    region4.save()
    
    
    const region5 = await new Region({
        name: 'Southern Europe',
        rImg: 'asnas'
    })

    region5.save()
    
    
    const region6 = await new Region({
        name: 'Northern Africa',
        rImg: 'sfasf'
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
        nativeRegion: region1._id
       

    },
    {
        commonName: 'Chinese Fan Palm',
        scientificName: 'Livistona chinensis',
        img: 'sdfd',
        sunExposure: 'Full Sun', 
        matureSize: 40,
        soilType: 'Medium Moisture',
        soilPHAvg: 6.5,
        hardinessZone: 10,
        water: 'Bi-weekly',
        nativeRegion: region1._id
     },
     {
        commonName: 'Hoya',
        scientificName: 'Hoya krohniana',
        img: 'sdfd',
        sunExposure: 'Full Sun', 
        matureSize: 3,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region1._id 
     },
    { 
        commonName: 'Neon Pothos',
        scientificName: 'Epipremnum aurenum neon',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 10,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Orchid',
        scientificName: 'Phalaenopsis Orchid',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 30,
        soilType: 'Bark',
        soilPHAvg: 6.5,
        hardinessZone: 11,
        water: 'Bi-weekly',
        nativeRegion: region1._id 
    },
    {
        commonName: 'Monstera',
        scientificName: 'Monstera deliciosa',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 36,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 12,
        water: 'Once a week',
        nativeRegion: region2._id 
    }, 
    {
        commonName: 'Heartleaf Philodendron',
        scientificName: 'Philodenron hederaceum',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 96,
        soilType: 'Medium Moisture',
        soilPHAvg: 5,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region2._id
    },
    {
        commonName: 'Watermelon Peperomia',
        scientificName: 'Peperomia argyreia',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 8,
        soilType: 'Well draining',
        soilPHAvg: 6.8,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region3._id
    },
    {
        commonName: 'Stromanthe Triostar',
        scientificName: 'Stromanthe sanguinea',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region3._id
    },
    {
        commonName: 'Elephant Bush',
        scientificName: 'Portulacaria afra',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 96,
        soilType: 'Cactus mix',
        soilPHAvg: 6,
        hardinessZone: 9,
        water: 'Bi-weekly',
        nativeRegion: region6._id
    },
    {
        commonName: 'String Of Pearls',
        scientificName: 'Senecio rowleyanus',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Cactus mix',
        soilPHAvg: 6,
        hardinessZone: 8,
        water: 'Once a month',
        nativeRegion: region6._id
    },
    {
        commonName: 'Purple Shamrock',
        scientificName: 'Oxalis regnellii',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 12,
        soilType: 'Well draining',
        soilPHAvg: 6.2,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region6._id
    },
    {
        commonName: 'Peace Lily',
        scientificName: 'Spathiphyllum',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region3._id
    },
    {
        commonName: 'Nerve Plant',
        scientificName: 'Fittonia Verschaffeltii',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 3,
        soilType: 'Medium moisture',
        soilPHAvg: 4,
        hardinessZone: 11,
        water: 'Twice a week',
        nativeRegion: region3._id
    },
    {
        commonName: 'Chinese Evergreen',
        scientificName: 'Aglaonema commutatum',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 20,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Snake Plant',
        scientificName: 'Sansevieria trifasciata',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 9,
        water: 'Once a month',
        nativeRegion: region6._id
    },

    {
        commonName: 'Wandering Jew (Spiderwort)',
        scientificName: 'Tradescantia zebrina',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 9,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region4._id
    },
    {
        commonName: 'Aeonium Kiwi',
        scientificName: 'Aeonium haworthii Kiwi',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Cactus mix',
        soilPHAvg: 6.5,
        hardinessZone: 10,
        water: 'Once a month',
        nativeRegion: region6._id
    },
    {
        commonName: 'American Beech Tree',
        scientificName: 'Fagus grandifolia',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 720,
        soilType: 'Medium moisture',
        soilPHAvg: 5.5,
        hardinessZone: 5,
        water: 'Once a week',
        nativeRegion: region2._id
    },
    
    {
        commonName: 'Angel Trumpet',
        scientificName: 'Burgmansia spp.',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 120,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Bi-weekly',
        nativeRegion: region3._id
    },
    {
        commonName: 'Holly',
        scientificName: 'llex opaca',
        img: 'sdfd',
        sunExposure: 'Part', 
        matureSize: 480,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Bi-weekly',
        nativeRegion: region2._id
    }, 
   
    {
        commonName: 'Cuban Royal Palm',
        scientificName: 'Roystonea regia',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 720,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region4._id
    },
    {
        commonName: 'Carnation',
        scientificName: 'Dianthus caryophyllus',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 15,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region5._id 
    },
    {
        commonName: 'Witch Hazel',
        scientificName: 'Hamamelis virginiana',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 180,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Twice a week',
        nativeRegion: region2._id
    },
    {
        commonName: 'Wild Cosmos',
        scientificName: 'Cosmos caudatus',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 60,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region2._id
    },
    {
        commonName: 'White Sage',
        scientificName: 'Salvia apiana',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 7.5,
        water: 'Once a week',
        nativeRegion: region2._id
    },
    {
        commonName: 'Weeping Willow',
        scientificName: 'Salix babylonica',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 600,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Ficus',
        scientificName: 'Ficus benjamina',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 240,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Wallflower',
        scientificName: 'Erysimum',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 8,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region5._id 
    },
    {
        commonName: 'Virgina Blue Bells',
        scientificName: 'Mereensia virginica',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 5,
        water: 'Once a week',
        nativeRegion: region2._id
    },
    {
        commonName: 'Virgina Blue Fern',
        scientificName: 'Ehlebodium areolatum',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 7,
        water: 'Once a week',
        nativeRegion: region4._id
    },
    {
        commonName: 'Verona Vain',
        scientificName: 'Parthenocissus striata',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 9,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Venus Fly Trap',
        scientificName: 'Dionaea muscipula',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 8,
        soilType: 'Medium moisture',
        soilPHAvg: 5,
        hardinessZone: 6,
        water: 'Twice a week',
        nativeRegion: region2._id 
    },
    {
        commonName: 'Tulip',
        scientificName: 'Tuplia',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 20,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 5,
        water: 'Once a week',
        nativeRegion: region5._id
    }, 
    {
        commonName: 'Toad Lily',
        scientificName: 'Tricyrtis hirta',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 30,
        soilType: 'Medium mosisture',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Tiger Flower',
        scientificName: 'Tigridia pavonia',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 9,
        water: 'Twice a week',
        nativeRegion: region2._id

    }, 
    {
        commonName: 'Ti Plant (Good luck plant)',
        scientificName: 'Cordyline terminalias',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'The Geo Plant',
        scientificName: 'Geogenanthus ciliatus',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 6,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region3._id 
    },
    {
        commonName: 'Texas Sage',
        scientificName: 'Salvia coccinea',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 36,
        soilType: 'Cactus mix',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Twice a week',
        nativeRegion: region2._id
    },
    {
        commonName: 'String Of Bananas',
        scientificName: 'Senecio radicans',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 36,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 11,
        water: 'Bi-weekly',
        nativeRegion: region6._id
    },
    {
        commonName: 'Stinging Nettle',
        scientificName: 'Urtica Dioica',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 72,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region2._id
    },
    {
        commonName: 'Stargazer Lily',
        scientificName: 'Lilium stargazer',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Spiral Aloe',
        scientificName: 'Aloe ployehylla',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 12,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 8,
        water: 'Once a month',
        nativeRegion: region6._id
    },
    {
        commonName: 'Spider Plant',
        scientificName: 'Chlorophytum comosum',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 36,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region6._id 
    },
    {
        commonName: 'Snow Pea',
        scientificName: 'Pisum sativum var',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 18,
        soilType: 'Medium moisture',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Three times a week',
        nativeRegion: region5._id 
    },
    {
        commonName: 'Slipper plant',
        scientificName: 'Euphorbia lomelii',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 60,
        soilType: 'Well draining',
        soilPHAvg: 7,
        hardinessZone: 8,
        water: 'Bi-weekly',
        nativeRegion: region3._id
    },
    {
        commonName: 'Silver Sword',
        scientificName: 'Philodendron hastatum',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 12,
        soilType: 'Well draining',
        soilPHAvg: 5,
        hardinessZone: 7,
        water: 'Once a week',
        nativeRegion: region3._id
    },
    {
        commonName: 'Silver Dragon Alocasia',
        scientificName: 'Alocasia baginda silver dragon',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 6,
        soilType: 'Well draining',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Twice a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Satin Tothos',
        scientificName: 'Scindapsus pictus',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Medium moisture',
        soilPHAvg: 6.5,
        hardinessZone: 11,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Sago Palm',
        scientificName: 'Cycas revoluta',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 120,
        soilType: 'Medium moisture',
        soilPHAvg: 6,
        hardinessZone: 10,
        water: 'Once a week',
        nativeRegion: region1._id  
    },
    {
        commonName: 'Moon Cactus',
        scientificName: 'Gymnocalycium mihanodichii',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 8,
        soilType: 'Cactus mix',
        soilPHAvg: 6,
        hardinessZone: 12,
        water: 'Once a month',
        nativeRegion: region2._id
    },
    {
        commonName: 'Rockrose',
        scientificName: 'Cistus',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 7,
        water: 'Once a week',
        nativeRegion: region5._id
    },
    {
        commonName: 'Red Spider Lily',
        scientificName: 'Lycoris Radiata',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 24,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region1._id 

    },
    {
        commonName: 'Red Ginger',
        scientificName: 'Alpinia Purpurata',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 48,
        soilType: 'Well draining',
        soilPHAvg: 6.5,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region1._id
    },
    {
        commonName: 'Rain Lily',
        scientificName: 'Zephyranthes',
        img: 'sdfd',
        sunExposure: 'Full sun', 
        matureSize: 12,
        soilType: 'Medium moisture',
        soilPHAvg: 6.5,
        hardinessZone: 8,
        water: 'Once a week',
        nativeRegion: region3._id
    },
    {
        commonName: 'Pussy Willow',
        scientificName: 'Salix discolor',
        img: 'sdfd',
        sunExposure: 'Part sun', 
        matureSize: 120,
        soilType: 'Medium Moisture',
        soilPHAvg: 7,
        hardinessZone: 6,
        water: 'Once a week',
        nativeRegion: region2._id
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