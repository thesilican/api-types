import { ScryfallCard } from "../../../Card";

const InvasionOfNewAlara: ScryfallCard.Transform = {
  object: "card",
  id: "318c363b-61cc-4e2f-8f86-a4287539ea07",
  oracle_id: "8faa4330-07bb-4b65-810a-bbce29d3cd42",
  multiverse_ids: [607288, 607289],
  mtgo_id: 110348,
  arena_id: 84524,
  tcgplayer_id: 491252,
  cardmarket_id: 704420,
  name: "Invasion of Alara // Awaken the Maelstrom",
  lang: "en",
  released_at: "2023-04-21",
  uri: "https://api.scryfall.com/cards/318c363b-61cc-4e2f-8f86-a4287539ea07",
  scryfall_uri: "https://scryfall.com/card/mom/230/invasion-of-alara-awaken-the-maelstrom?utm_source=api",
  layout: "transform",
  highres_image: true,
  image_status: "highres_scan",
  cmc: 5.0,
  type_line: "Battle — Siege // Sorcery",
  color_identity: ["B", "G", "R", "U", "W"],
  keywords: [],
  card_faces: [
    {
      object: "card_face",
      name: "Invasion of Alara",
      mana_cost: "{W}{U}{B}{R}{G}",
      type_line: "Battle — Siege",
      oracle_text:
        "When Invasion of Alara enters the battlefield, exile cards from the top of your library until you exile two nonland cards with mana value 4 or less. You may cast one of those two cards without paying its mana cost. Put one of them into your hand. Then put the other cards exiled this way on the bottom of your library in a random order.",
      colors: ["B", "G", "R", "U", "W"],
      defense: "7",
      artist: "Mathias Kollros",
      artist_id: "2ae0dd12-047c-4efb-80d7-bccc3bac5fba",
      illustration_id: "f580122c-7d41-48f1-95fb-00ef6346b125",
      image_uris: {
        small: "https://cards.scryfall.io/small/front/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        normal: "https://cards.scryfall.io/normal/front/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        large: "https://cards.scryfall.io/large/front/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        png: "https://cards.scryfall.io/png/front/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.png?1682715186",
        art_crop: "https://cards.scryfall.io/art_crop/front/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        border_crop:
          "https://cards.scryfall.io/border_crop/front/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
      },
    },
    {
      object: "card_face",
      name: "Awaken the Maelstrom",
      flavor_name: "",
      mana_cost: "",
      type_line: "Sorcery",
      oracle_text:
        "Awaken the Maelstrom is all colors.\nTarget player draws two cards. You may put an artifact card from your hand onto the battlefield. Create a token that's a copy of a permanent you control. Distribute three +1/+1 counters among one, two, or three creatures you control. Destroy target permanent an opponent controls.",
      colors: ["B", "G", "R", "U", "W"],
      artist: "Mathias Kollros",
      artist_id: "2ae0dd12-047c-4efb-80d7-bccc3bac5fba",
      illustration_id: "9890958e-7f57-449e-ac4c-adfb0591ae2a",
      image_uris: {
        small: "https://cards.scryfall.io/small/back/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        normal: "https://cards.scryfall.io/normal/back/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        large: "https://cards.scryfall.io/large/back/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        png: "https://cards.scryfall.io/png/back/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.png?1682715186",
        art_crop: "https://cards.scryfall.io/art_crop/back/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
        border_crop:
          "https://cards.scryfall.io/border_crop/back/3/1/318c363b-61cc-4e2f-8f86-a4287539ea07.jpg?1682715186",
      },
    },
  ],
  all_parts: [
    {
      object: "related_card",
      id: "8cd96dce-0cc4-4417-bec1-863b2c44f844",
      component: "token",
      name: "Copy",
      type_line: "Token",
      uri: "https://api.scryfall.com/cards/8cd96dce-0cc4-4417-bec1-863b2c44f844",
    },
    {
      object: "related_card",
      id: "318c363b-61cc-4e2f-8f86-a4287539ea07",
      component: "combo_piece",
      name: "Invasion of Alara // Awaken the Maelstrom",
      type_line: "Battle — Siege // Sorcery",
      uri: "https://api.scryfall.com/cards/318c363b-61cc-4e2f-8f86-a4287539ea07",
    },
  ],
  legalities: {
    standard: "legal",
    future: "legal",
    historic: "legal",
    gladiator: "legal",
    pioneer: "legal",
    explorer: "legal",
    modern: "legal",
    legacy: "legal",
    pauper: "not_legal",
    vintage: "legal",
    penny: "not_legal",
    commander: "legal",
    oathbreaker: "legal",
    brawl: "legal",
    historicbrawl: "legal",
    alchemy: "legal",
    paupercommander: "not_legal",
    duel: "legal",
    oldschool: "not_legal",
    premodern: "not_legal",
    predh: "not_legal",
  },
  games: ["paper", "arena", "mtgo"],
  reserved: false,
  foil: true,
  nonfoil: true,
  finishes: ["nonfoil", "foil"],
  oversized: false,
  promo: false,
  reprint: false,
  variation: false,
  set_id: "392f7315-dc53-40a3-a2cc-5482dbd498b3",
  set: "mom",
  set_name: "March of the Machine",
  set_type: "expansion",
  set_uri: "https://api.scryfall.com/sets/392f7315-dc53-40a3-a2cc-5482dbd498b3",
  set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Amom&unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/mom?utm_source=api",
  rulings_uri: "https://api.scryfall.com/cards/318c363b-61cc-4e2f-8f86-a4287539ea07/rulings",
  prints_search_uri:
    "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A8faa4330-07bb-4b65-810a-bbce29d3cd42&unique=prints",
  collector_number: "230",
  digital: false,
  rarity: "rare",
  artist: "Mathias Kollros",
  artist_ids: ["2ae0dd12-047c-4efb-80d7-bccc3bac5fba"],
  border_color: "black",
  frame: "2015",
  security_stamp: "oval",
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: 9835,
  preview: {
    source: "Wizards of the Coast",
    source_uri: "https://mob.iyingdi.com/post/5266532",
    previewed_at: "2023-03-30",
  },
  prices: {
    usd: "0.79",
    usd_foil: "1.29",
    usd_etched: null,
    eur: "0.56",
    eur_foil: "0.52",
    tix: "0.26",
  },
  related_uris: {
    gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=607288",
    tcgplayer_infinite_articles:
      "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Invasion+of+Alara+%2F%2F+Awaken+the+Maelstrom&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    tcgplayer_infinite_decks:
      "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Invasion+of+Alara+%2F%2F+Awaken+the+Maelstrom&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    edhrec: "https://edhrec.com/route/?cc=Invasion+of+Alara",
  },
  purchase_uris: {
    tcgplayer:
      "https://www.tcgplayer.com/product/491252?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    cardmarket:
      "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Invasion+of+Alara&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder:
      "https://www.cardhoarder.com/cards/110348?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
  },
};