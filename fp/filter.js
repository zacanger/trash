// for an array of objects, return an array where each message is <= 50 chars.

const messages = [
  { message : 'Esse id amet quis eu esse aute officia ipsum.'}
, { message : 'Shrine wonton soup marketing office-space corporation'}
, { message : 'Nano-motion spook crypto-sprawl towards.'}
, { message : 'Rifle plastic range-rover fetishism pistol refrigerator camera futurity advert industrial grade claymore mine cyber-tower.'}
]

const shorter = messages => messages
  .filter(row => row.message.length <= 50)
  .map(i => i.message)

