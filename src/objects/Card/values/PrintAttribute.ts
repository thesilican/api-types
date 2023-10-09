import { ScryfallExtendedFinish } from "./Finishes";

type ScryfallPrintAttribute =
  | "alchemy"
  | "arenaleague"
  | "boosterfun"
  | "boxtopper"
  | "brawldeck"
  | "bringafriend"
  | "bundle"
  | "buyabox"
  | "commanderparty"
  | "concept"
  | "convention"
  | "datestamped"
  | "draculaseries"
  | "draftweekend"
  | "duels"
  | "event"
  | "fnm"
  | "gameday"
  | "giftbox"
  | "godzillaseries"
  | "instore"
  | "intropack"
  | "jpwalker"
  | "judgegift"
  | "league"
  | "mediainsert"
  | "moonlitland"
  | "openhouse"
  | "planeswalkerdeck"
  | "plastic"
  | "playerrewards"
  | "playpromo"
  | "premiereshop"
  | "prerelease"
  | "promopack"
  | "rebalanced"
  | "release"
  | "schinesealtart"
  | "serialized"
  | "setextension"
  | "setpromo"
  | "stamped"
  | "starterdeck"
  | "storechampionship"
  | "themepack"
  | "thick"
  | "tourney"
  | "wizardsplaynetwork";

export type ScryfallPromoType = ScryfallPrintAttribute | `${ScryfallExtendedFinish}`;