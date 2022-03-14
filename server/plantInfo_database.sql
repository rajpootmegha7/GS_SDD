CREATE TABLE garden.plantInfo(
	PLANT_ID INT NOT NULL,
	PLANT_NAME VARCHAR(255) NOT NULL,
	PLANT_TYPE VARCHAR(255) NOT NULL,
	PLANT_SPACING VARCHAR(255) NOT NULL,
	ZONE_LOWER INT NOT NULL,
	ZONE_UPPER INT NOT NULL,
	season_type_id VARCHAR(255) NOT NULL,
	water_schedule integer,
	"description" character varying(10000) COLLATE pg_catalog."default",
    image bytea,
	PRIMARY KEY(PLANT_ID)
	
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS garden.plantInfo
    OWNER to postgres;

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0001,'test name','test type',0,0,0,'test season',0,'test plant',
			bytea('C:/Users/pebend/Desktop/GSimages/testplant.jpg'));


INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0011,'Winter Squash','Vegetable','1 per 6 ft^2',2,10,'Fall',2,'Winter Squash comes in an assortment of colors and shapes. While they can be harvested late summer, most chose to harvest the vegetable just as autumn arrives on their doorstep.',
			bytea('C:/Users/pebend/Desktop/GSimages/0011.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0012,'Carrot','Vegetable','1 per 6 ft^2',2,10,'Winter',1,'Carrots are a must try homegrown vegeatble that have may have a distinct flavor in comparison to the ones you buy from the your local grocery store.',
			bytea('C:/Users/pebend/Desktop/GSimages/0012.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0013,'Turnip','Vegetable','9 per ft^2',2,10,'Summer',1,'An amazing addition to a multitude of meals the turnip was once the most popular vegetable to grow at home. The turnip is quite versatile in a sense that it can be cooked in a multitude of ways.',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0014,'Onion','Vegetable','4 per ft^2',2,10,'Fall',1,'A easy vegetable to grow, the Onion provides a very bold-flavor to your palette. Either pop it into your salad, pickle it, or cook it down to caramelize, the onion is a versatile must have in your pantry.',
			bytea('C:/Users/pebend/Desktop/GSimages/0014.jpg'));


INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0015,'Lettuce','Vegetable','1 per ft^2',2,10,'Spring',2,'A notably easier plant to grow, Lettuce harvested just in time for spring to provide your meals with a satisfying crunch of leafy flavor.',
			bytea('C:/Users/pebend/Desktop/GSimages/0015.jpg'));





INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(002,'test','Herb',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(002,'test','Herb',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(002,'test','Herb',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(002,'test','Herb',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));


INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(002,'test','Herb',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/002.jpg'));







INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(0013,'Tomato','Fruit','4 per ft^2',3,13,'Summer',2,'Tomatos are increidbly easy to grow
			under the right conditions. No matter the meal tomatoes find their way into your breakfast, lunch
			and dinner to provide a juicy and sweet flavor.',
			bytea('C:/Users/pebend/Desktop/GSimages/0013.jpg'));


INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(003,'','Fruit',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(003,'','Fruit',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(003,'','Fruit',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(003,'','Fruit',0,0,0,'',0,'',
			bytea('C:/Users/pebend/Desktop/GSimages/003.jpg'));







INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));
			
INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));
		
INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));

INSERT INTO garden.plantInfo(PLANT_ID,PLANT_NAME,PLANT_TYPE,PLANT_SPACING,ZONE_LOWER,ZONE_UPPER,
			season_type_id,water_schedule,description,image) 
			VALUES(004,'','Flower',,,,'',,'',
			bytea('C:/Users/pebend/Desktop/GSimages/004.jpg'));