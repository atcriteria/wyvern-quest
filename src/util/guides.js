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

export { GUIDES }