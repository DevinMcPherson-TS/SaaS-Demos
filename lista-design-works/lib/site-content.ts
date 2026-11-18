export const materials = [
  { name: "Limewash", swatch: "swatch-limewash" },
  { name: "White oak", swatch: "swatch-oak" },
  { name: "Linen", swatch: "swatch-linen" },
  { name: "Stone", swatch: "swatch-stone" },
  { name: "Brass", swatch: "swatch-brass" },
] as const;

export const reasons = [
  {
    number: "01",
    title: "Design and the remodel stay together",
    text: "Drawings and the people building from them belong to the same studio. You are not left translating a mood board to a crew you just met.",
  },
  {
    number: "02",
    title: "Decisions follow how you live",
    text: "Cabinet height, a place for shoes, the light at four in the afternoon. The plan starts from the week you already have.",
  },
  {
    number: "03",
    title: "Materials that can wear in",
    text: "Oak, stone, limewash, linen, and metal that is allowed to change. Finishes are chosen to be used, not to stay untouched.",
  },
  {
    number: "04",
    title: "A sequence you can see",
    text: "Before anything is opened up, you can see the order of the work and what each step depends on.",
  },
] as const;

export const services = [
  {
    id: "whole-home",
    title: "Whole-home planning",
    summary:
      "A sequence for houses that need more than one room: what happens first, what can wait, and how the rooms should feel together.",
    includes: [
      "A walk through how the house is used",
      "Which rooms should move together",
      "A shared palette so finishes agree",
    ],
  },
  {
    id: "kitchens",
    title: "Kitchens",
    summary: "The room that has to work on a Tuesday. Storage, light, and a counter that can take real cooking.",
    includes: [
      "Layout for cooking, cleanup, and landing spots",
      "Cabinet and counter direction",
      "Coordination through the remodel",
    ],
  },
  {
    id: "baths",
    title: "Baths",
    summary: "A calmer bath: clearer light, fewer shiny surfaces, and fixtures placed for the people who live there.",
    includes: [
      "Tub, shower, and vanity planning",
      "Stone, tile, and wood selections",
      "A build sequence that protects the rest of the house",
    ],
  },
  {
    id: "living",
    title: "Living and dining",
    summary: "Rooms for gathering that still feel like a home late in the evening.",
    includes: [
      "Seating, tables, and a path through the room",
      "Light for daytime and after dark",
      "Built-ins where storage is the real problem",
    ],
  },
  {
    id: "bedrooms",
    title: "Bedrooms and suites",
    summary: "Quiet rooms. A place to dress, a place to sleep, and closets that match how clothes actually live.",
    includes: [
      "Layout for sleep and storage",
      "Window treatments that can close fully",
      "A connected bath when the suite needs both",
    ],
  },
  {
    id: "coordination",
    title: "Remodel coordination",
    summary: "Design that stays present while the work is underway, so selections and the site do not drift apart.",
    includes: [
      "A written scope before demolition",
      "Answers when the site uncovers a condition",
      "A walkthrough and notes for living with the finishes",
    ],
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Conversation",
    studio: "The studio listens for what should stay, what is failing, and how the house is used on an ordinary day.",
    homeowner: "You bring the rooms that bother you, and photos if you have them.",
  },
  {
    number: "02",
    title: "Measure",
    studio: "The room is recorded as it is, including the low ceiling, the odd window, and the door that swings the wrong way.",
    homeowner: "You point out what you have already tried, and what you want to keep.",
  },
  {
    number: "03",
    title: "Direction",
    studio: "A plan and a small set of materials. The aim is a room that feels inevitable, not a stack of options.",
    homeowner: "You react to the plan in the room it is for, and say what still feels off.",
  },
  {
    number: "04",
    title: "Scope",
    studio: "What is in the work, what waits, and the order of trades — written before demolition.",
    homeowner: "You confirm the scope. This site does not take payment or write a contract.",
  },
  {
    number: "05",
    title: "Remodel",
    studio: "The studio stays with the work while it is built and answers the questions the site actually asks.",
    homeowner: "You keep living around the work, and flag anything that no longer matches the room.",
  },
  {
    number: "06",
    title: "Walkthrough",
    studio: "Finished rooms are walked, leftover items are listed, and the finishes get short care notes.",
    homeowner: "You use the room. The last corrections come from living in it.",
  },
] as const;

export const studies = [
  {
    variant: "living",
    title: "A long living room",
    summary: "Seating that faces the light, a low table, and enough wall for one quiet piece.",
    materials: ["Limewash", "White oak", "Linen"],
  },
  {
    variant: "kitchen",
    title: "A kitchen for the morning",
    summary: "A run of oak, a stone top that can take a cutting board, and a window at the sink.",
    materials: ["White oak", "Stone", "Brass"],
  },
  {
    variant: "bath",
    title: "A quieter primary bath",
    summary: "A tub in the light, a wood vanity, and stone that does not try to look like a hotel.",
    materials: ["Stone", "White oak", "Limewash"],
  },
  {
    variant: "bedroom",
    title: "The room at the end of the hall",
    summary: "A headboard with some weight, nightstands that hold a book, and curtains that close.",
    materials: ["Linen", "Walnut tone", "Limewash"],
  },
  {
    variant: "dining",
    title: "Dining that can take a crowd",
    summary: "A table with room for extra chairs, and a sideboard so the kitchen can clear.",
    materials: ["Plaster", "White oak", "Linen"],
  },
  {
    variant: "seat",
    title: "A window seat between rooms",
    summary: "The in-between place: a cushion, a shelf, and a sill deep enough for a cup.",
    materials: ["Linen", "Painted wood", "Brass"],
  },
] as const;

export type RoomVariant = (typeof studies)[number]["variant"];
