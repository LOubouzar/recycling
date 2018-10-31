const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/ezCycleDB", { useNewUrlParser: true }
  );

const ezCycleSeed = [
    {
        // 1
        name: "Household Hazardous Waste & Electronics Collection (City of Alexandria, VA)",
        address: "3224 Colvin St, Alexandria, VA 22314",
        zipCode: "22314",
        days: "Saturday: 7:30am - 3:30pm (except holidays),\nMonday: 7:30am - 3:30pm (except holidays)",
        url: "https://www.alexandriava.gov/tes/solidwaste/info/default.aspx?id=19206",
        lat: 38.806933,
        long: -77.086211,
        notes: "Proof of residency is required",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true 
    },
    {
        // 2
        name: "Arlington Environmental Collection and Recycling Event (E-CARE)",
        address: "1425 N Quincy St, Arlington, VA 22201",
        zipCode: 22201,
        days: "Nov. 17, 2018: 8:30am - 1:00pm.",
        url: "https://recycling.arlingtonva.us/household-hazmat/e-care/",
        lat: 38.889079,
        long: -77.107540,
        notes: "Proof of residency is required\nFee for CRT",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true
    },
    {
        // 3
        name: "Quarterly Recycling Day (Town of Vienna, VA)",
        address: "600 Mill Street NE, Vienna, VA 22180",
        zipCode: 22180,
        days: "Dec. 1, 2018, 8:00am - 2:00pm",
        url: "https://www.viennava.gov/index.aspx?nid=174",
        lat: 38.910879,
        long: -77.271173,
        notes: "No CRT TVs or screens",
        rechargeableBatteries: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true
    },
    {
        // 4
        name: "Turtle Wings",
        address: "3200 Hubbard Rd, Hyattsville, MD 20785",
        zipCode: 20785,
        days: "Call (833)-227-8990 for details",
        url: "https://turtlewings.com/corporations/recycling/electronics_recycling_dc",
        lat: 38.929781,
        long: -76.873768,
        notes: " ",
        rechargeableBatteries: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true,
        wires: true 
    },
    {
        // 5
        name: "Forever Green Recycle, Inc.",
        address: "4124 Walney Road, Unit F, Chantilly, VA 20151",
        zipCode: 20151,
        days: "Mon - Fri: 8:00am - 4:00pm\nSat: 10:00am-3:00pm",
        url: "https://www.forevergreenrecycle.com/",
        lat: 38.889562,
        long: -77.434076,
        notes: " ",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
        homeAppliances: true
    },
    {
        name: "Best Buy",
        address: "6555 Frontier Dr, Springfield, VA 22150",
        zipCode: 22150,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.775091,
        long: -77.169664,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 6
        name: "Best Buy",
        address: "5799 Leesburg Pike, Falls Church, VA 22041",
        zipCode: 22041,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.856227,
        long: -77.131091,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 7
        name: "Best Buy",
        address: "3401 Jefferson Davis Hwy, Alexandria, VA 22305",
        zipCode: 22305,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.844998,
        long: -77.050365,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 8
        name: "Best Buy",
        address: "1201 S Hayes St Ste B, Arlington, VA 22202",
        zipCode: 22202,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.861800,
        long: -77.058307,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 9
        name: "Best Buy",
        address: "4500 Wisconsin Ave NW, Washington, DC 20016",
        zipCode: 20016,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.948383,
        long: -77.080347,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 10
        name: "Best Buy",
        address: "3100 14th St NW, Washington, DC 20010",
        zipCode: 20010,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.929167,
        long: -77.033887,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 11
        name: "Best Buy",
        address: "13058 Fair Lakes Shopping Center, Fairfax, VA 22033",
        zipCode: 22033,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.857193,
        long: -77.396105,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 12
        name: "Best Buy",
        address: "2730 Prince William Pkwy, Woodbridge, VA 22192",
        zipCode: 22192,
        days: "Mon - Sat: 10:00am - 9:00pm\nSun: 10:00am-8:00pm",
        url: "https://www.bestbuy.com/site/services/recycling/pcmcat149900050025.c?id=pcmcat149900050025",
        lat: 38.652303,
        long: -77.295141,
        notes: "Limit three items per household per day.",
        rechargeableBatteries: true,
        computers: true,
        tabletsPhones: true,
        wires: true,
    },
    {
        // 13
        name: "Staples",
        address: "6731 Frontier Dr, Springfield, VA 22150",
        zipCode: 22150,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.771113,
        long: -77.169849,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true
    },
    {
        // 14
        name: "Staples",
        address: "7708 Richmond Hwy, Alexandria, VA 22306",
        zipCode: 22306,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.748795,
        long: -77.088066,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true
    },
    {
        // 15
        name: "Staples",
        address: "3301 Jefferson Davis Hwy, Alexandria, VA 22305",
        zipCode: 22305,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.835189,
        long: -77.049597,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true
    },
    {
        // 16
        name: "Staples",
        address: "6139 Oxon Hill Rd, Oxon Hill, MD 20745",
        zipCode: 20745,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.806146,
        long: -76.981993,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true
    },
    {
        // 17
        name: "Staples",
        address: "3804 Wilson Blvd, Arlington, VA 22203",
        zipCode: 22203,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.880791,
        long: -77.104390,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true
    },
    {
        // 18
        name: "Staples",
        address: "5801 Leesburg Pike, Bailey's Crossroads, VA 22041",
        zipCode: 22041,
        days: "Mon - Fri: 8:00am - 9:00pm\nSat: 9:00am-9:00pm\nSun: 10:00am - 6:00pm",
        url: "https://www.staples.com/sbd/cre/marketing/sustainability-center/recycling-services/electronics/",
        lat: 38.854022,
        long: -77.129025,
        notes: "Limit of seven items can be recycled per customer per day.",
        rechargeableBatteries: true,
        crt: true,
        tvLCD: true,
        computers: true,
        tabletsPhones: true
    }
];

db.Listing
  .remove({})
  .then(() => db.Listing.collection.insertMany(ezCycleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });