import { array } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      url: "https://3001-cnvorous-plantfinalproje-8ku0pcae2xq.ws-us40.gitpod.io/",
      calendarEntries: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      profile: [], // for login/landing page
      account: [],
      plantLibrary: [
        {
          id: 1,
          scientific_name: "Saintpaulia ionantha",
          common_name: "African Violet",
          size: "Small",
          height: "Short",
          blooms: "Yes",
          seasonal: "Can bloom throughout year.",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            "A good location is close to an east-facing window.",
          temperature: "75°F-80°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/African-Violet-Plant.jpg",
          water_req: "Moderate Level",
          water_day: 9,
          water_tips:
            " Allow the top 1inch- 2inch of soil dry out before watering. Water from the bottom since this helps prevent water getting on the leaves. Set your African Violet in a deep saucer of water for 10 minutes. Refill the water as it is absorbed through the drip holes in the bottom of the pot. Remove any water that is still in the saucer after 10 minutes.",
          fertilizer_req: "Low Level",
          fertilize_month: "every",
          fertilizer_tips:
            "African Violet plant food: Special plant food is available wherever plants are sold. In a pinch, you can use any balanced, soluble, houseplant food diluted to 1/2 the recommended strength. Feed an African Violet plant monthly when the plant is actively growing. Over-fertilizing can cause leaf tip burn, poor flower production, leaf cracks, and may even kill the plant.",
          poisonous:
            "No, These plants are safe to have around children and are not poisonous to dogs and cats.",
          plant_details:
            "The African Violet is a small, compact, short plant with soft, furry, round or oval shaped leaves. The leaves grow close together, in a tight group, at the base of the plant. An African Violet plant did originate in Tanzania and eastern Africa and its flowers do resemble violets, but they are not in the same family as a normal violet plant.",
          plant_care_tips:
            "Brown spots on leaves: Water, especially cold water, has gotten on the leaves. Yellow or pale brown spots on leaves: Sunburn due to being in the direct sun. Leaf edges turn brown and crispy: To much fertilizer.",
        },
        {
          id: 2,
          scientific_name: "Aloe barbadensis miller",
          common_name: "Aloe Vera",
          size: "Small",
          height: "Short",
          blooms: "No",
          seasonal: "Not as an inside house plant",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            "A small aloe vera plant is a perfect for a sunny spot in your kitchen that only gets morning sun.",
          temperature: "65°-85°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/cb76738f43d2d7cfae8f87b3a865ec31.jpg",
          water_req: "Moderate Level",
          water_day: 17,
          water_tips:
            " Water well and then allow the soil to thoroughly dry out before watering again. It may be 2-3 weeks before an aloe vera plants needs to be watered again.",
          fertilizer_req: "Low Level",
          fertilize_month: "every",
          fertilizer_tips:
            "Feed monthly with a 10/40/10 plant food diluted to 1/2 the recommended strength.",
          poisonous:
            "Yes, Although the sap is frequently used medicinally, aloe vera plants are considered poisonous if eaten and should be kept away from pets and children",
          plant_details:
            "An Aloe plant grows well both indoors as a houseplant and outdoors in warms climates.An aloe vera plant has little or no stems to speak of. The long, narrow, plump, triangular shaped green-gray leaves grow as an upright rosette and have serrated edges, so be very careful when handling the plant. Because of the cactus like nature and the sharp teeth on the leaves, an aloe vera plant is sometimes erroneously referred to as a 'Desert Cacti'.",
          plant_care_tips:
            "Root-rot, caused by over watering, is the main problem.",
        },
        {
          id: 3,
          scientific_name: "Chamaedorea Seifrizll Reed Palms",
          common_name: "Bamboo Palm",
          size: "Medium",
          height: "Medium",
          blooms: "No",
          seasonal: "No",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            " It is compact, easy care, tropical looking plant that grows well in medium light.",
          temperature: "65°-80°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Chamaedorea-erumpens-10-2-198x266.jpg",
          water_req: "Low Level",
          water_day: 21,
          water_tips:
            " Allow the top 1/3 of the soil of a bamboo palm to dry out before watering. These plants like barely moist but never soggy soil.",
          fertilizer_req: "Low Level",
          fertilize_month: "3",
          fertilizer_tips:
            "Feed a bamboo palm monthly in the spring and summer with a fertilizer high in nitrogen diluted to 1/2 the recommended strength. Do not fertilize a bamboo palm if it is not actively growing or if the soil is very dry.",
          poisonous:
            "Yes, Bamboo Palm is a slightly poisonous plant and should be kept away from small children. It is also toxic to cats, dogs and other pets.",
          plant_details:
            "A Bamboo Palm is part of the larger Chamaedorea genus of about 105 species of palms. Chamaedorea palms are native to the tropical and subtropical parts of Mexico and Central America. There are about 10-15 fronds on each stem and each frond has 10-14 pinnate (feathery), dark green leaflets. The base of each stem is covered in a tan-colored fiber that resembles bamboo.",
          plant_care_tips:
            "Green leaves drop off when plant is over watered. Green leaves drop off when plant is over watered. Do not rush to repot; Bamboo Palms like to be root bound.",
        },
        {
          id: 4,
          scientific_name: "Caladium",
          common_name: "Elephant Ear",
          size: "Medium",
          height: "Short",
          blooms: "No",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            "Place in your home away from direct sunlight, but in a very bright area.",
          temperature: "70°-85°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Caladium_bicolor_Florida_Sweetheart_Plant_2220px.jpg",
          water_req: "Moderate Level",
          water_day: 10,
          water_tips:
            "The soil of a caladium plant should be moist but never soggy during the growing season.",
          fertilizer_req: "Medium Level",
          fertilize_month: "0.5",
          fertilizer_tips:
            "Fertilize a caladium plant every two weeks when it is actively growing with a water-soluble plant food, high in nitrogen, diluted to at 1/2 the recommended strength. Always dilute the plant food you are giving a caladium plant or the salt in the fertilizer will burn the leaves.",
          poisonous:
            "Yes,  All plants in the Araceae family, including the diffenbachia and philodendron, contain calcium oxalate crystals and are extremely poisonous.",
          plant_details:
            " A Caladium, or Elephant Ear plant, a member of the the Araceae family, is a tuberous, rooted perennial that originally came from South America. Caladium plants, whether indoors or outdoors, look beautiful from late spring until early fall and then die back and become dormant until early spring.  Reduce the water to about once every 4-6  during dormant season.",
          plant_care_tips:
            "A caladium needs high humidity to keep leaves from curling and turning brown. Likes to be watered with tea.",
        },
        {
          id: 5,
          scientific_name: "Chamaedorea Cataractarum Cataract Palms",
          common_name: "Cat Palm",
          size: "Medium",
          height: "Medium",
          blooms: "No",
          seasonal: "No",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            "In a space that will NOT get direct sun iin afternoon.",
          temperature: " 70°- 80°F ",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/il_1588xN.2927488134_2zsg.jpg",
          water_req: "High Level",
          water_day: 4,
          water_tips:
            "Water often enough to keep the barely soil moist, but not soggy, at all times. Never allow the soil to totally dry out.",
          fertilizer_req: "Low Level",
          fertilize_month: "6",
          fertilizer_tips:
            " Less rather than more plant food is always better with palms. Feed a Cat Palm monthly in the spring and summer with a balanced plant food diluted to 1/2 the recommended strength. Fertilize only once or twice during winter and fall when the plant is not actively growing.",
          poisonous:
            "No, Cat Palms are non- 'poisonous' and safe to have around cats, dogs, and small children.",
          plant_details:
            "Cat Palms are native to southeastern Mexico. indoors a Cat Palm is a slow growing, smaller plant eventually reaching a height of about 4-6ft.  This compact, bushy, airy plant doesn’t have a trunk like some other indoor palms.",
          plant_care_tips:
            "If you the plant has Yellow fronds: Underwatering,Brown fronds:  Overwatering. Brown leaf tips: Dry air due to low humidity, using water from a water softener, or using water with a lot of fluorine or chlorine in it. ",
        },
        {
          id: 6,
          scientific_name: "Chrysanthemum Plant",
          common_name: "Mums",
          size: "Medium",
          height: "Medium",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Direct Light",
          most_suitable_location:
            "Direct sun by a window will keep blooms lasting longer.",
          temperature: "70°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/yellow-daisy-chrysanthemum-plant-5d667ff70e259.425.jpg.png",
          water_req: "Moderate Level",
          water_day: 7,
          water_tips:
            "Allow the top few inches of soil to dry out slightly before you water. Green leaves become soft and droopy when the soil is dry.",
          fertilizer_req: "Zero",
          fertilize_month: false,
          fertilizer_tips:
            "Indoor mums do not need to be fertilized because they only last about six weeks.",
          poisonous:
            "Yes,  A Chrysanthemum is considered to be a slightly poisonous plant and should be kept way from small children and pets.",
          plant_details:
            "Chrysanthemums were brought to Japan by Buddhist Monks in 400 AD and have remained a very important part of Japanese culture to this day. The blooms which come in various shapes and colors can be daisy-like, pom-poms, or buttons, and may be yellow, burgundy, pink, or white.",
          plant_care_tips:
            "Mums last 3-4 weeks indoors with very little care and in almost any environment before needing to be replaced.",
        },
        {
          id: 7,
          scientific_name: "Codiaeum Variegatum",
          common_name: "Croton",
          size: "Small",
          height: "Small",
          blooms: "No",
          seasonal: "No",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location: "Place near window facing North/South.",
          temperature: "60°-80°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Codiaeum-petra-08-1.jpg",
          water_req: "Moderate Level",
          water_day: 12,
          water_tips:
            "Allow the top 25%-30% of the soil to dry out before watering. The hard, leathery leaves become soft and flexible when a croton needs water.",
          fertilizer_req: "Medium",
          fertilize_month: "0.5",
          fertilizer_tips:
            "Fertilize monthly in the spring and fall and every two weeks in the summer with a balanced plant food diluted to 1/2 the recommended strength.",
          poisonous:
            "Yes, Crotons are very poisonous plants. They are especially toxic to small children, cats, dogs, and other pets that are often attracted by the brightly colored leaves.",
          plant_details:
            " Croton plants come in 100 different varieties and have become a very popular houseplant within the last 15-20 years. An indoor croton is an upright plant with beautiful, multicolored, hard, leathery, shiny leaves that come decorated in vivid patterns of red, yellow, green, orange, purple, and black",
          plant_care_tips:
            "Leaf Loss: Can be caused by over watering, severe under watering, 'temperature' too low. Loss of  Leaf Color: Leaves may revert to all green when there is not enough light",
        },
        {
          id: 8,
          scientific_name: "Jasmine Polyanthum",
          common_name: "Jasmine",
          size: "Medium",
          height: "Medium",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            "In the day plant needs bright light but at night total darkness",
          temperature: "65°-70°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/jasmine-copy.jpg",
          water_req: "Moderate",
          water_day: 7,
          water_tips:
            "Jasmine plants loses leaves and leaves dry up from both too much and too little water. In the spring and summer, keep the soil moist but never soggy. The top 30% of the soil should dry out before watering",
          fertilizer_req: "Medium",
          fertilize_month: "1",
          fertilizer_tips:
            "Feed a jasmine plant every 2-4 weeks from March-August when the plant is actively growing. Do not feed during the fall and winter when the plant is dormant. Jasmine plants prefer a water soluble plant food high in phosphorous and low in nitrogen.",
          poisonous:
            "No. The flowers of a true jasmine plant (Oleaceae) are nontoxic. The flowers of the false jasmine plant (Loganiaceae) such as Yellow Jasmine or Carolina Jasmine are very poisonous.",
          plant_details:
            "Jasmine plants are very fragrant, flowering plants that originated in China and the tropical areas of Asia. The buds of a jasmine plant are often more fragrant than the flowers.  Jasmine plants have shiny, oval leaves and white, pink, or pale yellow tubular flowers. An indoor jasmine plant usually flowers in January and February.",
          plant_care_tips:
            " Avoid putting a jasmine plant in the direct sun during the summer, the intensity of the sun will burn the leaves.",
        },
        {
          id: 9,
          scientific_name: "Crassula Ovata",
          common_name: "Jade",
          size: "Medium",
          height: "Medium",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            "This plant prefers morning sun so set near windown facing East.",
          temperature: "60°-70°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Crassula-argentea-12-1.jpg",
          water_req: "Low Level",
          water_day: 23,
          water_tips:
            "Allow the soil to practically dry out and the leaves to become a little soft and flat before watering.",
          fertilizer_req: "Low",
          fertilize_month: "3",
          fertilizer_tips:
            "Feed a few times (2-3) in spring and summer. Do not over fertilize.",
          poisonous:
            "Yes, Jade plants are toxic to dogs, cats, and other pets. The sap of the plant is an irritant should be kept away from small children.",
          plant_details:
            "Originally found in the dry hills of South Africa, it is very tolerant of all types of conditions except one – over watering. A jade plant got the name 'Money Plant' because, according the Feng Shui,  having it in your home, business, or office brings you prosperity and good luck.",
          plant_care_tips:
            "The main reason a jade plant loses leaves and eventually dies is from over watering due to rot rot.",
        },
        {
          id: 10,
          scientific_name: "Kalanachoe Blossfeldiana",
          common_name: "Kalanachoe",
          size: "Small",
          height: "Short",
          blooms: "Yes",
          seasonal: "No",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location:
            "A window facing any direction as long as indirect light.",
          temperature: "60°-85°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/il_794xN.2350555218_dqqh.jpg",
          water_req: "Low Level",
          water_day: 25,
          water_tips:
            "Always allow the top 50% of the soil to dry-out before watering a kalanchoe. The succulent kalanchoe plant has plump leaves that store water for long periods of time. These plants are easily over-watered which results in root-rot.",
          fertilizer_req: "Low",
          fertilize_month: "1",
          fertilizer_tips:
            "Fertilize monthly when the plant is actively growing with a fertilizer high in nitrogen diluted to 1/2 the recommended strength. If the soil is very dry, moisten the soil with plain water before fertilizing; this prevents the plant food from burning the roots.",
          poisonous: "Yes, plant is toxic to cats and dogs.",
          plant_details:
            "At one time, a kalanchoe plant was only sold as a flowering Christmas plant. Today kalanchoe plants are sold in bloom throughout the year and are one of our most popular indoor, flowering houseplants. The kalanchoe 'blossfeldiana' is the most frequently sold variety. This is a short, bushy, upright plant, about 12 inch to 18 inches tall and  6 inches to 20  inches wide , with thick, oval-shaped, scalloped leaves. The long-lasting, star-like blooms on a kalanchoe blossfeldiana appear in clusters at the ends of sturdy stems throughout the year.As the days get shorter and a kalanchoe experiences longer periods of darkness, the plant produces more flowers.",
          plant_care_tips:
            "Direct sun in the summer is too intense and burns the leaves.",
        },
        {
          id: 11,
          scientific_name: "Dracaena Sanderiana",
          common_name: "Lucky Bamboo",
          size: "Small",
          height: "Small",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location: "North or South facing window",
          temperature: " 70°-85",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Lucky-Bamboo.jpeg",
          water_req: "Low Level",
          water_day: 25,
          water_tips:
            "Keep the marbles and pebbles in your vase covered with water at all times. Add water to the container to keep the proper level.  Once a month rinse out stem and add replace fresh water. ",
          fertilizer_req: "Low",
          fertilize_month: "1",
          fertilizer_tips:
            "Fertilize monthly in the spring and summer with an African Violet plant food diluted to 1/2 the recommended strength",
          poisonous:
            "Yes, It is considered to be a mildly to moderately poisonous plant, especially to dogs and cats.",
          plant_details:
            "A Lucky Bamboo plant is really made up of the cut stalks of a Dracaena Sanderiana and is native to West Africa and Eastern Asia. The Lucky Bamboo plant stalks are usually 4″- 24″in height. A Lucky Bamboo plant produces flowers that only appear at night. The blooms are made up of many small flowers and have a slight scent.",
          plant_care_tips:
            "Pale leaves indicate the plant is not getting enough light. Avoid placing a Lucky Bamboo plant in the direct sun. Excessive fertilizer causes the leaves to turn yellow.",
        },
        {
          id: 12,
          scientific_name: "Spathiphyllum",
          common_name: "Peace Lilly",
          size: "Medium",
          height: "Medium",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect  Light",
          most_suitable_location:
            "A place with medium to indirect bright light to grow faster and develop flowers.",
          temperature: "65°-85°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Spathiphyllum-Ceres-06-1.jpg",
          water_req: "Moderate Level",
          water_day: 15,
          water_tips:
            "Wait until leaves get soft and droop a little before watering. Allow the top 50% of the soil to dry out before watering.",
          fertilizer_req: "Low",
          fertilize_month: "2",
          fertilizer_tips:
            " Feed every other month when the plant is actively growing with a balanced plant food diluted to 1/2 the recommended strength.",
          poisonous:
            "Yes, A Peace Lily is a poisonous plant and dangerous to have near cats, dogs, and small children.",
          plant_details:
            "A Peace Lily (not really a true lily). A Peace Lily is a beautiful, indoor houseplant that grows between 1- 4ft tall. It has large, glossy, oval, dark green leaves. The leaves do not develop on stems but come directly out of the soil. What we think of as the 'white flowers' are really modified leaves called spathes that surround the real, inconsequential flowers. ",
          plant_care_tips:
            "Do not over feed or leaf tips burn.  Too much water, resulting in root rot, is the main reason a Peace Lily dies. Avoid temperatures below 55°F.",
        },
        {
          id: 13,
          scientific_name: "Beaucarnea Recurvata Bottle Palm",
          common_name: "Ponytail Palm",
          size: "Large",
          height: "Large",
          blooms: "No",
          seasonal: "No",
          growth_period: "Spring and Summer",
          light_exposure: "Indriect Light",
          most_suitable_location:
            "Near a North or South window with space to grow.",
          temperature: "60°F and above",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Pont-Tail-Palm.jpeg",
          water_req: "Moderate Level",
          water_day: "12",
          water_tips:
            "Allow the top 50-70% of the soil to dry out before watering. During the warm months you may need to water every 7-14 days; in winter, only every three or four weeks.",
          fertilizer_req: "Moderate",
          fertilize_month: "1",
          fertilizer_tips:
            "Fertilize monthly during the spring and summer with a basic houseplant food diluted to 1/2 the recommended strength.",
          poisonous: "No, A Ponytail Palm is a non-poisonous plant.",
          plant_details:
            "A Ponytail Palm is not really a palm at all, but a relative of the yucca and lily plants and a member of the agave family. A Ponytail Palm has a large, swollen base that some say resembles an elephant’s foot. The thin trunk is topped with flat, dark green, grass-like leaves. The leaves are about an inch wide and often five to six ft. long;  the edges can be quite sharp.",
          plant_care_tips:
            "In proper growing conditions, it can reach a height of up to 8ft. Over- watering is about the only way to kill a Ponytail Palm.",
        },
        {
          id: 14,
          scientific_name: "R. Chinensis Minima",
          common_name: "Miniature Rose",
          size: "Small",
          height: "Small",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Direct Light",
          most_suitable_location:
            "Window East or West facing to get at least 5-7 hours of light.",
          temperature: "60°-75°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/82f981f441dff5e83462c48c41935aae.jpg",
          water_req: "High Level",
          water_day: 3,
          water_tips:
            " Be sure to check the soil every few days. Allow the top 1 inch (2.5cm) of soil to dry out before watering. During the winter, when a miniature rose bush plant is resting, keep the soil barely moist.",
          fertilizer_req: "Moderate",
          fertilize_month: "0.5",
          fertilizer_tips:
            "Feed every two weeks in the spring and summer when the plant is actively growing. Use a fertilizer that is high in phosphorous (5-10-5) at ½ the recommended strength.",
          poisonous:
            "No, Miniature rose bush plants are non-poisonous plants.",
          plant_details:
            "Miniature Rose bush plants, beautiful little hybrid plants that trace their parents back to China, usually appear in stores around Valentine’s Day and Mother’s Day. These indoor houseplant rose bushes  look lovely when first purchased but are difficult to keep indoors on a permanent basis.",
          plant_care_tips:
            "When there is not enough light, rose bushes don’t bloom.  Be careful not to get water on the leaves; wet leaves often cause a fungus called Black Spot to develop.",
        },
        {
          id: 15,
          scientific_name: "Chlorophytym Comosum Airplane Plant",
          common_name: "Spider",
          size: "Small",
          height: "Small",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location: "North or South facing window for medium to bright light.",
          temperature: " 65°- 75°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Chlorophytum-comosum-08-8.jpg",
          water_req: "Low Level",
          water_day: 18,
          water_tips:
            " Allow the top 50% of the soil to dry out before you water.  The green color in the leaves starts to fade when the soil is dry.",
          fertilizer_req: "Low",
          fertilize_month: "1",
          fertilizer_tips:
            "Feed monthly with a balanced plant food diluted to 1/2 the recommended strength. Spider plants need food only when they are actively growing.",
          poisonous: "No, plant is not toxic to dogs, cats, or small children.",
          plant_details:
            "A Spider plant is a member of the asparagus family (Asparagaceae) and is in the same family as the popular asparagus fern. The plant produces grassy-looking, narrow leaves about 8 inch-10inch long and less than 1 inch wide directly from the center of the plant. When kept root-bound, a spider plant sends out numerous long runners (stems) that produce small, delicate, star- shaped, white flowers.",
          plant_care_tips:
            "Wait until the roots have filled the pot before re-potting. Water less in winter when the plant is resting. Feed monthly with a balanced plant food diluted to 1/2 the recommended strength. Over fertilizing can cause brown leaf tip burn.",
        },
        {
          id: 16,
          scientific_name: "Saxifraga Stolonifera",
          common_name: "Strawberry Begonia",
          size: "Small",
          height: "Small",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location: "North or South facing window.",
          temperature: "40-65F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/oldimages/Plant_186/634643396560761551.png",
          water_req: "Moderate Level",
          water_day: 16,
          water_tips:
            "If the top 2 inch- 3inch of soil in the Strawberry Begonia Plant are still moist, do not water. A Strawberry Begonia Plant needs less water in the fall and winter when it is resting",
          fertilizer_req: "Low",
          fertilize_month: "1",
          fertilizer_tips:
            "Fertilize a Strawberry begonia Plant monthly during the spring and summer when the plant is actively growing with a balanced indoor plant food at 1/2 the recommended strength. Do not fertilize a Strawberry Begonia during the fall and winter.",
          poisonous:
            "No, this is a non-poisonous houseplan since it is not in the family as real begonias (which are all poisonous).",
          plant_details:
            "The Strawberry Begonia plant, or Strawberry Geranium as it is sometimes called, is neither a begonia nor a geranium, but rather a member of the Saxifrage family. A Strawberry Begonia produces a lovely, white flower with pointed petals and a bright, yellow center. Like a strawberry plant, new babies develop at the ends of each of the stolen. Indoors or on your porch a Strawberry Begonia makes a beautiful hanging plant. ",
          plant_care_tips:
            "Direct sun burns a Strawberry Begonia Plant and puts holes in the leaves. Always water a Strawberry Begonia from the bottom so no water collects on the hairs of the leaves.",
        },
        {
          id: 17,
          scientific_name: "EUPHORBIA TIRUCALLI",
          common_name: "Pencil Cactus",
          size: "Small",
          height: "Medium",
          blooms: "NO",
          seasonal: "NO",
          growth_period: "Spring and Summer",
          light_exposure: "Direct Light",
          most_suitable_location: "Needs very bright light and can even handle direct morning sun.",
          temperature: " 65°-70°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Pencil-Cactus.jpeg",
          water_req: "Low Level",
          water_day: 25,
          water_tips:
            "During the spring and summer allow the top 50% of the soil to dry out before watering. In the fall & winter water once a month.",
          fertilizer_req: "Low",
          fertilize_month: "1",
          fertilizer_tips:
            "Feed at the beginning of spring and the beginning of summer with a balanced 20-20-20 fertilizer at 1/4 the recommended strength.",
          poisonous:
            "Yes, Pencil Cactus are very poisonous plants. The stems contain an irritating sap-like substance that oozes out of any cut or break in the stem.",
          plant_details:
            "This unique looking plant, native to Africa and India, is also referred to as Indian Tree Spurge, Naked Lady Plant, Aveloz, Milk Bush Plant, and Petroleum Plant. The green succulent stems of a Pencil Cactus, which are about the width of a pencil, branch upwards in an almost geometrical pattern.",
          plant_care_tips:
            "Pencil Cactus are very drought resistant, so when in doubt, do not water.",
        },
        {
          id: 18,
          scientific_name: "CYCAS REVOLUTA PALM",
          common_name: "Sago Palm",
          size: "Large",
          height: "Large",
          blooms: "No",
          seasonal: "No",
          growth_period: "Spring and Summer",
          light_exposure: "Direct Light",
          most_suitable_location: "Needs needs bright light with a little direct sun in the morning.",
          temperature: "60°-75°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Cycas-revoluta-17-4.jpg",
          water_req: "Low Level",
          water_day: 25,
          water_tips:
            "Allow the top 75% of the soil to dry out before thoroughly watering a Sago Palm. Be sure the water comes out the drip holes in the bottom of the pot, but do not allow the plant to sit in the excess water.",
          fertilizer_req: "Moderate",
          fertilize_month: "1",
          fertilizer_tips:
            "Feed a Sago palm monthly from spring through fall with a liquid fertilizer (18-6-18) diluted to ½ the recommended strength.",
          poisonous:
            "Yes, All parts are poisonous, especially the seeds.",
          plant_details:
            "This plant is not really a palm at all; and although it resembles a true palm, it is not even a close relative.  An interesting fact is that although these plants produce nuts, they never produce flowers or fruit.",
          plant_care_tips:
            "Be careful not to over water or the plant can quickly die. Use a sandy soil that drains quickly",
        },
        {
          id: 19,
          scientific_name: "YUCCA ELEPHANTIPES",
          common_name: "Yucca",
          size: "Large",
          height: "Large",
          blooms: "No",
          seasonal: "No",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location: " An ideal location is near a west, east, or south-facing window.",
          temperature: "30°-90°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/Yucca-elephantipes-14-5432.jpg",
          water_req: "Low Level",
          water_day: 20,
          water_tips:
            "Allow at least the top 50% of the soil of a to dry out before watering.",
          fertilizer_req: "Moderate",
          fertilize_month: "1",
          fertilizer_tips:
            "Feed monthly in the spring and summer with a basic houseplant food at 1/2 the recommended strength.",
          poisonous:
            "Slightly, The poisonous part of the plant is difficult to reach, but it is still possible.",
          plant_details:
            "The spineless Yucca plant, a native of Guatemala and southeast Mexico, is an ideal, easy care houseplant. Yucca plants can be a bush or a stalk plant.",
          plant_care_tips:
            "Over watering is the main and probably the only way to kill a yucca.",
        },
        {
          id: 20,
          scientific_name: "RHODODENDRON",
          common_name: "Azalea",
          size: "Medium",
          height: "Small",
          blooms: "Yes",
          seasonal: "Yes",
          growth_period: "Spring and Summer",
          light_exposure: "Indirect Light",
          most_suitable_location: "An ideal location is no direct sun. If there is not enough indirect light, the flower buds on an azalea plant won't open.",
          temperature: "60°-70°F",
          plant_image:
            "https://www.houseplant411.com/wp-content/uploads/800px-Azalea_japonica_Madame_Van_Hecke_J2-256x192.jpg",
          water_req: "Low Level",
          water_day: 20,
          water_tips:
            "Allow at least the top 50% of the soil of a to dry out before watering.",
          fertilizer_req: "Moderate",
          fertilize_month: "1",
          fertilizer_tips:
            "Fertilize monthly with an acidic fertilizer diluted to 1/3 the recommended strength. Never fertilize your azalea plant when it is in bloom.",
          poisonous:
            "Yes, All parts of an Azalea contain a substance called grayanotoxin which makes the plant very poisonous.",
          plant_details:
            "An Azalea plant is the national flower of Nepal, and is part of an ancient group of plants dating back million of years.  Azaleas have delicate, funnel shaped, lipped flowers.",
          plant_care_tips:
            "Large numbers of leaves drop off if the soil is too wet or too dry.",
        },
      ],
      weatherInfo: {},
      favoritesList: ["MyPlants", "Blooming", "Small"],
      favoritePlants: [{ id: 33, plant: "African Violet" }],
    },

    actions: {
      removeList: (index) => {
        let newFaves = getStore().favoritesList.filter(
          (fav, ind) => ind != index
        );
        setStore({ favoritesList: newFaves });
        // fetch(getStore().url + "api/favorites/" + id, {
        //   method: "DELETE",
        //   headers: { "Content-Type": "application/json" },
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data);
        //     setStore({ favoritesList: data });
        //   })
        //   .catch((err) => console.log(err));
      },

      postFavoritesName: (name) => {
        let favorites = getStore().favoritesList;
        favorites.push(name);
        setStore({ favoritesList: favorites });
      },

      getFavorites: () => {
        fetch(getStore().url + "api/favorites", { method: "GET" })
          .then((response) => response.json())
          .then((data) => setStore({ favoritePlants: data }))
          .catch((err) => console.log(err));
      },

      // getPlantData: () => {
      // 	fetch(getStore().url + "api/plants",
      // 		{ method: "GET" })
      // 		.then((response) => response.json())
      // 		.then((data) => setStore({ plantLibrary: data }))
      // 		.catch((err) => console.log(err))
      // },

      ////creataccount /////
      createAccount: (array) => {
        setStore({ account: array });
      },

      login: (email, password) => {
        //landing page
        setStore({ profile: [{ email: email, password: password }] }); //the key is in red
      },
      logout: () => {
        //landing page
        setStore({ profile: [] });
      },

      // plantData:(plantName)=>{
      // 	setStore({plantLibrary:[{"plantName": plantName}]});
      // },

      getWeatherData: (zipcode) => {
        fetch(
          `https://community-open-weather-map.p.rapidapi.com/forecast/daily?zip=${zipcode}%2Cus`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
              "x-rapidapi-key":
                "5f370309abmsh52b2ef22b0e99a0p19db05jsn15130b55cf47",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => setStore({ weatherInfo: data })) //data is response from respjson
          .catch((err) => {
            console.error(err);
          });
      },

      createNewFavoritesList: (newList) => {
        setStore({ favoritesList: newList });
      },

      FillSavedFavoriteHeart: (fav, index) => {
        const newFavoritesList = getStore().favoritesList;
        {
          /*gives local copy of favs to pushinto  */
        }
        newFavoritesList.push(fav);

        setStore({ favoritesList: newFavoritesList });
      },

      addFavoritePlantItem: (listName, plant) => {
        fetch(getStore().url + "api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category_name: listName,
            plant_id: plant.id,
            user_id: 1,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            setStore({ favoritePlants: data });
          })
          .catch((err) => console.log(err));
      },

      addMyPlant: (list, plant) => {
        console.log("AddMyPlant: ", plant);
        let dataArray = getStore().calendarEntries;

        dataArray.push({
          text: `Water ${plant.common_name}`,
          startDate: new Date("2022-04-15T16:30:00.000Z"),
          endDate: new Date("2022-04-15T18:30:00.000Z"),
          allDay: true,
          recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2",
        });

        dataArray.push({
          text: `Fertilize ${plant.common_name}`,
          startDate: new Date("2022-04-15T16:30:00.000Z"),
          endDate: new Date("2022-04-15T18:30:00.000Z"),
          allDay: true,
          recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=1;COUNT=10",
        });
        setStore({ calendarEntries: dataArray });

        getActions().addFavoritePlantItem(list, plant);
      },

      removeFavoritePlantItem: (listname, plantId) => {
        fetch(getStore().url + "api/favorites/" + plantId + "/" + listname, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setStore({ favoritePlants: data });
          })
          .catch((err) => console.log(err));
        // const newList = getStore().favoritesList.map((item, index) => {
        //   let found = item.favorites.find(
        //     (object) => object.commonName == plant.commonName
        //   );
        //   console.log("found", found);
        //   if (item.name == listName && found) {
        //     let list = item.favorites.filter(
        //       (object) => object.commonName != plant.commonName
        //     );
        //     item.favorites = list;
        //     console.log(list);
        //   }
        //   return item;
        // });
        // console.log(newList);
        // setStore({ favoritesList: newList });
      },
    },
  };
};

// const demo= store.demo.map((elm,i)={
//     if (i===index) elm.background=color;
// 	 return elm;

// 	 setStore({demo:demo});
// });

// deleteFavsList: (id) => {
// 	setStore(setFavList(""));
// },
export default getState;
