import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import GameCard from "../components/GameCard";
const Games = () => {
    const games = [
        {
          title: 'Grand Theft Auto V',
          image: 'https://wallpaperaccess.com/full/938899.jpg',
          link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
          platform: 'PC/PS/Xbox',
          rating: 92,
        },
        {
          title: 'The Witcher 3: Wild Hunt',
          image: 'https://wallpaperaccess.com/full/384090.jpg',
          link: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
          platform: 'PC/PS/Xbox',
          rating: 95,
        },
        {
            title: 'The Legend of Zelda: Breath of the Wild',
            image: 'https://4kwallpapers.com/images/walls/thumbs/16733.jpg',
            link: 'https://store.steampowered.com/app/1316840/theHunter_Call_of_the_Wild__Silver_Ridge_Peaks/',
            platform: 'Nintendo Switch',
            rating: 97
          },
          {
            title: 'Red Dead Redemption 2',
            image: 'https://4kwallpapers.com/images/walls/thumbs/9051.jpg',
            link: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
            platform: 'PC/PS/Xbox',
            rating: 94
          },
          {
            title: 'Dark Souls III',
            image: 'https://4kwallpapers.com/images/walls/thumbs/18750.jpg',
            link: 'https://store.steampowered.com/app/374320/DARK_SOULS_III/',
            platform: 'PC/PS/Xbox',
            rating: 89
          },
          {
            title: 'Hollow Knight',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIU2Q68E_agUPrdDuJo51aZv0ixvYL-K_tH640q0iWglpd9iP&s',
            link: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
            platform: 'PC/PS/Switch',
            rating: 90
          },
          {
            title: 'Sekiro: Shadows Die Twice',
            image: 'https://4kwallpapers.com/images/walls/thumbs/14163.jpg',
            link: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/',
            platform: 'PC/PS/Xbox',
            rating: 94
          },
          {
            title: 'Super Mario Odyssey',
            link: 'https://store.steampowered.com/app/2016560/Oblivion_Eclipse/',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YqsdetZHLetx9sXR9pgk1DySKmFxAwsNmU4arOluAtMzzD8&s',
            platform: 'Nintendo Switch',
            rating: 97
          },
          {
            title: 'God of War',
            image: 'https://4kwallpapers.com/images/walls/thumbs/16038.jpg',
            link: 'https://store.steampowered.com/app/1593500/God_of_War/',
            platform: 'PS4',
            rating: 94
          },
          {
            title: 'DOOM Eternal',
            image: 'https://4kwallpapers.com/images/walls/thumbs/5240.jpg',
            link: 'https://store.steampowered.com/app/782330/DOOM_Eternal/',
            platform: 'PC/PS/Xbox',
            rating: 89
          },
          {
            title: 'Final Fantasy VII Remake',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYQ0P4C5A51xy5NEde6fzs8-41YIFr2qPlyDWKAx0lMZfI1E&s',
            link: 'https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/',
            platform: 'PS4',
            rating: 92
          },
          {
            title: 'Cyberpunk 2077',
            image: 'https://4kwallpapers.com/images/walls/thumbs/16282.jpg',
            link: 'https://store.steampowered.com/agecheck/app/1091500/',
            platform: 'PC/PS/Xbox',
            rating: 87
          },
          {
            title: 'Overwatch 2',
            image: 'https://4kwallpapers.com/images/walls/thumbs/18338.jpg',
            link: 'https://store.steampowered.com/app/2357570/Overwatch_2/',
            platform: 'PC/PS/Xbox',
            rating: 91
          },
          {
            title: 'Resident Evil 2',
            image: 'https://4kwallpapers.com/images/walls/thumbs/18280.jpg',
            link: 'https://store.steampowered.com/app/883710/Resident_Evil_2/',
            platform: 'PC/PS/Xbox',
            rating: 93
          },
          {
            title: 'Minecraft',
            image: 'https://4kwallpapers.com/images/walls/thumbs/16695.jpg',
            link: 'https://store.steampowered.com/app/1928870/Minecraft_Legends/',
            platform: 'PC/PS/Xbox/Switch',
            rating: 92
          },
          {
            title: 'Fortnite',
            image: 'https://4kwallpapers.com/images/walls/thumbs/18522.jpg',
            link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
            platform: 'PC/PS/Xbox/Switch',
            rating: 88
          },
          {
            title: 'Apex Legends',
            image: 'https://4kwallpapers.com/images/walls/thumbs/17902.jpg',
            link: 'https://store.steampowered.com/app/1172470/Apex_Legends/',
            platform: 'PC/PS/Xbox',
            rating: 89
          },
          {
            title: 'The Last of Us Part I',
            image: 'https://4kwallpapers.com/images/walls/thumbs/13727.jpg',
            link: 'https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/',
            platform: 'PS4',
            rating: 93
          },
          {
            title: 'Assassin’s Creed Valhalla',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aKFhLa84ykJkYAWPezhsIUF0227Vep0TpVxmJHNCH1rDaZ0&s',
            link: 'https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/',
            platform: 'PC/PS/Xbox',
            rating: 88
          },
          {
            title: 'Ghost of Tsushima',
            image: 'https://4kwallpapers.com/images/walls/thumbs/12887.jpeg',
            link: 'https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/',
            platform: 'PS4',
            rating: 92
          },
          {
            title: 'Monster Hunter: World',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-6wbnUhQk3yEhqsCtVUPmGJKVhdUqXhDtfQSndUZLWIY5BX2&s',
            link: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/',
            platform: 'PC/PS/Xbox',
            rating: 90
          },
          {
            title: 'Battlefield V',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOByfQdKxqw9q5KToXClJAfHbN86DAu7UDmhqmG4M_XmUwZLq&s',
            link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
            platform: 'PC/PS/Xbox',
            rating: 84
          },
          {
            title: 'Fall Guys: Ultimate Knockout',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExurD_gJLwgt3Dh5vj8WxwcoviHtlaVXt73yIte15SZUQ0pc&s',
            link: 'https://store.steampowered.com/app/1677740/Stumble_Guys/',
            platform: 'PC/PS/Xbox/Switch',
            rating: 85
          },
          {
            title: 'Kamla',
            image: 'https://th.bing.com/th/id/OIP.NvJWuhynEibHhTe5DecUvwHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7',
            link: 'https://store.steampowered.com/app/2585270/KAMLA/',
            platform: 'PC/PS/Switch',
            rating: 90
          },
          {
            title: 'Ori and the Will of the Wisps',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR393W6zWd8Ov16VoDWzCKtDqw81N_eNnTdyMeZkjVhs5Y9h-4&s',
            link: 'https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/',
            platform: 'PC/Xbox',
            rating: 88
          },
          {
            title: 'DOOM Eternal',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaBiYv-k6HfP7owiMdPTU7W07IIipM4EAVMpHx7stDtyyRJKe&s',
            link: 'https://store.steampowered.com/app/782330/DOOM_Eternal/',
            platform: 'PC/PS/Xbox/Switch',
            rating: 89
          },
          {
            title: 'Red Dead Redemption 2',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WHpvwsJ6OIIF8eNwEFRF38eFImeCHreQ26TY81c_4n23nQc&s',
            link: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
            platform: 'PC/PS/Xbox',
            rating: 95
          },
          {
            title: 'Resident Evil 4',
            image: 'https://4kwallpapers.com/images/walls/thumbs/8654.jpg',
            link: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/',
            platform: 'PC/PS/Xbox',
            rating: 93
          },
          {
            title: 'Sekiro: Shadows Die Twice',
            image: 'https://4kwallpapers.com/images/walls/thumbs/14166.jpeg',
            link: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/',
            platform: 'PC/PS/Xbox',
            rating: 91
          },
          {
            title: 'Final Fantasy VII',
            image: 'https://4kwallpapers.com/images/walls/thumbs/13676.jpg',
            link: 'https://store.steampowered.com/app/39140/FINAL_FANTASY_VII/',
            platform: 'PS4',
            rating: 89
          },
          {
            title: 'Backroom',
            image: 'https://th.bing.com/th/id/OIP.6MpQ2JYLe_l7AbF22nhNeQHaEK?w=342&h=180&c=7&r=0&o=5&pid=1.7',
            link: 'https://store.steampowered.com/app/2259380/Backroom/',
            platform: 'PC',
            rating: 92
          },
          {
            title: 'Raft',
            image: 'https://th.bing.com/th?id=OIP.fg_9T6LlBdVYwp01os0fkAHaEK&w=298&h=167&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source',
            link: 'https://store.steampowered.com/app/648800/Raft/',
            platform: 'PC',
            rating: 92
          },
          {
            title: 'A Way Out',
            image: 'https://th.bing.com/th?id=OIP.0n_cOKF-5syGzDh8mJmVVAHaEP&w=298&h=170&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source',
            link: 'https://store.steampowered.com/app/1222700/A_Way_Out/',
            platform: 'PC',
            rating: 92
          },
          {
            title: 'Pico Park',
            image: 'https://th.bing.com/th?id=OIP.9h4xcchsnwyz4oXHAvohMgHaEP&w=298&h=170&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source',
            link: 'https://store.steampowered.com/app/1509960/PICO_PARK/',
            platform: 'PC',
            rating: 92
          },
          {
            title: 'Stumble Guys',
            image: 'https://th.bing.com/th/id/OIP.oAX6078A4XiEqHEm_xQqQwHaEK?w=284&h=180&c=7&r=0&o=5&pid=1.7',
            link: 'https://store.steampowered.com/app/1677740/Stumble_Guys/',
            platform: 'PC',
            rating: 92
          },
          {
            title: 'Half-Life: Alyx',
            image: 'https://th.bing.com/th?id=OIP.aCnr5JMAnJhUYoX8zIcKqQAAAA&w=312&h=200&c=12&rs=1&o=6&pid=13.1',
            link: 'https://store.steampowered.com/app/546560/HalfLife_Alyx/',
            platform: 'PC',
            rating: 92
          },
          {
            title: 'Ori and the Will of the Wisps',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR393W6zWd8Ov16VoDWzCKtDqw81N_eNnTdyMeZkjVhs5Y9h-4&s',
            link: 'https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/',
            platform: 'PC/Xbox',
            rating: 90
          },
          {
            title: 'Assassin’s Creed Valhalla',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aKFhLa84ykJkYAWPezhsIUF0227Vep0TpVxmJHNCH1rDaZ0&s',
            link: 'https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/',
            platform: 'PC/PS/Xbox',
            rating: 84
          },
          {
            title: 'Star Wars Jedi: Fallen Order',
            image: 'https://4kwallpapers.com/images/walls/thumbs/12.jpg',
            link: 'https://store.steampowered.com/app/1172380/STAR_WARS_Jedi_Fallen_Order/',
            platform: 'PC/PS/Xbox',
            rating: 87
          },
          {
            title: 'The Last of Us Part I',
            image: 'https://4kwallpapers.com/images/walls/thumbs/15375.jpg',
            link: 'https://store.steampowered.com/app/1888930/The_Last_of_Us_Part_I/',
            platform: 'PS4',
            rating: 93
          },
          {
            title: 'Apex Legends',
            image: 'https://4kwallpapers.com/images/walls/thumbs/12707.jpeg',
            link: 'https://store.steampowered.com/app/1172470/Apex_Legends/',
            platform: 'PC/PS/Xbox/Switch',
            rating: 88
          },
          {
            title: 'Valorant',
            image: 'https://4kwallpapers.com/images/walls/thumbs/19112.png',
            link: 'https://store.steampowered.com/app/1857090/Norland/',
            platform: 'PC',
            rating: 80
          },
          {
            title: 'Fortnite',
            image: 'https://4kwallpapers.com/images/walls/thumbs/18522.jpg',
            link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
            platform: 'PC/PS/Xbox/Switch/Mobile',
            rating: 83
          },
          {
            title: 'Among Us',
            image: 'https://4kwallpapers.com/images/walls/thumbs/3970.jpg',
            link: 'https://store.steampowered.com/app/945360/Among_Us/',
            platform: 'PC/Mobile/Switch',
            rating: 82
          },
          {
            title: 'Genshin Impact',
            image: 'https://4kwallpapers.com/images/walls/thumbs/8410.jpg',
            link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
            platform: 'PC/PS/Mobile',
            rating: 84
          },
          {
            title: 'Hollow Knight',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfr5GKcbgeFBlhyA2mfue9QoWG-k3m-JPBj28voEFwE6Eqz4W3&s',
            link: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
            platform: 'PC/PS/Xbox/Switch',
            rating: 92
          },
          {
            title: 'Overwatch 2',
            image: 'https://4kwallpapers.com/images/walls/thumbs/14749.jpg',
            link: 'https://store.steampowered.com/app/2357570/Overwatch_2/',
            platform: 'PC/PS/Xbox/Switch',
            rating: 88
          },
          {
            "title": "God of War Ragnarok",
            "image": "https://4kwallpapers.com/images/walls/thumbs/8677.jpg",
            "link": 'https://store.steampowered.com/app/2322010/God_of_War_Ragnark/',
            "platform": "PC/PS",
            "rating": 94
          },
          {
            "title": "Minecraft Legends",
            "image": "https://4kwallpapers.com/images/walls/thumbs/11204.jpg",
            "link": 'https://store.steampowered.com/app/1928870/Minecraft_Legends/',
            "platform": "PC/PS/Xbox/Switch/Mobile",
            "rating": 85
          },
          {
            "title": "League of Legends",
            "image": "https://4kwallpapers.com/images/walls/thumbs/18711.jpg",
            "link": 'https://store.steampowered.com/app/1276800/CONVERGENCE_A_League_of_Legends_Story/',
            "platform": "PC",
            "rating": 78
          },
          {
            "title": "Hades",
            "image": "https://4kwallpapers.com/images/walls/thumbs/16818.jpg",
            "link": 'https://store.steampowered.com/app/1145360/Hades/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 93
          },
          {
            "title": "The Legend of Zelda: Breath of the Wild",
            "image": "https://4kwallpapers.com/images/walls/thumbs/11200.jpg",
            "link": 'https://store.steampowered.com/app/383870/Firewatch/',
            "platform": "Switch",
            "rating": 97
          },
          {
            "title": "Horizon Zero Dawn",
            "image": "https://4kwallpapers.com/images/walls/thumbs/19062.jpg",
            "link": 'https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/',
            "platform": "PC/PS",
            "rating": 89
          },
          {
            "title": "Control",
            "image": "https://th.bing.com/th?id=OIP.oWF-1Dmad556LPOFMyalSwHaEP&w=312&h=200&c=12&rs=1&qlt=99&o=6&pid=13.1",
            "link": 'https://store.steampowered.com/app/870780/Control_Ultimate_Edition/',
            "platform": "PC/PS/Xbox",
            "rating": 85
          },
          {
            "title": "The Last Faith",
            "image": "https://4kwallpapers.com/images/walls/thumbs/13077.jpg",
            "link": 'https://store.steampowered.com/app/1274600/The_Last_Faith/',
            "platform": "PS4",
            "rating": 92
          },
          {
            "title": "Cuphead",
            "image": "https://th.bing.com/th?id=OIP.3aLIv8yCvh-g4cKiDIuTuwHaEK&w=298&h=167&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source",
            "link": 'https://store.steampowered.com/app/268910/Cuphead/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 88
          },
          {
            "title": "Outer Wilds",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtN048NjZGqgDHNM5FjAgk3EWClF5jTXDjV6PnJ9hMt7GDG4M&s",
            "link": 'https://store.steampowered.com/app/753640/Outer_Wilds/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 90
          },
          {
            "title": "Destiny 2",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bv9_Pe9cdtUpBktyjU21gy4MuSUOChtlACMDOXBwKE_-Jcg&s",
            "link": 'https://store.steampowered.com/app/1085660/Destiny_2/',
            "platform": "PC/PS/Xbox",
            "rating": 82
          },
          {
            "title": "Celeste",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqE_fYIPRdkth-CYz_uKnQ1ZK3IkO5I6LKbfDsXFf3sUB3b9o&s",
            "link": 'https://store.steampowered.com/app/504230/Celeste/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 94
          },
          {
            "title": "Animal Crossing: New Horizons",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPz-X1azi2EijD2fonTCmuWzAkuUa1xiCIYVk6zDOyJiTrjhk&s",
            "link": 'https://store.steampowered.com/app/645390/Factorio_Space_Age/',
            "platform": "Switch",
            "rating": 90
          },
          {
            "title": "Persona 5",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEkD108iZ4nlXm_JzzUtQbfy5jrTm2-jYQ6OcaFeRGq1b5nIQD&s",
            "link": 'https://store.steampowered.com/app/1687950/Persona_5_Royal/',
            "platform": "PS4",
            "rating": 95
          },
          {
            "title": "Splatoon 2",
            "image": "https://th.bing.com/th/id/OIP.iDEPmlc5j6T9ZBzm9PM7HQHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7",
            "link": 'https://store.steampowered.com/app/532320/de_Blob/',
            "platform": "Switch",
            "rating": 87
          },
          {
            "title": "Hitman 3",
            "image": "https://4kwallpapers.com/images/walls/thumbs/1277.png",
            "link": 'https://store.steampowered.com/app/1829596/HITMAN_3__Trinity_Pack/',
            "platform": "PC/PS/Xbox",
            "rating": 88
          },
          {
            "title": "Tomb Raider (2013)",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GvrVxlKkstzTBQzHtXMwjsbFLXyUAEp17VfQZjPhg8ewgvs&s",
            "link": 'https://store.steampowered.com/app/203160/Tomb_Raider/',
            "platform": "PC/PS/Xbox",
            "rating": 87
          },
          {
            "title": "Monster Hunter: World",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-6wbnUhQk3yEhqsCtVUPmGJKVhdUqXhDtfQSndUZLWIY5BX2&s",
            "link": 'https://store.steampowered.com/app/582010/Monster_Hunter_World/',
            "platform": "PC/PS/Xbox",
            "rating": 90
          },
          {
            "title": "Far Cry 5",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8H4naQJsU3OXNL-YbtpK8576nKlednkKOrpRsp3ii1iuDFW9x&s",
            "link": 'https://store.steampowered.com/app/552520/Far_Cry_5/',
            "platform": "PC/PS/Xbox",
            "rating": 79
          },
          {
            "title": "Metal Gear Solid V: The Phantom Pain",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzDhh2qCM65ZW7rizyqwvFknusRGr6RCRNca5aB-oalc4blk&s",
            "link": 'hhttps://store.steampowered.com/app/287700/METAL_GEAR_SOLID_V_THE_PHANTOM_PAIN/',
            "platform": "PC/PS/Xbox",
            "rating": 93
          },
          {
            "title": "Shadow of the Tomb Raider",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8LmDSxeC_S7qEtXoXVXHqpTDhuUIQ6EODePjjhYVTw2GgI8&s",
            "link": 'https://store.steampowered.com/app/750920/Shadow_of_the_Tomb_Raider_Definitive_Edition/',
            "platform": "PC/PS/Xbox",
            "rating": 78
          },
          {
            "title": "Dragon Age: Inquisition",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrkHQVHwUXFdEPtiNCPNcGGRkh7x5ZmlmDh5M6aFCDgB8nyw&s",
            "link": 'https://store.steampowered.com/app/1845910/Dragon_Age_The_Veilguard/',
            "platform": "PC/PS/Xbox",
            "rating": 82
          },
          {
            "title": "FIFA 22",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNrHoKrR-bixgnZVI7-P7_s1ZFm8ujUM6vc8tQmeZWk9QE4g&s",
            "link": 'https://store.steampowered.com/app/1506830/FIFA_22/',
            "platform": "PC/PS/Xbox",
            "rating": 78
          },
          {
            "title": "The Elder Scrolls V: Skyrim",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAz74EHP5dlfQ7-6UXEwHaCRu62CcPh8iS9rjDpzJ_Kicems&s",
            "link": 'https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 94
          },
          {
            "title": "Metro Exodus",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5oiQ24IywMmneVwus4dYh9Ztvuzb7w1nwGRten17pMHCDjHo&s",
            "link": 'https://store.steampowered.com/app/412020/Metro_Exodus/',
            "platform": "PC/PS/Xbox",
            "rating": 82
          },
          {
            "title": "The Division 2",
            "image": "https://4kwallpapers.com/images/walls/thumbs/8264.jpg",
            "link": 'https://store.steampowered.com/app/2927620/The_Division_2__One_time_offer_Wrapped_Pack_2024/',
            "platform": "PC/PS/Xbox",
            "rating": 77
          },
          {
            "title": "Dishonored 2",
            "image": "https://th.bing.com/th?id=OIP.jIbrZUsM8D-7-OJjCMeRvQHaEP&w=312&h=200&c=12&rs=1&qlt=99&o=6&pid=13.1",
            "link": 'https://store.steampowered.com/app/403640/Dishonored_2/',
            "platform": "PC/PS/Xbox",
            "rating": 86
          },
          {
            "title": "Nier: Automata",
            "image": "https://4kwallpapers.com/images/walls/thumbs/12737.jpg",
            "link": 'https://store.steampowered.com/app/1113560/NieR_Replicant_ver122474487139/',
            "platform": "PC/PS/Xbox",
            "rating": 91
          },
          {
            "title": "Resident Evil Village",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_heDM431swhSaUUksXAtTs-tKf3VHpF_L-i9kpN_EnCLFTfH&s",
            "link": 'https://store.steampowered.com/app/1196590/Resident_Evil_Village/',
            "platform": "PC/PS/Xbox",
            "rating": 83
          },
          {
            "title": "GTA Vice City 2",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZQnDxH1V-Q-oDa8De059eqi-MgPJpRcEEwJx1qv_YIvTHIc&s",
            "link": 'https://store.steampowered.com/app/12180/Grand_Theft_Auto_2/',
            "platform": "PS4",
            "rating": 89
          },
          {
            "title": "Pubg",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRul8akjrYhNwkFZ5cLEErfMJ0Pdesw6xFB3fweWC2N45ZcimaI&s",
            "link": 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/',
            "platform": "PC/PS/Xbox",
            "rating": 92
          },
          {
            "title": "Marvel's Spider-Man Miles Morales",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsO6rf63qwlkKhmnO0M7t9041OhlnHKq8LcloH-hXBq4nQtY&s",
            "link": 'https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/',
            "platform": "PC/PS",
            "rating": 88
          },
          {
            "title": "Fears Of Fathom : Woodbury Getaway",
            "image": "https://th.bing.com/th?id=OIP._ufvop2smswc3-kpnVYVNgHaEK&w=312&h=200&c=12&rs=1&o=6&pid=13.1",
            "link": 'https://store.steampowered.com/app/2961530/Fears_to_Fathom__Woodbury_Getaway/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 94
          },
          {
            "title": "Marvel's Spider-Man Remastered",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdDY5fBFjcT47BC5E01oKhvM0lMf-eWRPLPLXagS0Vt3DurjT&s",
            "link": 'https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 88
          },
          {
            "title": "Walking Dead",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1fLOl6J6CvIKYgLqZYunEqgRoNiFDnjw846jzlZ0R0pPhGXF&s",
            "link": 'https://store.steampowered.com/app/207610/The_Walking_Dead/',
            "platform": "PC/PS/Xbox/Switch",
            "rating": 85
          },
          {
            "title": "It Takes Two",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Nq1jFuy6_qmt7d_XGiyaGkt_BDKvq_jdl_pYonhhSXvECWo&s",
            "link": 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
            "platform": "PC/PS/Xbox",
            "rating": 91
          },
          {
            "title": "Genshin Impact",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbfjRZXWh3IFSTIbECWFwAL_bluKjmwN7N0zNtVFyic-kKRU8&s",
            "link": 'https://store.steampowered.com/app/2322010/God_of_War_Ragnark/',
            "platform": "PC/PS/Mobile",
            "rating": 83
          },
          {
            "title": "Call of Duty: Warzone",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvE58QmhHUjln43tlym-PViIAUNUqMoCSQuKu5moyu0VM5lM&s",
            "link": 'https://store.steampowered.com/app/1962663/Call_of_Duty_Warzone/',
            "platform": "PC/PS/Xbox",
            "rating": 80
          },
          {
            "title": "Assassin's Creed Odyssey",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobcryQgC-IdwVWBbOWondx5-r2i8f6n9HL3FVnEqd-p-n2LU&s",
            "link": 'https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/',
            "platform": "PC/PS/Xbox",
            "rating": 84
          },
          {
            "title": "Death Stranding",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI6b-WXP3VhB8ezuVcOj8eaMgfoYLrpmAy1Om4vTTVAfBjqZ4K&s",
            "link": 'https://store.steampowered.com/app/1850570/DEATH_STRANDING_DIRECTORS_CUT/',
            "platform": "PC/PS",
            "rating": 82
          },
          {
            "title": "Sekiro: Shadows Die Twice",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLk-OOpNg01em_B9LT3PMGnK-gPpidJ0PT048OtxHUv6ZwseY&s",
            "platform": "PC/PS/Xbox",
            "rating": 91,
            "link": "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/"
          },
        // More game objects here...
      ];
    
      return (
        <div className="bg-gray-900 min-h-screen text-white">
          <Navbar /><br />
          {/* Sidebar below the Navbar */}
          <div className="grid grid-cols-2 gap-6 p-8 pt-10">
            {/* <div className="col-span-1">
              <GameSidebar />
            </div> */}
            <h1>Games</h1>
            
            {/* Games in the remaining columns */}
            <div className="col-span-3">
              <h1 className="text-3xl mb-6">Games</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {games.map((game) => (
                  <GameCard key={game.title} game={game} />
                ))}
              </div>
            </div>
          </div>
      
          <Footer />
        </div>
      );
      
}

export default Games
