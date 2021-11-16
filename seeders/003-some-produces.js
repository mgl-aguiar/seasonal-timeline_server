"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "produces",
      [
        {
          name: "Aubergine",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060437/seasonal%20timeline/produces/aubergine.jpg",
          seasonality: "In season from May until September",
          history:
            "There is no consensus about the place of origin of aubergine; the plant species has been described as native to India, where it continues to grow wild, Africa, or South Asia. It has been cultivated in southern and eastern Asia since prehistory. Because of the plant's relationship with various other nightshades, the fruit was at one time believed to be extremely poisonous. The flowers and leaves can be poisonous if consumed in large quantities due to the presence of solanine.",
          geography:
            "China leads the world in aubergine cultivation, followed by India, Egypt, Iran and Turkey. The aubergine is a delicate, tropical perennial plant often cultivated as a tender or half-hardy annual in temperate climates.",
          nutrition:
            "Raw aubergine is 92% water, 6% carbohydrates, 1% protein, and has negligible fat. Aubergines aren’t the most nutritious members of the nightshade family.They’re just okay as sources of manganese, thiamin, Vitamin B6, Vitamin K and folate, and they are fairly high in fiber and low in calories.",
          seasonStart: 9,
          seasonEnd: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asparagus",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060683/seasonal%20timeline/produces/asparagus.jpg",
          seasonality: "In season from mid March until mid July",
          history:
            "Arguably the most iconic of the spring vegetables, asparagus is grown around the world and has been celebrated for millennia. Ancient Egyptians are said to have enjoyed it as many as 20,000 years ago, and Rome’s first emperor, Augustus, employed a whole group of ships, the so-called “asparagus fleet,” to transport huge shipments of it. Any asparagus enthusiast will tell you that despite its year-round appearance in modern American grocery stores, it is far tastier grown locally and enjoyed in the spring. But our modern tendency to go to great lengths to eat it whenever we want isn’t new. France’s King Louis XIV had special greenhouses built to grow the delicacy year-round, the Romans were known to freeze it in the Alps and both they and the Greeks reportedly dried it for off-season noshing.",
          geography:
            "China leads global production, followed by Peru and then the US. Germany is also famous for asparagus, especially the white variety. Since asparagus often originates in maritime habitats, it thrives in soils that are too saline for normal weeds to grow. Thus, a little salt was traditionally used to suppress weeds in beds intended for asparagus; this has the disadvantage that the soil cannot be used for anything else.",
          nutrition:
            "Like most green vegetables, asparagus is good for you. Among its healthful properties are folate, Vitamin C, potassium, inulin (which is said to be “prebiotic” and is known to aid in digestion), anti-oxidant and anti-inflammatory properties and possibly anti-cancer effects.",
          seasonStart: 6,
          seasonEnd: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beetroot",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060504/seasonal%20timeline/produces/beetroot.jpg",
          seasonality: "In season from September until March",
          history:
            "Beets were domesticated in the ancient Middle East, primarily for their greens, and were grown by the Ancient Egyptians, Greeks and Romans. By the Roman era, it is thought that they were cultivated for their roots as well. From the Middle Ages, beetroot was used as a treatment for a variety of conditions, especially illnesses relating to digestion and the blood.",
          geography:
            "The peak season for beets is generally mid-summer through late fall — but they can be cold stored (like apples) or heavily mulched and so, in most regions, are readily available through the winter.",
          nutrition:
            "Beetroot is high in fiber, folate and manganese, and is a decent source of Vitamin C, potassium and magnesium. The greens are nutritionally almost identical to chard, which means they are high in fiber, Vitamin A, Vitamin C, Vitamin K, riboflavin, calcium, iron, magnesium, copper, manganese — the list goes on and on. The pigments responsible for both red and yellow varieties, betalains, are antioxidants and may also be cancer-preventatives.",
          seasonStart: 9,
          seasonEnd: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blueberry",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060615/seasonal%20timeline/produces/blueberries.jpg",
          seasonality: "In season from mid June until mid September",
          history:
            "Blueberries are native to North America, although they have botanical relatives around the world. They have been harvested for thousands of years by Native North American tribes, who used the plant as both food and medicine; for many tribes, blueberries (and their cousin huckleberries) were important both culturally and economically. Wild blueberries were first harvested commercially in the 1840s.",
          geography:
            "As might be expected, the US and Canada lead the way in blueberry production. In the US, the highbush variety of the fruit is an important commercial crop in Michigan, New Jersey, Georgia, Oregon and Washington. Maine leads in the production of lowbush (“wild”) blueberries.",
          nutrition:
            "Blueberries are one of the world’s healthiest fruits. Not only are they a good source of Vitamin K, Vitamin C and manganese; they are also high in fiber and relatively low in calories. The little blue fruits are naturally rich in polyphenols, antioxidant chemicals that are increasingly linked to big-time health benefits, including in cardiovascular health, brain functioning (including memory) and even cancer prevention.",
          seasonStart: 13,
          seasonEnd: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brussels sprout",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1636986835/seasonal%20timeline/produces/brussels-sprout.jpg",
          seasonality: "In season from mid September until March",
          history:
            "Although native to the Mediterranean region with other cabbage species, Brussels sprouts first appeared in northern Europe during the 5th century, later being cultivated in the 13th century near Brussels, Belgium, from which they derived their name. Forerunners to modern Brussels sprouts were probably cultivated in Ancient Rome. The first written reference dates to 1587. During the 16th century, they enjoyed a popularity in the southern Netherlands that eventually spread throughout the cooler parts of Northern Europe. ",
          geography:
            "In Continental Europe, the largest producers are the Netherlands, at 82,000 metric tons, and Germany, at 10,000 tons. The United Kingdom has production comparable to that of the Netherlands, but its crop is generally not exported. Brussels sprouts grow in temperature ranges of 7–24 °C, with highest yields at 15–18 °C. Harvest season in temperate zones of the northern latitudes is September to March, making Brussels sprouts a traditional winter-stock vegetable.",
          nutrition:
            "Brussels sprouts are good for you! They are high in Vitamin C and Vitamin K, which is valued for its anti-inflammatory properties. They are a very good source of nutrients including folate, manganese, Vitamin B6, dietary fiber, choline, copper, Vitamin B1, potassium, phosphorus, and omega-3 fatty acids. They are also believed to reduce cancer risk.",
          seasonStart: 17,
          seasonEnd: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cauliflower",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060061/seasonal%20timeline/produces/cauliflower.jpg",
          seasonality: "In season from March until November",
          history:
            "In the Middle Ages, early forms of cauliflower were associated with the island of Cyprus, with the 12th- and 13th-century Arab botanists Ibn al-'Awwam and Ibn al-Baitar, claiming its origin to be Cyprus. This association continued into Western Europe, where cauliflowers were sometimes known as Cyprus colewort, and there was extensive trade in western Europe in cauliflower seeds from Cyprus, under the French Lusignan rulers of the island, until well into the 16th century. They were introduced to France from Genoa in the 16th century, but they did not commonly appear on grand tables until the time of Louis XIV. It was introduced to India in 1822 by the British.",
          geography:
            "Because weather is a limiting factor for producing cauliflower, the plant grows best in moderate daytime temperatures 21–29 °C (70–85 °F), with plentiful sun, and moist soil conditions high in organic matter and sandy soils. In the northern hemisphere, fall season plantings in July may enable harvesting before autumn frost. Global production of cauliflowers (combined for production reports with broccoli) is led by China and India which, combined, have 73% of the world total. Secondary producers were the United States, Spain, Mexico and Italy.",
          nutrition:
            "Cauliflower is packed with Vitamin C, as one cup of raw cauliflower provides 85 percent of your daily recommended value. It is also high in folates, Vitamin K, and Vitamin B-6.",
          seasonStart: 5,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Celeriac",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060556/seasonal%20timeline/produces/celeriac.jpg",
          seasonality: "In season from mid August until mid April",
          history:
            "Despite popular belief, celeriac is not the “root” of stalk celery but a close relative. Both are descendants of wild celery which dates to ancient Egypt, where it was used as a medicinal plant. Also known as celery root, knob celery and turnip celery, celery root is a native of the Mediterranean. It became available in North America in the 19th century but was largely ignored. Historically, it has been much better known in Europe, where it still grows wild.",
          geography:
            "In the Mediterranean Basin and in Northern Europe, celeriac is widely cultivated. It is also cultivated in North Africa, Siberia, Southwest Asia, and North America. In North America, the 'Diamant' cultivar predominates. Celeriac is a great example of seasonal, local produce that is truly at its peak during the coldest months of the year.",
          nutrition:
            "Although far from a power food, celery root is plenty nutritious. At 66 calories, one cup contains nearly three grams of fiber and more than two grams of protein, and is a respectable source of both calcium and potassium. Not shabby at all.",
          seasonStart: 16,
          seasonEnd: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sweet corn",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060471/seasonal%20timeline/produces/sweet-corn.jpg",
          seasonality: "In season from June until October",
          history:
            "Corn, aka maize, is actually a grass native to Central and South America. Corn was probably first cultivated in Mexico, where archeological evidence points to the first human-grown corn dating from 5500 BC. Cultivation of the grain then spread North to New Mexico and South to Peru, then to other regions of South America. It eventually became an important staple food in much of South, Central and North America.",
          geography:
            "Corn is widely cultivated throughout the world, and a greater weight is produced each year than any other grain. In 2018, total world production was 1.15 billion tonnes, led by the United States with 34.2% of the total. China produced 22.4% of the global total. Sweet corn is available only in the summer and early fall, in most areas between July and September. Because sweet corn is at its best when really, really fresh, try to seek out local corn from farmers markets or farm stands.",
          nutrition:
            "Fresh corn is a good source of Vitamin B6, thiamin, niacin, magnesium, iron and a number of other important minerals. Corn is also low in fat and high in dietary fiber and protein. Eating corn with beans provides all of the amino acids that humans need, as corn is high in methionine but lacking in lysine, while beans are high in lysine but lacking in methionine.",
          seasonStart: 11,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cucumber",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060323/seasonal%20timeline/produces/cucumber.jpg",
          seasonality: "In season from June until October",
          history:
            "A native of India, the cucumber is among the oldest domesticated plants, referenced in literature and art from antiquity. Along with caper buds, figs, grapes and honey, wild cucumbers are mentioned in “Gilgamesh,”  one of the earliest surviving works of literature from around 3,000 BCE. The cucumber (or its wild ancestor) also makes appearances in the Bible: The Israelites reminisce about it amongst the food they ate as slaves in Numbers 11:5 and it’s also mentioned in the Book of Isaiah. In first century CE, the cucumber was a favorite of the Roman emperor Tiberius, who had greenhouses constructed to satisfy his year-round cucumber cravings. Fast forward 700 or so years, and the cucumber continued to be prized among the ruling class. Medieval emperor Charlemagne insisted that the cucumber be planted in all the gardens of his many estates.",
          geography:
            "The cucumber originates from South Asia, but now grows on most continents, as many different types of cucumber are traded on the global market. In 2019, world production of cucumbers and gherkins was 88 million tonnes, led by China with 80% of the total.",
          nutrition:
            "Thirsty? Eat a cucumber. Although a respectable source of potassium and Vitamin C, the cucumber is a superb thirst quencher. The cucumber is also rich in lignans, a type of phytoestrogen with anti-oxidative and anti-inflammatory properties. (Other lignan-rich plants are: flax seed, sesame seed and oat bran.) Lignans continue to be studied for their link to lowering the risk of hormone-related cancers.",
          seasonStart: 11,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Courgette",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1636986810/seasonal%20timeline/produces/courgette.jpg",
          seasonality: "In season from mid May until November",
          history:
            "Courgette, like all squash, has its ancestry in the Americas, specifically Mesoamerica where it was first domesticated over 7000 years ago. However, the varieties of green, cylindrical squash harvested immature and typically called 'courgette' were cultivated in northern Italy, as much as three centuries after the introduction of cucurbits from the Americas. ",
          geography:
            "Courgette is very easy to cultivate in temperate climates. Courgettes and other summer squash are available from the summer through the fall. Because of its high water content (95 percent), they are highly perishable. While summer squash grown in warmer regions of the world is available year-round in supermarkets, it is best enjoyed in season for best flavor and texture.",
          nutrition:
            "Like its cousin, the watermelon, courgette is low in calories — 1 cup of raw courgette is just 21 calories. A rich source of potassium, vitamins B-2, B-6 and C, courgette also offers a substantial amount of fiber.",
          seasonStart: 10,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sweet potato",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060240/seasonal%20timeline/produces/sweet-potatoes.jpg",
          seasonality: "In season from September until December",
          history:
            "The origin of the sweet potato is thought to be somewhere between southern Mexico and Venezuela, but current research narrows the field to Central America. It was probably domesticated in Peru between 4,000 and 5,000 years ago. Columbus took the plant home with him when he returned to Europe in the late 15th century, and from there Spanish and Portuguese explorers dispersed it to the rest of the world. The exception to this is Polynesia: sweet potatoes were already being cultivated by the 13th century (long before European contact) on several far-flung Polynesian islands, and became an important staple food on some.",
          geography:
            "Sweet potatoes grow better in warmer climates and are cultivated throughout tropical and warm temperate regions wherever there is sufficient water to support their growth. China by far leads the world in sweet potato production, followed by Uganda, Nigeria and Indonesia.",
          nutrition:
            "Sweet potatoes are good for you, especially varieties with orange or purple flesh. They contain truly awesome amounts of Vitamin A — between 500 percent and 700 percent of your recommended daily intake in just one cup. (Vitamin A is a vitamin necessary for eye, immune system and skin health, and is also a powerful antioxidant.) Sweet potatoes also contain fiber, excellent amounts of Vitamins C and B-6, manganese, potassium and several other vitamins and minerals. They are even good sources of iron and calcium. Sweet potatoes are also thought to be helpful in blood sugar regulation.",
          seasonStart: 17,
          seasonEnd: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strawberry",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060298/seasonal%20timeline/produces/strawberry.jpg",
          seasonality: "In season from March until October",
          history:
            "There are native varieties of wild strawberries in both the Old and New Worlds, ranging from South America to Europe to Asia. A member of the Rosaceae family (along with roses, apples and blackberries), they have been cultivated in Europe since the 14th century, though there is some evidence that Native Americans may have gardened the North American wild variety even earlier (and created one of the first versions of strawberry shortcake, made by mixing them with cornmeal). Unlike any other fruit, strawberry seeds are on the outside (rather than the inside) of the fruit, technically making the strawberry not a berry at all. ",
          geography:
            "The US leads the world in strawberry cultivation, followed by Turkey and Spain. California is on top of US production of the fruit, as it grows about 80 percent of all American-grown strawberries (and clearly a large proportion of the world’s strawberries, too). Strawberries are labor-intensive to cultivate and are susceptible to a variety of diseases and pests. The seedlings must be planted by hand, and the berries are also still harvested by hand, even in large industrial operations.",
          nutrition:
            "Strawberries are high in Vitamin C, fiber and manganese. The berries are also a fairly good source of folate and potassium, and are low in calories.",
          seasonStart: 5,
          seasonEnd: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cherry",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060643/seasonal%20timeline/produces/cherries.jpg",
          seasonality: "In season from June until September",
          history:
            "The English word cherry derives from Old Northern French or Norman cherise from the Latin cerasum, referring to an ancient Greek region, Kerasous near Giresun, Turkey, from which cherries were first thought to be exported to Europe. The indigenous range of the sweet cherry extends through most of Europe, western Asia, and parts of northern Africa, and the fruit has been consumed throughout its range since prehistoric times. A cultivated cherry is recorded as having been brought to Rome by Lucius Licinius Lucullus from northeastern Anatolia, also known as the Pontus region, in 72 BC.",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "The cherry is a motherlode of nutrients and disease-fighting antioxidants. One cup of cherries (approximately 21 pitted) have just 90 calories and is a rich source of potassium and Vitamin C, plus fiber and even a small amount of protein. What intrigues cherry lovers is the plethora of anthocyanins (the source of the red pigment), which possess preventative powers that have been linked to lowered risk of Alzheimer’s disease, heart disease and diabetes. As an anti-inflammatory, the fruit is showing great potential as a pain reliever for arthritis and maybe even gout.",
          seasonStart: 11,
          seasonEnd: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grape",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637059961/seasonal%20timeline/produces/grapes.jpg",
          seasonality: "In season from July until December",
          history:
            "The Middle East is generally described as the homeland of grape and the cultivation of this plant began there 6,000–8,000 years ago. Yeast, one of the earliest domesticated microorganisms, occurs naturally on the skins of grapes, leading to the discovery of alcoholic drinks such as wine. The earliest archeological evidence for a dominant position of wine-making in human culture dates from 8,000 years ago in Georgia. Ancient Egyptian hieroglyphics record the cultivation of purple grapes, and history attests to the ancient Greeks, Cypriots, Phoenicians, and Romans growing purple grapes both for eating and wine production. The growing of grapes would later spread to other regions in Europe, as well as North Africa, and eventually in North America.",
          geography:
            "Approximately 71% of world grape production is used for wine, 27% as fresh fruit, and 2% as dried fruit. The area dedicated to vineyards is increasing by about 2% per year. The world's top producers of grapes are China, followed by the United States, Italy, France and Spain. Grape growing and harvesting is a very labor-intensive process and has been associated with bad labor practices from as far back as the Romans.",
          nutrition:
            "Grapes are good sources of Vitamins C and K, but not much else. What they lack in vitamins, they make up for in containing a number of potent antioxidant compounds that may provide cardiovascular benefits, lower blood sugar and have anti-cancer properties. (It should be noted that the scientific verdict is still out on many of these claims, however.) The fruit with red or purple skins contain the most of these compounds.",
          seasonStart: 13,
          seasonEnd: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peach",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060207/seasonal%20timeline/produces/peaches.jpg",
          seasonality: "In season from early April until late November",
          history:
            "Although its botanical name Prunus persica refers to Persia, genetic studies suggest peaches originated in China, where they have been cultivated since the neolithic period. Recent evidence indicates that domestication occurred as early as 6000 BC in Zhejiang Province of China, where it was highly revered and continues to play an important role in the folklore of the Chinese people. In both China and Japan, the peach is a symbol of longevity and immortality.",
          geography:
            "Peaches grow in a fairly limited range in dry, continental or temperate climates, since the trees have a chilling requirement that tropical or subtropical areas generally do not satisfy except at high altitudes. China, where the peach got its start with the name “tao,” is the world’s leading producer, followed by Italy and the United States.",
          nutrition:
            "A medium-sized peach contains about 50 calories and is a decent source of Vitamins A and C. There’s even a little bit of protein thrown in. The pigments that give the fruit its gorgeous orange-rose hue are a respectable source of disease-fighting polyphenols and show great promise in tackling certain types of cancer.The seed is poisonous, however, as it contains naturally occurring cyanide, and should not be consumed without consulting a healthcare professional.",
          seasonStart: 7,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomato",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060728/seasonal%20timeline/produces/tomatoes.jpg",
          seasonality: "In season from early June until late November",
          history:
            "Tomatoes are native to western South America, where their ancestor was a teeny wild cherry variety. It is unclear whether tomatoes were first cultivated in Peru or in Mexico, but it is known that the Aztecs grew them along with tomato relatives tomatillos and chile peppers. From Mexico, tomatoes spread to Spain in the 16th century, where they hardly caught on like wildfire. Europeans were wary of tomatoes for another couple hundred years, apparently due to their botanical family connection to nightshades, several of which can be deadly. Tomatoes weren’t accepted as good eating until the 17th and 18th centuries, with Spain and Italy leading the way for future tomato world domination. According to “The Oxford Companion to Food,” the first printed recipe for a tomato dish is in a 17th century Neapolitan cookbook for “Tomato Sauce — Spanish Style,” and is easily recognizable as the very first printed recipe for marinara sauce. The Spanish spread the tomato to the rest of the world, including to their Caribbean colonies and to the Philippines, where the fruit then spread to Southeast Asia, and finally to the rest of Asia. The Spanish are probably also responsible for the introduction of the tomato in North America, having cultivated the plant in their colony of Florida.",
          geography:
            "Numerous varieties of the tomato plant are widely grown in temperate climates across the world, with greenhouses allowing for the production of tomatoes throughout all seasons of the year. China now leads the way in the global production of tomatoes, followed by the US, India and Turkey.",
          nutrition:
            "Tomatoes are low in calories, high in fiber and high in both Vitamins C and A. They are also good sources of Vitamin K, potassium and manganese. As you might have guessed from the tomato’s taxonomic name, Solanum lycopersicum, the fruit is also very high in lycopene, an antioxidant that has preliminarily been linked to cancer prevention, especially prostate cancer. Tomatoes are also rich in flavonoids, antioxidants with anti-inflammatory and anti-bacterial properties. Interestingly, organic tomatoes have been found to have higher levels of flavonoids than conventionally grown varieties.",
          seasonStart: 11,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pumpkin",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1637060265/seasonal%20timeline/produces/pumpkin.jpg",
          seasonality: "In season from early August until late December",
          history:
            "Native to North America (northeastern Mexico and the southern United States), pumpkins are one of the oldest domesticated plants, having been used as early as 7,000 to 5,500 BC. Pumpkins are widely grown for commercial use and as food, aesthetics, and recreational purposes.",
          geography:
            "Pumpkins are grown all around the world for a variety of reasons ranging from agricultural purposes (such as animal feed) to commercial and ornamental sales. Of the seven continents, only Antarctica is unable to produce pumpkins. In 2019, world production of pumpkins was 23 million tonnes, with China accounting for 37% of the total. Ukraine and Russia each produced about one million tonnes",
          nutrition:
            "While the exact nutritional content of pumpkin depends on the variety, orange-fleshed pumpkins are rich in Vitamin A, with one cup of cooked pumpkin supplying 245 percent of your daily needs. It is also high in dietary fiber, Vitamin C and potassium. It has decent amounts of iron, calcium and protein. The seeds (aka pepitas) are high in iron, manganese, Vitamin K and protein. They’re also a great vegetarian source of omega-3 fatty acids, which are critical to a healthy circulatory system and often come from seafood. ",
          seasonStart: 15,
          seasonEnd: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Parsnip",
          imageUrl:
            "https://res.cloudinary.com/dbyywopzz/image/upload/v1636986799/seasonal%20timeline/produces/parsnip.jpg",
          seasonality: "In season from early August until late October",
          history:
            "the wild parsnip probably hails from the southern part of Europe, around the Mediterranean, and most likely cultivated since Roman times. Roman scholar Pliny the Elder refers to pastinaca in his “Naturalis Historia” in first century CE, but many historians claim that he was referring to both the parsnip and its more pigmented cousin, the carrot. From there the root migrated north and found its way into the medieval gardens of France, Britain and Germany. In his book “Cabbages and Kings,” culinary scholar Jonathan Roberts notes that Charlemagne insisted that parsnips be grown on his 9th century estate. Until the potato arrived from the New World, the parsnip was the apparent root of choice in medieval Europe, providing both humans and their livestock starchy sustenance (parsnips still have a reputation as animal feed) and it was a sweet alternative to honey, which was scarce.",
          geography:
            "The parsnip is a great example of seasonal, local produce that is truly at its peak during the coldest months of the year.",
          nutrition:
            "Parsnips can do your body good. One cup of raw parsnips contains six grams of fiber, at 100 calories. It’s rich in potassium and a respectable source of calcium, iron, Vitamin C and folate. It is being studied for its cancer-fighting properties, which come from a phytochemical called falcarinol.",
          seasonStart: 15,
          seasonEnd: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("produces", null, {});
  },
};
