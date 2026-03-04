---
layout: project
current: project
cover: 'assets/gifs/sps/move_block.gif'
navigation: True
title: Shadow Puppy Shenanigans
date: 2025-09-26
tags: game, puzzle, highlight
class: project-template
subclass: 'project'
author: probob
excerpt: A sokoban-style game with light and shadow based mechanics.
---

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/gifs/sps/move_block.gif">
    <!-- <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> -->
</figure>

<br/>

## Summary

*Shadow Puppy Shenangans* is a sokoban-style (block-pushing) puzzle game that plays with light and shadow mechanics. 

**My roles**: *Game Designer, Puzzle Designer, Programmer, Project Manager*.

**Build**: [https://prabby-patty.itch.io/shadow-puppy-shenanigans](https://prabby-patty.itch.io/shadow-puppy-shenanigans){:target="_blank"}

**Trailer**: [https://www.youtube.com/watch?v=ttKE8eWa6rA](https://www.youtube.com/watch?v=ttKE8eWa6rA){:target="_blank"} 

<iframe width="500" height="290" src="https://www.youtube.com/embed/ttKE8eWa6rA?si=8qPPEE5Kxl8nY-Fn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

## Introduction

This project was a part of the Advanced Topics in Game Design course at Aalto University that revolved around puzzle design. We decided to tackle it as a team of 6, hoping to peer learn and build a project on a more substantial scale. We did a couple of brainstorming rounds and picked the most promising ideas, which were further filtered for feasibility. **We ended up with a Sokoban centric idea, with a light and shadow theme attached to it.**

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/flames.gif">
    <figcaption>Fig.1 - Lights and Shadows became a core concept, for example, threats such as flames become inert in shadow.</figcaption>
</figure>

<br/>

## Mechanics

Working on the foundation of Sokoban gave us a solid start for the project, less time spent on unravelling goals and player actions, more time spent designing interesting puzzle scenarios and elements. The initial idea was based around the hook that the player dies when in shadow, so it became a puzzle challenge to create scenarios and goals where the player would have to clear out a path without shadows to reach the goal, but we realized early on that this design was pretty restricted and didn’t allow for much meaningful decision-making opportunities.

<br/>

Upon iteration, we came upon the idea that shadows don’t kill the character, rather trigger a “state-change” and this opened a plethora of opportunities, we instantly came up with ideas where certain blocks can only be pushed in the shadow state, blocks that cannot be pushed from the shadow state, so on and so forth. 


<br/>


<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/light_block_puzzle.gif">
    <figcaption>Fig.2 - The Light Block can only be moved when pushing from light.</figcaption>
</figure>

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/shadow_block_puzzle.gif">
    <figcaption>Fig.3 - The Shadow Block can only be moved from the shadow. This change from the original idea (shadows kill player) allowed more synergetic and emergent puzzle moments.</figcaption>
</figure>

<br/>

The design reached the critical point of elegance from where, it became quite easy to scale upwards, with each added mechanic adding an exponential range to dynamics and ideas to build levels around. One such mechanic was the Light Direction block which allowed players to change the light direction. This mechanic recontextualized a lot of existing mechanics and opened up many more creative possibilities.

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/gld.gif">
    <figcaption>Fig.4 - The Light Direction block added additional depth to the existing mechanics by allowing players to change the orientation of the light in the level. </figcaption>
</figure>

<br/>

## Level Design 

With the core mechanics established, we started building levels. **My approach to each level I designed was to have a core move, idea or trick that I want the players to learn. I would set up this idea and work backwards from there, constructing the entire level around this singular concept.** This was picked up directly from Arvi Teikari's design process, who gave a guest lecture during the course. I studied Baba is You closely (and also played a lot of it) during the production of the game haha.

Upon completing the design of each level, I would take a moment to reflect on the level. The goal would be to see if there were possibilities to slightly alter the arrangement or swap around a couple of mechanics to make players approach a similar challenge from a completely new angle, making a “B-side” of that level. We used Figma to storyboard the level so that we would not be dependent on the programming team to finish the feature for levels to be set up and designed. You can check out the entire [Figma Storyboard here](https://www.figma.com/design/2zZnbD8LbNKT6I0BYUgNoF/Shadow-Sokoban-Storyboard--Copy-?node-id=0-1&t=Hht9S0soB13xo7Aj-1).

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/figma_storyboard.png">
    <figcaption>Fig.5 - The levels were usually storyboarded and tested on figma before building in-engine. This allowed for better team communication and faster iterations.</figcaption>
</figure>

<br/>

The game ended up with pretty interesting visuals, the mixed dimensions approach of 2D + 3D wasn’t a complete usability success but it was something people seemed to enjoy and held a bit of novelty in it. It was quirky and playful, easing a bit of tension that might arise during the tougher puzzles.

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/figma_level_storyboard.png">
    <!-- <figcaption>Fig.5 - The levels were usually storyboarded and tested on figma before building in-engine. This allowed for better team communication and faster iterations.</figcaption> -->
</figure>
<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/level_gif.gif">
    <!-- <figcaption>Fig.5 - The levels were usually storyboarded and tested on figma before building in-engine. This allowed for better team communication and faster iterations.</figcaption> -->
</figure>
<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/gld_block_puzzle.gif">
    <figcaption>Fig.6 - The growth of a level through various design stages.</figcaption>
</figure>

<br/>




## Design Documentation

I took great care for documenting the essentials project, especially the core mechanics, their behaviors and interactions. This allowed each team member to be equally informed while minimizing communication dependencies. You can check the [documentation here](https://docs.google.com/document/d/1qysIoH8YGn5PrzG-pVr9DeqDu4A7JPQc-P9JxKn-t3Y/edit?usp=sharing). 

<br/>


<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/figma_documentation.png">
    <figcaption>Fig.7 - Documentation of the core game mechanics.</figcaption>
</figure>

<br/>


## Closing Statement

The game was submitted at the Bit-1 Student Game Design competition in Finland and reached the finals! It was very fun to work on this game and see people play and enjoy it. I am really grateful to everyone who played the game and gave us feedback, I learned so much in the process. It would have been nice to push the game further but life went on for all the team members, myself included. Thanks for reading so far and feel free to give the game a shot! 

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sps/Profile.png">
    <!-- <figcaption>Fig.8 - Documentation of the core game mechanics.</figcaption> -->
</figure>

<br/>