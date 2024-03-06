// Simple framework for creating local guides
// For now, Guides page will link to wiki articles

const GUIDES = {
    "demon-hordes": {
        "title": "Demon Hordes",
        "location": "Iss'Rano",
        "level": 10,
        "qp": 20,
        "about": "A darkness has begun taking over the village of Iss'rano, and demons from within are attacking. Journey to the southern continent to try to stop the demon hordes. Begin the quest by talking to the blacksmith.",
        "rewards": ["Paladin's Guild quest", "40 Starter Crowns"],
        "threats": ["Skulls", "Coiling Grass traps", "Fire Elementals"],
        "tips": ["The resists that you will need here are fire, paralysis, slow, and confusion. Shock also helps but is not a must.", "The most dangerous enemies are the skulls, vampire mini-boss, and the final serpant boss.", "Flying or Sneaking will help you avoid the Coiling Grass traps."],
        "steps": ["Enter the tall house overrun with demons in the town and retrieve the bone key that is underneath a bed.", "From the town, head east and enter the ruined mansion. Take the stairs down into the basement, and again into the cave beneath the house.", "Traverse the demon-infested cavern and defeat the vampiric mini-boss, Diabolos.", "Head through a door in the northernmost section of Diabolos' lair and you will find a grug. Issue the 'talk ring' command to retrieve the ring from the grug who is a transformed townswoman. Be careful to not accidentally kill her! (Note: You can also find her hiding among other demons in the surrounding areas)", "Exit the manor the way you came, and travel further east into the forest until you find a burning portal. Enter the portal.", "The portal will place you in a map with three RD's. One of these will take you to the boss. Choose any of the three and traverse approximately 6-10 floors. If you reach floor 10 before the boss' lair, you should backtrack and try another until you arrive at the other end.", "Once in the lair, head east untiol you find another portal with the 'Strange Markings'. You will need the ring from the grug in order to take this portal. When you are ready, apply the portal", "Inside the portal you will find the boss, a demon serpant that casts blindness, lightning bolt, and dragon breath. Once dead, loot it's body for the 'Blackened Twisted Heart', then take the portal in the southeastern quadrant to return to town.", "Once in town, head to the church and give the heart to the priest to solve the quest"]
    }
};

const QUEST_LINKS = {
    "Clockwork Wyvern": "https://wiki.wyvernsource.com/index.php/Clockwork_Wyvern",
    "Cult of Aquator": "https://wiki.wyvernsource.com/index.php/Cult_of_Aquator",
    "Curse of Elendal": "https://wiki.wyvernsource.com/index.php/Curse_of_elendal",
    "Fairy Queen's Amethyst": "https://wiki.wyvernsource.com/index.php/Fairy_Queen%27s_Amethyst",
    "History of Noir": "https://wiki.wyvernsource.com/index.php/History_of_Noir",
    "Jinoir's Sapphire Ring": "https://wiki.wyvernsource.com/index.php/Jinoir%27s_Sapphire_Ring",
    "Kiz's Sidescroller": "https://wiki.wyvernsource.com/index.php/Kiz%27s_Side_Scroller",
    "Laboratory Debacle": "https://wiki.wyvernsource.com/index.php/Laboratory_Debacle",
    "Macabre Olympiad": "https://wiki.wyvernsource.com/index.php/Macabre_Olympiad",
    "Nagalinh's Dolls": "https://wiki.wyvernsource.com/index.php/NagaLinh%27s_Dolls",
    "Odin's Missing Eye": "https://wiki.wyvernsource.com/index.php/NagaLinh%27s_Dolls",
    "Orb of Maiye": "https://wiki.wyvernsource.com/index.php/Orb_of_Maiye",
    "Secrets of the Sidewinder Caverns": "https://wiki.wyvernsource.com/index.php/Secrets_of_the_Sidewinder_Caverns",
    "Spell of the Swamp Witch": "https://wiki.wyvernsource.com/index.php/Spell_of_the_Swamp_Witch",
    "Purloined Pooch": "https://wiki.wyvernsource.com/index.php/The_Case_of_the_Purloined_Pooch",
    "The Dark Mistress": "https://wiki.wyvernsource.com/index.php/The_Dark_Mistress",
    "The Goose That Lays Golden Eggs": "https://wiki.wyvernsource.com/index.php/The_Goose_That_Lays_Golden_Eggs",
    "Tower of Conundrum": "https://wiki.wyvernsource.com/index.php/Tower_of_Conundrum",
    "Sokoban": "https://wiki.wyvernsource.com/index.php/Tower_of_Sokoban",
    "Treasures of the Pyramids": "https://wiki.wyvernsource.com/index.php/Treasures_of_the_Pyramid",
    "Wastelands of Bura Shan": "https://wiki.wyvernsource.com/index.php/Wastelands_of_Bura_Shaan",
    "Westerly Forest": "https://wiki.wyvernsource.com/index.php/Westerly_Forest"
}

const GUILD_QUEST_LINKS = {
    "Demon Hordes": "https://wiki.wyvernsource.com/index.php/Demon_Hordes",
    "Pirate Island": "https://wiki.wyvernsource.com/index.php/Pirate_Island",
    "Jewel of Besar": "https://wiki.wyvernsource.com/index.php/Jewel_of_Besar",
    "Tornaum Castle": "https://wiki.wyvernsource.com/index.php/Tornaum_Castle",
    "Ruins of Samhoc": "https://wiki.wyvernsource.com/index.php/Ruins_of_Samhoc",
    "Mist Temple": "https://wiki.wyvernsource.com/index.php/Mist_Temple",
    "Curse of Henteko": "https://wiki.wyvernsource.com/index.php/Curse_of_Henteko"
}

const DUNGEON_LINKS = {
    "Ramsay's Tomb": "https://wiki.wyvernsource.com/index.php/King_Ramsay%27s_Tomb",
    "Crypt of Ernzof": "https://wiki.wyvernsource.com/index.php/Crypt_of_Ernzof",
    "Fae Wyston Catacombs": "https://wiki.wyvernsource.com/index.php/Fae_Wyston_Catacombs",
    "The Moon": "https://wiki.wyvernsource.com/index.php/The_Moon",
    "Hades": "https://wiki.wyvernsource.com/index.php/Hades",
    "Skull Cave": "https://wiki.wyvernsource.com/index.php/Noir_Skull_Cave",
    "Beneath Samhoc": "https://wiki.wyvernsource.com/index.php/Beneath_Samhoc",
    "Goblin Fort": "https://wiki.wyvernsource.com/index.php/Goblin_Fort"
}


export { GUIDES, GUILD_QUEST_LINKS, DUNGEON_LINKS, QUEST_LINKS }