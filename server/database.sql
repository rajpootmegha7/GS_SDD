DROP DATABASE IF EXISTS garden;

CREATE DATABASE garden;

\c garden;

DROP TABLE IF EXISTS userInfo;

CREATE TABLE userInfo(
	USER_ID INT GENERATED ALWAYS AS IDENTITY,
	USER_NAME VARCHAR(255) NOT NULL UNIQUE,
	EMAIL VARCHAR(255) NOT NULL,
	FIRSTNAME VARCHAR(255) NOT NULL,
	LASTNAME VARCHAR(255) NOT NULL,
	USER_PASSWORD VARCHAR(255) NOT NULL,
	SECURITY_QUESTION VARCHAR(255) NOT NULL,
	SECURITY_QUESTION_CODE VARCHAR(255) NOT NULL,
	SECURITY_ANSWER VARCHAR(255) NOT NULL,
	COUNTRY VARCHAR(255) NOT NULL,
	PRIMARY KEY(USER_ID)

);

CREATE TABLE plantInfo(
	PLANT_ID INT GENERATED ALWAYS AS IDENTITY,
	PLANT_NAME VARCHAR(255) NOT NULL,
	PLANT_TYPE VARCHAR(255) NOT NULL,
	PLANT_SPACING INT NOT NULL, 
	ZONE_LOWER INT NOT NULL,
	ZONE_UPPER INT NOT NULL,
	season_type_id VARCHAR(255) NOT NULL, 
	water_schedule INT Not NULL, 
	"description" character varying(10000) COLLATE pg_catalog."default",
    image VARCHAR(255) NOT NULL,
	PRIMARY KEY(PLANT_ID)
	
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plantInfo
    OWNER to postgres;

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('test name','test type',0,0,0,'test season',7,'test plant',
			'');




INSERT INTO plantInfo(PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Winter Squash','Vegetable',6,2,10,'Fall',7,'Winter squash are all known for the hard skins that protect them through the fall, winter, and sometimes even spring, depending on the variety. Every type of winter squash is edible, but the amount of flesh on the inside varies. If you love roasted squash or pumpkin pie, then these are the plants for you.',
			'https://www.simplyrecipes.com/thmb/E_a3somFva0tm9hjOACwaJxfY-k=/440x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Guide-to-Winter-Squash--LEAD-3-9e7b06b0c13c416f8e7b624246225f4e.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Carrot','Vegetable',1,2,10,'Winter',7,'Homegrown carrots boast a flavor and texture that is quite different from their grocery counterparts. Cook carrots (their sweetness intensifies) to create dishes that dance the line between sweet and savory. Full sun and loose, well-drained soil will produce baskets of carrots throughout the growing season.',
			'https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Turnip','Vegetable',1,2,10,'Summer',7,'The turnip is thought to have originated in middle and eastern Asia and is grown throughout the temperate zone. Young turnip roots are eaten raw in salads or pickled, and the young leaves may be cooked and served. The roots are also cooked and served whole or mashed and are used in stews.',
			'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/turnip-root-vegetable-1296x728-header-1296x728.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Onion','Vegetable',1,2,10,'Fall',7,'The onion is an easy-to-grow vegetable that has big flavor. Whether you grow sweet onions or storage onions, fresh onions are delicious on salads, sautéed, or caramelized in a variety of savory dishes. Plant a diverse crop of onions, including a variety or two that stores well, and enjoy garden-fresh onions year-round. Full sun and moist, well-drained soil are all you need for a prolific onion crop.',
			'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-health-benefits-of-onions-main-image-700-350-8425535.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Lettuce','Vegetable',1,2,10,'Spring',4,'No need to wait until tomatoes ripen in summer to embrace garden-to-table deliciousness. That is because lettuce, a suitable plant for small-space gardens, is exceptionally easy to grow in cool weather. Plant lettuce in early spring and your table will overflow with tender, flavorful greens 6-8 weeks later.',
			'https://static.onecms.io/wp-content/uploads/sites/37/2020/04/17/tango-oakleaf-lettuce-c6f6417e.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Spinach','Vegetable',1,2,10,'Summer',7,'Spinach is a rewarding plant in the spring vegetable garden because spinach easy to grow and incredibly nutritious. Dubbed a superfood because of the vitamins and minerals found within its leaves, spinach deserves a space in every yard. It is perhaps best used fresh in salads, either by itself or mixed with other greens like lettuce or arugula. You can also add a few leaves to a smoothie, or if you prefer your spinach cooked, just steam or sauté it for a few minutes.',
			'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/03/nutritional_spinach_GettyImages585833313_Header-1024x575.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Arugula','Vegetable',1,2,11,'Summer',4,'Although arugula has been grown since ancient times, only recently has this member of the cabbage family (it looks like lettuce though) gotten the attention it deserves for its bold, peppery flavor. The plant is easy to grow, so plan on planting some so you can toss it into your salads and other dishes. Make sure to harvest the leaves while young. (Mature leaves tend to be bitter.)',
			'https://www.thespruceeats.com/thmb/n8yhXp1A9U9JbFBmguLHbMn8L8k=/2002x2002/smart/filters:no_upscale()/arugula-crop-07748a74b40547848571cd1cca2cec1e.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Lima Bean','Vegetable',2,2,11,'Spring',7,'If its name sets off less-than-pleasant childhood memories for you, you will develop a new appreciation for this nutrient-rich vegetable when you grow it yourself. A close relative of snap beans, this warm-season crop is easy to start from seed planted right in the garden. Enjoy lima beans fresh by picking pods when they are full and bright green, or allow beans to dry on the plant and harvest dried beans for use during the cooler months.',
			'https://www.thespruce.com/thmb/5J6dFRX3-VA5AMvTjsPIrkYR98c=/2121x1193/smart/filters:no_upscale()/Lima-Beans-GettyImages-92385531-59c14d28af5d3a0010abf682.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Pea','Vegetable',1,2,10,'Spring',7,'Peas are a spring garden staple, loved for their easy-to-grow nature, delicious seeds, and nutritional value. There is something magical about harvesting peas fresh from the garden and tasting their sweet, fresh flavor.',
			'https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/peas-and-pea-pods.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Beet','Vegetable',2,2,11,'Fall',4,'A cinch to grow in any full-sun garden, beets are a fast-growing, early-spring crop that can be planted a second time in midsummer to yield a fall harvest. When growing beets, keep in mind that both the leaves and the fleshy roots are edible which makes this vegetable exceptionally productive for small spaces. Beet varieties range from those with deep crimson roots to ones with golden yellow and candy-stripe red-and-white roots. Plant a couple of varieties and explore the different colors. And enjoy the flavor of garden-fresh beets, which is a delicious combination of sweet, rich, hearty, and earthy.',
			'https://post.healthline.com/wp-content/uploads/2020/09/AN172-Beets-732x549-Thumb_0-1-732x549.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Radishes','Vegetable',2,2,11,'Fall',4,'A favorite early spring crop, radishes are a cinch to grow from seed, producing peppery edible roots in as few as 30 days. In climates with cold winters, you can enjoy a second crop in fall by planting seeds when the nights turn cool in early fall. In mild climates, it is possible to harvest radishes through winter. Enjoy them in salads or with your favorite dip.',
			'https://www.thespruceeats.com/thmb/v4rXBdHk-ncJwtyC9zXXYKFAKcc=/2121x1414/filters:fill(auto,1)/GettyImages-994593838-de50e6d7db9a4b328fbfd17f3371dbee.jpg');


INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Artichoke','Vegetable',6,8,10,'Spring',7,'Artichoke is a bold plant with huge silvery-green leaves that are finely cut and divided, giving them a thistlelike appearance. The plant has big flower buds (the outer petals end in thorns that soften when cooked) rise above the clumps of foliage. They have been prized by gourmands for decades, making them some of the more expensive vegetables at the grocery store. If you love these buds, too, growing your own artichoke is a great way to save money. Harvest the flower buds before they bloom, then steam or boil them before scooping out the fleshy inner layer of each bract, as well as from the heart at the base of the bracts. ',
			'https://www.simplyrecipes.com/thmb/mbfejYla_AXsg9hln-bwYodXZ6k=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__05__how-to-trim-artichoke-horiz-a-1800-9b4246cfc2f947598f02f229a8bcedbb.jpg');


INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Kale','Vegetable',2,7,9,'Winter',7,'Kale, a hardy leafy green, is not only a superfood but also a super producer. This cool-weather vegetable tolerates frost with ease and produces tender and succulent upright leaves well into fall. Plant kale in early spring in a traditional garden or a container to enjoy its leaves for five months or more. Kale thrives in full sun but grows well in part shade. From a balcony garden to a suburban raised bed, kale will grow nearly anywhere.',
			'https://post.healthline.com/wp-content/uploads/2020/09/benefits-of-kale-1200x628-facebook-1200x628.jpg');






INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Fennel','Herb',1,4,9,'Fall',7,'Stems, leaves, and seeds from common fennel are harvested for use in culinary dishes. Florence fennel—the second type—is grown like a bulb-type vegetable. Shorter than common fennel, Florence fennel has dark green foliage and develops a large, flat rosette of stems at the base of the plant. This cluster of stems is often called a fennel bulb.',
			'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/fennel-bulb.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Chives','Herb',1,3,10,'Summer',7,'Grown and known for its onion-like taste, chives add fresh flavor to cuisines of all types. Both the foliage and the flowers are edible, but its slender, bright green leaves and purple pom-pom blooms make chives a garden multi-tasker. In addition to planting it in an herb garden, try it in perennial beds or along walkways. Or add it to container gardens where it will produce fresh new foliage from spring to frost.',
			'https://www.mashed.com/img/gallery/how-are-chives-and-green-onions-different/intro-1615891995.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Basil','Herb',1,2,11,'Fall',7,'Basil dishes up classic Italian flavor in eye-catching bushy plants suitable for garden beds or containers. Grow this tasty beauty in a sunny spot, and you will reap rewards of flavorful foliage in shades of green, purple, or bronze. Basil lends a distinctive taste to salads, pizza, and pasta dishes. Use small leaves whole; chop larger leaves. Add leaves to dishes just before serving for the best flavor and aroma. Basil plants are sensitive to cold; start seeds indoors or plant outside after all danger of frost has passed.',
			'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/IMG_2600-2-1.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Thyme','Herb',1,4,9,'Spring',14,'Thyme is not just an herb to grow for adding flavor to food, it can also add plenty of color and texture to your garden. This tough and rugged perennial often forms dense mats of foliage that are topped with attractive blossoms. There are also some wonderful low-growing varieties that can be planted between rocks and paths, where they will release their delightful fragrance when brushed past.',
			'https://cdn-prod.medicalnewstoday.com/content/images/articles/266/266016/thyme.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Dill','Herb',1,2,11,'Summer',4,'This aromatic annual plant has feathery foliage used to flavor savory recipes. It is also sought after by black swallowtail caterpillars as a food source, and its small yellow flowers are excellent for attracting a variety of pollinators. Plant dill alongside vegetables in a traditional vegetable garden or enjoy its scented foliage in a perennial garden or in container plantings. ',
			'https://www.thespruceeats.com/thmb/jnNWbmtphzwRl8JLJt7yrgi42mA=/1414x1414/smart/filters:no_upscale()/Fresh-Dill-57c370c83df78cc16ebb0451.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Lavender','Herb',1,5,10,'Summer',14,'Lavender fills the early-summer garden with sensory delights: beautiful purple-tone blooms atop foliage that emanates its fresh scent on a sunny afternoon. Every part of the plant is infused with aromatic oil, making this a choice herb to place along pathways or near outdoor seating areas so you can experience the pleasant fragrance. Lavender varieties abound: The darker the flower, the more intense the aroma as well as the flavor in cooking.',
			'https://www.gardendesign.com/pictures/images/900x705Max/site_3/english-lavender-lavandula-angustifolia-garden-design_11716.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Rosemary','Herb',3,8,10,'Winter',7,'Known for its wonderful scent and flavor, rosemary can also be grown as a garden ornamental. In areas where these plants are not winter hardy, they can be grown as an annual. Because of their Mediterranean heritage, these plants thrive in hot and dry weather. Grow rosemary near paths and walkways to release its fragrance as you brush past it.',
			'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/266370_2200-1200x628.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Cilantro','Herb',2,2,11,'Summer',7,'With bright green, fern-textured stems, cilantro holds its own in beds or pots. Every part of cilantro promises a taste treat: spicy leaves, pungent seeds (known as coriander), and tangy roots. Most gardeners grow cilantro for the foliage, which boasts a citrusy bite that enlivens Mexican and Thai cooking. Coriander is used in pastries, sausage, and pickling spice. Cilantro thrives in cool weather and grows best in spring and fall. Pick up a few transplants at the garden center or start your own plants from seed.',
			'https://cdn-prod.medicalnewstoday.com/content/images/articles/277/277627/bunch-of-fresh-coriander-or-cilantro-on-a-wooden-table.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Mint','Herb',2,3,10,'Fall',4,'Mint plants have long been prized for crisp, soothing aroma and ease of growth. In fact, they grow so well that in some cases they get a little too rambunctious. One plant is usually plenty to supply a whole summer worth of this refreshing herb. Along with their culinary and aromatic properties, mint flowers attract pollinators.',
			'https://cdn-prod.medicalnewstoday.com/content/images/articles/275/275944/mint-on-a-wooden-table.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Sage','Herb',2,4,10,'Summer',4,'From medicinal to culinary use, sage has long been an herb garden staple. This plant is most commonly grown for its flavor, but it also makes a tough, pretty perennial plant in the garden. Sage plants have light blue flowers and gray-green foliage help it combine well with other plants in a flower border or container.',
			'https://files.nccih.nih.gov/sage-steven-foster-square.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Yarrow','Herb',1,3,10,'Winter',10,'Yarrow is a classic garden perennial known for its ruggedness. It shrugs off cold winters, hot and humid summers, drought, and poor soils to cheerfully bloom in sunny places. With its tall stems of colorful flowers and fern-like foliage, it works especially well in a cottage garden setting and in wildflower gardens.',
			'https://cdn.shopify.com/s/files/1/0246/5179/2465/products/Achillea_1200x.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Lemon Balm','Herb',2,3,7,'Summer',4,'Long used to calm and lift spirits, lemon balm is grown for its oils for aromatherapy and leaves for flavoring. This perennial herb also makes a great addition to most gardens because it attracts pollinators. You may want to plant this member of the mint family near walkways where you can brush against its quilted green leaves and enjoy their pleasing scent. You can even rub fresh leaves on your arms while gardening to drive away mosquitoes. Add the edible leaves to soups, salads, sauces, or vegetables. Mix dried leaves into potpourri.',
			'https://www.seedsavers.org/site/img/seo-images/0464C-lemon-balm-herb.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Oregano','Herb',1,5,11,'Fall',7,'A multitasking perennial, oregano is a fragrant addition to the garden as well as the kitchen. Plant it in a sunny garden bed or container close to the house for quick and easy harvest for your next Mediterranean-inspired meal. In the garden you will love this herb clean, green foliage and casual mounding habit. Small flowers appear in summer, which draw pollinators.',
			'https://www.thespruce.com/thmb/mutVJaumMMpGZsyt3KP0R4OpkvU=/3067x2300/smart/filters:no_upscale()/growing-oregano-plants-1402818-11-ce2a0899a12e4767a5ec71340464f508.jpg');





INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Tomato','Fruit',1,3,13,'Summer',4,'Tomatoes are one of the easiest vegetables to grow. Provide them with at least 8 hours of bright sunlight and a well-drained planting spot and you will enjoy your own juicy harvest. In recent years plant breeders focused on producing small tomato plants that boast a prolific harvest. Grape and cherry tomato cultivars bred specifically for containers and small spaces make growing these essential summer fruits possible on balconies, patios, and any other place that receives plenty of sunlight. Get ready for a great harvest.',
			'https://images.newscientist.com/wp-content/uploads/2021/07/19142457/20-july_tomato-nervous-system.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Strawberry','Fruit',1,3,10,'Spring',2,'Dessert is right outside the door when you grow your own strawberries. Sweet and juicy homegrown berries are delicious in desserts, as well as the base for jams and jellies and for garnishing summer drinks and salads. Equally loved by deer, chipmunks, and a host of other rodents, strawberries need protection in areas that have high population of these critters. The effort is worth it when you harvest handfuls of sun-ripened berries.',
			'https://www.thespruce.com/thmb/MYWFae8tR25_SPXN8gva25ZWBvY=/1452x1452/smart/filters:no_upscale()/Strawberryplant-GettyImages-123533002-5b198b33eb97de0036be58ae-d5982c5730984563a32598ee2a96fe3e.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Peach','Fruit',15,5,8,'Spring',20,'The sweetest and juiciest peach you will ever taste can be picked from your own tree. When harvested at the peak of ripeness, backyard peaches are loaded with the sweet gifts of nature with no concern about shelf-stability or long transports. There are many easy-to-grow peach varieties. Grow your own with these simple tips.',
			'https://media.self.com/photos/5b75ad5728dfab53ee567688/4:3/w_2560%2Cc_limit/GettyImages-614938268.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Raspberry','Fruit',2,3,9,'Summer',2,'When planning for raspberries, it is important to make sure you have a roomy spot. They can get relatively large so be sure you allow for them to grow and spread. It is also key to decide what type you want. Red, gold, and black varieties are available, and you can get everbearing (also called fall-bearing) or June-bearing types. Everbearing raspberries produce fruit over a longer period in late summer and fall; June-bearing types produce a heavy crop all at once in early summer.',
			'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Heritage_Raspberry_1_FGT_650x.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Grapes','Fruit',6,4,10,'Spring',7,'One of the oldest cultivated crops, grapes have been grown for its fruit that we eat fresh or dried or process into jam, jelly, juice, or wine. Choose varieties that are hardy and well-suited to your area. The long-lived vines require annual maintenance and a few years to come into full production, but the investment of time and care produces results that surpass any supermarket offering.',
			'https://post.healthline.com/wp-content/uploads/2022/01/grapes-732x549-thumbnail.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Cherry','Fruit',30,5,8,'Spring',14,'A plump, juicy cherry is a luxurious treat for humans and wildlife alike. Whether you grow sweet or sour cherries, plan to share. This is usually not a problem a mature tree produces more fruit than a typical family can consume. When choosing a cherry variety, select one that is disease-resistant, grows to the right size for your space, and is adapted to your local conditions. The smaller the tree, the easier it will be to harvest the fruit.',
			'https://www.gardeningknowhow.com/wp-content/uploads/2015/05/cherry-trees.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Orange','Fruit',20,8,11,'Winter',30,'Orange trees are a popular selection for gardeners in citrus-friendly climates. While grapefruits, mandarins, and acid fruits are also favored, sweet and juicy oranges are the most popular. In addition to producing tasty fruit, the trees have ornamental value, too. When in bloom they will perfume a landscape and a well-maintained tree makes a striking focal point. Plant an orange tree where it can be enjoyed from outdoor living spaces but far enough removed that any falling fruit will not create a messy problem.',
			'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/full-tree-of-oranges.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Blueberry','Fruit',3,3,9,'Spring',7,'Tasty blue fruits and vibrant fall foliage make blueberry plants landscape all-stars. Call on this plant to create a multitasking hedge. Add several blueberries to a shrub border as a colorful, fruitful planting partner. Plant breeders have selected many new varieties that thrive in containers, producing patio-side fruit that is just as sweet and delectable as the fruit grown on 8-foot-tall shrubs.',
			'https://h2.commercev3.net/cdn.gurneys.com/images/800/99487A.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Blackberry','Fruit',10,5,9,'Summer',4,'Blackberries are delicious, nutrient-rich, and relatively easy to grow making them perfect additions to your home garden or landscape. Even though they bear thorns, the canes are attractive with lush green foliage, white blushing, and charming white flowers.',
			'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Thornless_Blackberry_3_650x.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Plum','Fruit',20,5,9,'Fall',30,'Trees of some plum species reach a height from 6 to 10 metres (20 to 33 feet), while others are much smaller; some species are small shrubs with drooping branches. The flower buds on most varieties are borne on short spurs or along the terminal shoots of the main branches. Each bud may contain from one to five flowers, two or three being most common, and often give an appearance of densely packed, showy flower clusters when the trees are in full bloom.',
			'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/plum-tree.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Apple','Fruit',30,3,9,'Fall',14,'Apple varieties, of which there are thousands, fall into three broad classes: (1) cider varieties; (2) cooking varieties; and (3) dessert varieties, which differ widely but tend to emphasize colour, size, aroma, smoothness, and perhaps crispness and tang. Many varieties are relatively high in sugar, only mildly acidic, and very low in tannin. Apples provide vitamins A and C, are high in carbohydrates, and are an excellent source of dietary fibre.',
			'https://cdn.vox-cdn.com/thumbor/MceEqHRIeJfVJhihqn4rOV8FCUk=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21758584/AdobeStock_26788681.0.0.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Apricot','Fruit',20,5,8,'Summer',14,'They are eaten fresh or cooked and are preserved by canning or drying. The fruit is also widely made into jam and is often used to flavour liqueurs. Apricots are a good source of vitamin A and are high in natural sugar. Dried apricots are an excellent source of iron.',
			'https://cdn.vox-cdn.com/thumbor/MceEqHRIeJfVJhihqn4rOV8FCUk=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21758584/AdobeStock_26788681.0.0.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Pear','Fruit',20,4,9,'Fall',14,'Pear flowers are usually white or pink and have five petals and sepals; the bases of the five styles are separated. Pear fruits are generally sweeter and of softer texture than apples and are distinguished by the presence of hard cells in the flesh, the so-called grit, or stone cells. In general, pear fruits are elongate, being narrow at the stem end and broader at the opposite end. ',
			'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/285430_2200-732x549.jpg');






INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Sweet Alyssum','Flower',1,9,11,'Fall',7,'Sweet alyssum is a wonderful cool-season annual that has been a long-time favorite because of its dainty blossoms on tidy mounds of foliage. These plants make excellent landscape edging plants in the garden and even in containers. Plant them in masses to create an abundance of its light honey fragrance. Sweet alyssums also will draw all sorts of pollinators to your garden.',
			'https://www.gardeningknowhow.com/wp-content/uploads/2012/02/sweet-alyssum-1.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Petunia','Flower',1,10,11,'Fall',7,'One of the most popular annuals, petunias add mountains of color to garden beds and containers. These tough plants are capable of producing loads of blooms all season long and come in a wide variety of colors and patterns. While most petunias available nowadays are hybrids, they used to come in roughly two general classes, grandiflora and multiflora. Grandiflora petunias were bred for their large, showy blooms while multiflora were bred for quantity over quality, producing numerous smaller blossoms.',
			'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/purple-petunia-flowers.jpg');
			
INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Fuchsia','Flower',1,8,10,'Summer',4,'Few flowers offer such an interesting form and variety of hues as the fuchsia. The unique blossoms resemble layered swirling, brightly colored skirts. These plants can bloom throughout the growing season and have the added benefit of attracting hummingbirds. Plant them in a hanging basket near a garden bench to attract the birds.',
			'https://www.gardeningknowhow.com/wp-content/uploads/2009/08/fuchsia-1.jpg');
		
INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Meadowfoam','Flower',1,2,10,'Summer',7,'Carpet your perennial border, entryway planting bed, or patio garden with this easy-care, long-blooming annual. Meadow foam has glossy green foliage that spreads to form a neat and tidy, weed-suppressing mat. It is the perfect backdrop for yellow-and-white daisylike flowers. The fragrant blossoms perfume the air with a scent similar to that of daffodils for months in summer. This easy-to-grow annual also thrives in pots.',
			'https://cdn11.bigcommerce.com/s-jpgr1twe2i/images/stencil/1280x1280/products/3291/3298/meadowfoam%20seed%20refined5__82417.1542390988.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Ursinia','Flower',1,2,11,'Spring',7,'This gloriously happy annual blooms and blooms and blooms. Extremely floriferous and easy to grow, this South African native is just beginning to make inroads in the garden community. Its sunny, golden blooms last for months and are backed by a rich green mound of ferny foliage. Plant it in beds and borders for a guaranteed pop of color, or add it to container gardens for long-lasting color. Its main bloom period is spring and summer, but it blooms sporadically in winter, too.',
			'https://static.onecms.io/wp-content/uploads/sites/37/2016/02/31223533/101736552.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Blood flower','Flower',2,10,11,'Fall',7,'Like its perennial cousin butterflyweed, bloodflower is one of the best plants to attract butterflies. Monarch larvae love to feast on the leaves, and other butterflies that sip its nectar. This plant is perfect for planting in sunny naturalistic or wildlife gardens. In midsummer, it covers itself with gorgeous flowers in oranges, reds, and yellows on tall stems. Plant it in spring after all danger of frost has passed. Be careful of the milky sap, which can irritate skin.',
			'https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFASC111-1_medium.jpg');
			
INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Blue Lobelia','Flower',2,2,11,'Spring',7,'There are few blues more intense and gorgeous than those found on annual lobelia. The mounding type, called edging lobelia, is beautiful for planting in rows in the front of beds and borders. The cascading type is stunning, like a sapphire waterfall, spilling from window boxes or pots.',
			'https://www.provenwinners.com/sites/provenwinners.com/files/imagecache/low-resolution/ifa_upload/laguna_dark_blue.jpg');
		
INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Violet','Flower',1,2,11,'Spring',4,'With their cheerful, whiskered faces and wide variety of colors, violets are some of the prettiest and earliest blooming plants in the garden. While many of the 500+ species are perennial, these rugged plants can also be treated as annual plants for early spring color. Because violets tolerate cold temperatures, they can be the first flowering plants placed outdoors in the garden or containers (good news for gardeners with spring fever). Violets are extremely easy to start from seed, too. ',
			'https://upload.wikimedia.org/wikipedia/commons/8/80/Purple_African_Violet_Top.JPG');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Sunflower','Flower',3,4,9,'Summer',7,'A cheerful summertime bloomer, sunflowers celebrate the longest days of the growing season. Plant seeds every two weeks or so beginning in late spring, and you can enjoy fresh crops of annual sunflowers until the first frost. A quick look at the seed rack at your local nursery or an online search will reveal a host of colorful sunflowers, ranging from petite 2-foot-tall varieties to giants that stand 10 feet tall or more.',
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunforest-mix-sunflower-types-1586794598.jpg');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('African Iris','Flower',3,8,11,'Spring',7,'African iris is a great all-purpose plant for home landscapes in Zones 8 and above. Its sturdy, reed-like foliage is evergreen and a wonderful accent plant in the landscape. Count on bright white flowers to decorate the clumps of 2- to 4-foot-tall plants from spring to fall. Call on African iris to add color and texture to tough landscaping areas, such as parking strips, flanking driveways, and dry patches near a home foundation. It stands up to heat, drought, and neglect.',
			'https://www.gannett-cdn.com/presto/2019/04/16/PTCN/ca1c5535-5446-47df-bc51-20e16b19ff17-dietes_iridioides_April_21.jpg');
			
INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Hyacinth','Flower',1,4,9,'Spring',3,'The perfume of blooming hyacinths is as symbolic of early spring as lilacs are to the late-spring garden. Hyacinth plants consist of chubby succulent leaves arranged around a central flower spike. Florets pack the flower column in tight clusters. Bulb hybridizers have been busy pushing the envelope on hyacinth colors and forms, and now hybrids are available in almost every color except black. The double forms have rosettelike flowers that add intriguing texture.',
			'https://www.hollandbulbfarms.com/Shared/Images/Product/Giant-Mixed-Hyacinths-15-bulbs/84107-giant-mixed-hyacinths.jpg');
		
INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Lily of the Valley','Flower',1,3,9,'Spring',10,'How can such a tiny flower give off such a tremendous scent? Tiny lily of the valley sends up its lovely little sprays of bell-like white or pale pink flowers each spring. Allow it to spread a little (which it does, so much that it can be a problem) and it will perfume the whole area with its distinctive scent. It also makes adorable, tiny bouquets. It makes a good groundcover in small areas.',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Convallaria_majalis_0002.JPG/1200px-Convallaria_majalis_0002.JPG');

INSERT INTO plantInfo( PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES('Daffodil','Flower',1,3,9,'Spring',7,'Small-cup daffodils possess all the same qualities as large-cup and trumpet daffodils with the difference being the size of their cups. To be classified as a small-cup daffodil, the cup (aka corona) must be less than one-third the length of the petals. Most small-cup daffodils bear only one flower per stem. Ranging from miniature daffodils standing 6 inches tall to those that tower 24 inches or more in the spring garden, these pretty plants look at home throughout the landscape. Small-cup daffodils often emit a lovely fragrance.',
			'https://www.almanac.com/sites/default/files/styles/max_325x325/public/image_nodes/daffodil.jpg');

CREATE TABLE planner(
	username VARCHAR(255) NOT NULL UNIQUE,
	plannerdata VARCHAR(10000) NOT NULL
);

DROP USER IF EXISTS garden;
CREATE USER garden WITH PASSWORD 'shephard';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO garden;
