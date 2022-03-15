const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			plantLibrary: [
				{
					scientificName: "Papaver somniferum",
					commonName: "Atlas Poppy",
					growthCycle: "annual",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["6", "7"],
					height: 4,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: "various",
					fruitPresent: "summer",
					// fruitColor: ["Green", "Brown"],
					lightExposure: ["sun"],
					plantImage: "https://i.imgur.com/oJsAEL5.jpg?1",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Seed sewn from September to April. Planted in the deep south at the earlier date and in the north in spring. Red or pink are the colors most commonly planted. This is the plant from which opium is eventually made. Opium is used in the manufacture of morphine, which is a widely used pain killer in medical practices."
				},
				{
					scientificName: "Osteospermum hybrids",
					commonName: "African Daisy",
					growthCycle: "perennial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["9", "10", "11"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["various"],
					// fruitPresent: null,
					// fruitColor: [null],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/iku1MrR.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "Moderate",
					waterReq: "low",
					isSusceptible: "Yes",
					comments:
						"A flowering annual except in zones 9-11 where it is a perennial. Flowers from time of planting until frost. After plants are established, they will need little suppemental water. Use in rock gardens, containers, in ground beds and as a cut flower. Attracts hummingbirds and butterflies. It is drought tolerant and deer resistant."
				},
				{
					scientificName: "Tagetes erecta",
					commonName: "Marigold",
					growthCycle: "annual",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["10", "11"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["summer", "fall"],
					flowerColor: ["yellow", "orange"],
					lightExposure: ["sun"],
					plantImage: "https://i.imgur.com/Xnliu6s.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Marigolds have been around since pre-historic times. They grow best in full sunlight and in well drained soils. Marigolds cannot tolerate wet, humid conditions. They love drier climates where soils stay only moderately moist. Marigolds bloom from early summer through the fall if conditions are favorable. There can be a period during the hottest part of the summer when mar igolds may cease to bloom until the temperatures fall below 90 F"
				},
				{
					scientificName: "Begonia semperflorens",
					commonName: "Begonia",
					growthCycle: "annual",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["10"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["various"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/yVwqHdG.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Grown as annual bedding plant. Grows in full sun, but can't stand drought. Various colored foliage and flowers offer contrast in the annual garden. A popular choice for mass plantings in public places. Cannot tolerate wet soils, consequently best performance is in elevated beds to insure adequate drainage."
				},
				{
					scientificName: "Platycodon grandiflorus",
					commonName: "Balloon Flower",
					growthCycle: "perennial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["3", "4", "5", "6", "7"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["summer"],
					flowerColor: ["blue"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/cJ5CyNT.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"This clump forming perennial dies down in winter and returns in spring. Leave some of the previous years stems so they can be located and not damaged when spring gardening activity begins. Upward facing flower buds expand like a hot air balloon prior to opening and thus its name 'Balloon Flower'."
				},
				{
					scientificName: "Pelargonium x hortorum",
					commonName: "Garden Geranium",
					growthCycle: "perennial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["8", "9", "10"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["various"],
					lightExposure: ["part sun"],
					plantImage: "https://i.imgur.com/y1ShyWr.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Geraniums are popular for their wide range of brilliant flower colors and attractive leaves. They flower during the warm months. However, when daily temperature exceeds 85 degrees F. for many days, flowering will not occur. This happens in the deep south, but flowering will return as temperatures moderate in the fall. Geraniums like sunlight for a minimum of four hours per day, a well drained, moist, and fertile soil."
				},
				{
					scientificName: "Magnolia x soulangiana",
					commonName: "Alexandrina Saucer Magnolia",
					growthCycle: "perennial",
					plantType: "tree",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9"],
					height: 30,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["pink", "purple"],
					fruitPresent: "summer",
					fruitColor: "Red",
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/YQYn9w3.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Magnolias are simply magnificent. The Alexandrina Saucer Magnolia is a beautiful ornamental shrub that can become a lovely specimen plant in your landscape. Saucer Magnolia is chosen specifically for its wonderful, dark-purple flower buds, and huge cup-shaped flowers with light pink and white interiors. The massive flower display is phenomenal."
				},
				{
					scientificName: "Pimenta dioica",
					commonName: "Allspice",
					plantType: "tree",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["9", "10", "11"],
					height: 30,
					plantIs: "edible",
					bloomTime: ["spring"],
					flowerColor: ["white"],
					fruitPresent: ["summer", "fall"],
					fruitColor: "Brown",
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/vZ6fDEq.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "low",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Allspice is a relatively small evergreen tree that grows in the warm climates of the world. In some parts where conditions are favorable it has escaped cultivarion. The plant produces thick, leathery, aromatic foliage. The condiment, allspice, is produced from the unripened berry-like fruit of this tree."
				},
				{
					scientificName: "Rosa 'Affirm'",
					commonName: "Affirm Rose",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["8", "9", "10"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["pink"],
					lightExposure: ["sun"],
					plantImage: "https://i.imgur.com/EexQQje.jpg",
					drainage: ["well drained"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"This is a hybrid tea rose that produces a classic pink rose bud. As with all roses, good drainage is imperative. Roses do best on raised beds that contain fertile soil with fast drainage. Most hybrid tea roses have several pests that must be controlled during the year."
				},
				{
					scientificName: "Synadenium grantii",
					commonName: "African Milk Bush",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["10", "11"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["summer", "fall"],
					flowerColor: ["red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/156RH4K.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "slow",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"This is a plant that produces fleshy stems and large chartreuse colored leaves with tiny specks of red in the foliage. When broken plant exudes a milky sap. The sap can be toxic or cause a rash. This is an excellent plant to feature in containers. Plant in a well drained soil mix that contains a generous amount of sand and keep the soil moderately dry, otherwise rot will occur."
				},
				{
					scientificName: "Rhododendron 'Admiral Semmes'",
					commonName: "Admiral Semmes Azalea",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow"],
					lightExposure: ["part sun", "filtered shade", "shade"],
					plantImage: "https://i.imgur.com/nlCyoNh.jpg",
					drainage: ["well drained"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"A very heat tolerant azalea that produces clusters of rich yellow fragrant flowers of outstanding substance. Deciduous azaleas bloom best if they receive several hours of morning sunlight and are planted in fertile, well drained, slightly acid soils. Remove old heavy canes to help invigorate old plants."
				},
				{
					scientificName: "Petunia 'Tidal Wave Cherry'",
					commonName: "Cherry Wave Petunia",
					plantType: "flower",
					growthCycle: "annual",
					leafType: "broadleaf",
					hardinessZone: ["6", "7", "8"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring", "summer"],
					flowerColor: "Red",
					lightExposure: ["sun", "morning sun"],
					plantImage: "https://i.imgur.com/dVC8Jt1.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"The cherry wave petunia is an excellent selection of this series. It blooms over a long period from late fall through early summer. The spread of this petunia can be over six feet during this period. Provide full sunlight and a well drained soil, preferably a raised bed. It makes a superb container plant because shoots drape over the edge of the container."
				},
				{
					scientificName: "Cosmos bipinnatus",
					commonName: "Cosmos",
					plantType: "flower",
					growthCycle: "annual",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9", "10"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["spring", "summer"],
					flowerColor: ["various"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/859zmkt.jpg",
					drainage: ["well drained", "moist", "dry"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Cosmos have large, up to four inches across, daisy-like flowers. They make wonderful cut flowers. The colors may be white, pink or red. Bloom over a rather extended period in the spring into summer. Select a sunny, well drained site for this annual. Excellent spring flowering bedding plant."
				},
				{
					scientificName: "Thymus praecox arcticus",
					commonName: "Creeping Pink Thyme",
					plantType: "ground cover",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9"],
					height: 2,
					plantIs: "insignificant",
					bloomTime: ["spring"],
					lightExposure: ["sun", "part sun", "morning sun"],
					plantImage: "https://i.imgur.com/c9eRVGA.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"This perennial produces strong aromatic foliage with a pungent aroma that is used for flavoring foods. It makes a tight carpetlike mat in full sunlight and well drained soil. It grows fairly well in dry soils and is especially effective in herb gardens and growing among stones, pavers and other garden elements. Plant in full sunlight and a well drained soils."
				},
				{
					scientificName: "Ajuga reptans 'Dixie Chip'",
					commonName: "Dixie Chip Ajuga",
					plantType: "ground cover",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["4", "5", "6", "7"],
					height: 1,
					plantIs: "insignificant",
					bloomTime: ["spring"],
					lightExposure: ["sun", "shade"],
					plantImage: "https://i.imgur.com/4oMmdmC.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Unique, tri-colored foliage in shades of burgundy, green and cream. It hha bluish flowers in spring on a plant that is usually ab out 3 inches tall. Makes a good, low growing ground cover. This selection has has green, cream, and rose-purple variegated foliage that create a spectacular display in the landscape."
				},
				{
					scientificName: "Sasa veitchii",
					commonName: "Kuma Bamboo Grass",
					plantType: "ground cover",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["6", "7", "8", "9"],
					height: 2,
					plantIs: "insignificant",
					lightExposure: ["sun", "part sun", "filtered shade", "shade", "morning sun"],
					plantImage: "https://i.imgur.com/SsGEtFC.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"This ground cover is used as a ground cover although plants will grow quite tall if left alone. To keep plants low, clip back growth in late winter every year and the new foliage will be green and fresh looking during the following year. Plants become untidy if not clipped periodically."
				},
				{
					scientificName: "Persea americana",
					commonName: "Avocado",
					plantType: "tree",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["10", "11"],
					height: 50,
					plantIs: "edible",
					bloomTime: ["spring"],
					flowerColor: ["white"],
					fruitPresent: "fall",
					lightExposure: ["sun"],
					plantImage: "https://i.imgur.com/oljBvdp.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"The avocado is a tropical tree that will grow and even produce fruit in zone 9, but needs protection from freezes. Edible fruit are produced on trees in warm climates in a fertile, well drained soil. In cold climates people will often plant the single seed that comes from the fruit and grow from the seed a tender tropical on the patio during the summer months."
				}
			],
		},

		actions: {
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
