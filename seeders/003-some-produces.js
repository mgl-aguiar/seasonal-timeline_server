"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "produces",
      [
        {
          name: "Aubergine",
          imageUrl:
            "http://www.erentarim.com/sites/default/files/styles/1920_720/public/eggplant_2.jpg?itok=e_KJQklU",
          seasonality: "In season from May until September",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 9,
          seasonEnd: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Green Asparagus",
          imageUrl:
            "https://eatsmartidahointhekitchen.com/wp-content/uploads/2020/05/asparagus-iStock-1084123600.jpg",
          seasonality: "In season from mid March until mid July",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 6,
          seasonEnd: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beets",
          imageUrl:
            "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/beetroot.jpg",
          seasonality: "In season from September until March",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 9,
          seasonEnd: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blueberries",
          imageUrl:
            "https://www.naturalhealth365.com/wp-content/uploads/2016/04/blueberries.jpg",
          seasonality: "In season from mid June until mid September",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 13,
          seasonEnd: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brussel sprouts",
          imageUrl:
            "https://www.eattobeat.org/uploads/e51ef2eb71780b9f90080964b935faff.jpg",
          seasonality: "In season from mid September until March",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 17,
          seasonEnd: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cauliflower",
          imageUrl:
            "https://www.eattobeat.org/uploads/e51ef2eb71780b9f90080964b935faff.jpg",
          seasonality: "In season from March until November",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 5,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Celeriac",
          imageUrl:
            "https://foodprint.org/wp-content/uploads/2018/10/AdobeStock_68328453-e1539129935331.jpeg",
          seasonality: "In season from mid August until mid April",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 16,
          seasonEnd: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sweet corn",
          imageUrl:
            "https://www.cheatsheet.com/wp-content/uploads/2016/06/corn-cob-sweet-maize.jpg",
          seasonality: "In season from June until October",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 11,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cucumber",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1341/9165/products/cucumberburpless_1200x1200.jpg?v=1595160028",
          seasonality: "In season from June until October",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 11,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Courgette",
          imageUrl:
            "https://vitalseeds.co.uk/wp-content/uploads/2018/11/Courgette-Cocozelle-4.jpg",
          seasonality: "In season from mid May until November",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 10,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bell pepper",
          imageUrl:
            "https://ethnicfoodsrus.com/wp-content/uploads/2015/03/Bell-Peppers.jpg",
          seasonality: "In season from June until December",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 11,
          seasonEnd: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sweet potatoes",
          imageUrl:
            "https://www.saratogafarmersmarket.org/wp-content/uploads/2017/01/Sweet-potatoes-by-Pattie-Garrett.jpg",
          seasonality: "In season from September until December",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 17,
          seasonEnd: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strawberry",
          imageUrl:
            "https://www.gardeningknowhow.com/wp-content/uploads/2019/04/Honeoye.jpg",
          seasonality: "In season from March until October",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 5,
          seasonEnd: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cherry",
          imageUrl:
            "https://www.supermarketperimeter.com/ext/resources/cherries-stemilt-sp.jpg?height=635&t=1557177476&width=1200",
          seasonality: "In season from June until September",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 11,
          seasonEnd: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grapes",
          imageUrl:
            "http://www.homepreservingbible.com/wp-content/uploads/2016/08/Fresh-tables-grapes-Photo-by-Carole-Cancler.jpg",
          seasonality: "In season from July until December",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 13,
          seasonEnd: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peaches",
          imageUrl:
            "https://orcityfarmersmarket.com/wp-content/uploads/2018/08/DSC02411.jpg",
          seasonality: "In season from early April until late November",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 7,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomatoes",
          imageUrl: "https://www.abelandcole.co.uk/media/7344_15922_z.jpg",
          seasonality: "In season from early June until late November",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 11,
          seasonEnd: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pumpkin",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0011/2341/8172/products/PU660-Small-Sugar-0X7A0592_1024x1024.jpg?v=1574626983g",
          seasonality: "In season from early August until late December",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 15,
          seasonEnd: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Parsnip",
          imageUrl:
            "https://s3.amazonaws.com/cdn.gurneys.com/images/800/14694A.jpg",
          seasonality: "In season from early August until late October",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 15,
          seasonEnd: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jerusalem Artichoke",
          imageUrl:
            "https://www.jpost.com/HttpHandlers/ShowImage.ashx?id=328324",
          seasonality: "In season from early October until late December",
          history:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          geography:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          nutrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          seasonStart: 19,
          seasonEnd: 24,
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
