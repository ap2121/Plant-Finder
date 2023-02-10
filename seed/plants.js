const db = require('../db')

const Plant = require('../models/plant')
const Region = require('../models/region')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    Plant.collection.drop()
    await Region.collection.drop()
    const region1 = await new Region({
        name: 'Southeast Asia'

    })
    region1.save()
   
    const region2 = await new Region({
        name: 'North America'
    })
    region2.save()
        
    const region3 = await new Region ({
        name: 'South America'
    })
    region3.save()
    
    const region4 = await new Region({
        name: "Caribbean"
    })

    region4.save()
    
    
    const region5 = await new Region({
        name: 'Southern Europe'
    })

    region5.save()
    
    
    const region6 = await new Region({
        name: 'Northern Africa'
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
    }
     
]
    await Plant.insertMany(plants)
    console.log('Created plants')
}

const run = async() => {
    await main()
    db.close()
}

run()