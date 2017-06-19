import Ember from 'ember';


var products = [{

  name: "Nest - Cam Outdoor 1080p Security Camera - White",
  description: "Model: NC2100ESSKU: 5451208: Wi-fi; built-in speaker; built-in microphone; compatible with PC, Android and Apple iOS; fixed design",
  manufacturer: "UK",
  image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5451/5451208_sd.jpg;maxHeight=1000;maxWidth=1000",
  cost: 17500
}, {

  name: "Samsung - SmartThings Motion Sensor - White",
  description: "Model: F-CEN-IRM-1SKU: 4481806 Compatible with SmartThings hub; meets ZigBee HA 1.2 protocol; detects motion up to 15' with 120° view range; includes a wall-mounting bracket, four 1",
  manufacturer: "Samsung",
  image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4481/4481806_sd.jpg;maxHeight=1000;maxWidth=1000",
  cost: 3400
}, {

  name: "TrackR - bravo Item Tracker - Silver",
  description: "Model: 852434005201SKU: 4214266 Bluetooth; wireless range of up to 80'; attaches easily to keys, cell phones and wallets; 2-way separation alerts; anodized aluminum construction; locate items in the TrackR app (download required); Crowd GPS network",
  manufacturer: "US",
  image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4214/4214266_rd.jpg;maxHeight=550;maxWidth=642",
  cost: 3000
}, {
  name: "SABRE - Elite Door Alarm - White",
  description: "Model: HS-EDASKU: 4220811 SABRE Elite Door Alarm: 120dB alarm; 2 settings; 4-digit pin code; entry/exit delay; includes mounting hardware",
  manufacturer: "Sparks Security Germany",
  image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4220/4220811_sa.jpg;maxHeight=1000;maxWidth=1000",
  cost: 2000
}];

export default Ember.Route.extend({
  model() {
    return products;
  },
});
