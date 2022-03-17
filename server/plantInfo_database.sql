CREATE TABLE plantInfo(
	PLANT_ID INT NOT NULL,
	PLANT_NAME VARCHAR(255) NOT NULL,
	PLANT_TYPE VARCHAR(255) NOT NULL,
	PLANT_SPACING VARCHAR(255) NOT NULL,
	ZONE_LOWER INT NOT NULL,
	ZONE_UPPER INT NOT NULL,
	season_type_id VARCHAR(255) NOT NULL,
	water_schedule VARCHAR(255) Not NULL,
	"description" character varying(10000) COLLATE pg_catalog."default",
    image bytea,
	PRIMARY KEY(PLANT_ID)
	
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS plantInfo
    OWNER to postgres;

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0001,'test name','test type','# per # ft^2',0,0,'test season','Once a week','test plant',
			bytea('C:/Users/pebend/Desktop/GSimages/testplant.jpg'));


INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0011,'Winter Squash','Vegetable','1 per 6 ft^2',2,10,'Fall','Twice a week','Winter Squash comes in an assortment of colors and shapes. While they can be harvested late summer, most chose to harvest the vegetable just as autumn arrives on their doorstep.',
			bytea('C:/Users/pebend/Desktop/GSimages/0011.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0012,'Carrot','Vegetable','1 per 6 ft^2',2,10,'Winter','Once a week','Carrots are a must try homegrown vegeatble that have may have a distinct flavor in comparison to the ones you buy from the your local grocery store.',
			bytea('C:/Users/pebend/Desktop/GSimages/0012.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0013,'Turnip','Vegetable','9 per ft^2',2,10,'Summer','Once a week','An amazing addition to a multitude of meals the turnip was once the most popular vegetable to grow at home. The turnip is quite versatile in a sense that it can be cooked in a multitude of ways.',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0014,'Onion','Vegetable','4 per ft^2',2,10,'Fall','Once a week','A easy vegetable to grow, the Onion provides a very bold-flavor to your palette. Either pop it into your salad, pickle it, or cook it down to caramelize, the onion is a versatile must have in your pantry.',
			bytea('C:/Users/pebend/Desktop/GSimages/0014.jpg'));


INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0015,'Lettuce','Vegetable','1 per ft^2',2,10,'Spring','Twice a week','A notably easier plant to grow, Lettuce harvested just in time for spring to provide your meals with a satisfying crunch of leafy flavor.',
			bytea('C:/Users/pebend/Desktop/GSimages/0015.jpg'));





INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0021,'Fennel','Herb','1 per ft^2',4,9,'Fall','Once a week','Both the bulb and leaves are used for a variety of dishes. Typically, fennel plants are harvested in the fall although others may harvest them in the spring or even summer season.',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0022,'Chives','Herb','1 per ft^2',3,10,'Summer','Once a week','Mainly utilized as a topping for most dishes, chives are used to add a fresh taste to a variety of cuisines.',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0023,'Basil','Herb','1 per ft^2',0,0,'Fall','Once a week','A must have for italian dishes, the basil plant is perfect for salads and pasta recipes. If you still have an abundance left after the growing season, it is best to use a blanching method to preserve them in your fridge for longer.',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0024,'Thyme','Herb','1 per ft^2',4,9,'Spring','Once every two weeks','Thyme can be grown both outdoors and inside given the neccessary amount of sunlgiht. This lovely herb is a must have to add to your culinary palette.',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0025,'Dill','Herb','1 per ft^2',2,11,'Summer','Twice a week','Dill is a must have addition to your flavor palette. Best utilized with other vegetables and citrus notes, dill can also be dried if given an over abundance.',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));







INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0031,'Tomato','Fruit','4 per ft^2',3,13,'Summer','Twice a week','Tomatos are increidbly easy to grow under the right conditions. No matter the meal tomatoes find their way into your breakfast, lunch and dinner to provide a juicy and sweet flavor.',
			bytea('C:/Users/pebend/Desktop/GSimages/0013.jpg'));


INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0032,'Strawberry','Fruit','1 per ft^2',3,10,'Spring','Three times a week','Strawberries are an incredibly juicy and sweet fruit. Create your own homemade jam for a special peanut butter and jelly sandwich.',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0033,'Peach','Fruit','1 per 15 ft^2',5,8,'Spring','Once every two to three weeks','Peach trees begin to bear fruit after 2-3 year after being planted but they are definitely worth the time and effort needed.',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0034,'Raspberries','Fruit','1 per 2 ft^2',3,9,'Summer','Three times a week','Raspberry plants are a relatively easier fruit to grow and have been known to be loaded with beneficial nutrients.',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0035,'Grapes','Fruit','1 per 6 ft^2',4,10,'Spring','Once a week','You can only begin to harvest fruit from a grape vine after 2-3 years after planting. With some patience and love, growing this plant to fruition is absolutely worth the wait.',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));







INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));
			
INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));
		
INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));

INSERT INTO plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));
