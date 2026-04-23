---
layout: project
current: project
cover: 'assets/gifs/ccc/jellyjump.gif'
navigation: True
title: Chromatic Cherry Chase
date: 2025-09-26
tags: action-platformer, research
class: project-template
subclass: 'project'
author: probob
excerpt: A Celeste inspired platformer with a shapeshifting twist.
---

<br/>

<img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/gifs/ccc/jellyjump.gif">

<br/>

## Summary

*Chromatic Cherry Chase* is Celeste-inspired platformer game developed as a part of my master's thesis, investigating the relationship between cognitive demand in games and players' perception of music.

**My roles**: Solo-dev, key skill highlights -- *Game Design, Level Design, Programming, Player Onboarding and Music Composition*.

<!-- **Trailer**: [https://www.youtube.com/watch?v=ttKE8eWa6rA](https://www.youtube.com/watch?v=ttKE8eWa6rA) -->
 
**Build**: [https://prabby-patty.itch.io/music-perception-experiment](https://prabby-patty.itch.io/music-perception-experiment){:target="_blank"} 

<br/>

## Introduction

Chromatic Cherry Chase is a platformer game that I developed as part of my Master's thesis at Aalto University. Thoughout my education and research, game-making has been central and with my thesis I aimed at exploring how music perception in games differ based on the cognitive demand experienced in a game. In this writeup I will mostly focus on the game itself, but for more details on the entire process, feel free to [check out my thesis](https://aaltodoc.aalto.fi/items/16b72d18-8358-4a4c-8e98-fbc06c31deea)!

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/gameplay.gif">
    <figcaption>Fig.1 - One of the platforming rooms in the game. There's a lot happening (and for a good reason haha), this version of the game was meant to be cognitively demanding in order to study the desired player experience.</figcaption>
</figure>

<br/>

## Mechanics

The game was designed for reesarch purposes but for me, the game being tighly designed and engaging to play was more important that it being just a research sandbox. If you are studying playing experience on a janky game, your data will not be true to what you want to understand. To keep things simple, scoped but appraochable and engaging, I worked on top of established platformer fundamentals taking inspiration from games like Celeste and Gris. Movement, wall-jumping, double-jumping and dashing were the bread and butter of design. 

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/Frame 6.png">
    <figcaption>Fig.2 - The jump and double jump mechanic. I used a simple dot indicator attached the the player to indicate when double was available vs exhausted. </figcaption>
</figure>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/Frame 7.png">
    <figcaption>Fig.3 - The dash mechanic that used a sprite and color change to indicate dash availability.</figcaption>
</figure>

<br/>

I further designed a state switch mechanic where the player could switch between a capsule-form and a block form by holding the right mouse button or right controller trigger.

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/Frame 5.png">
    <figcaption>Fig.5 - Switching between the capsule and block form.</figcaption>
</figure>

<br/>


Each state would afford a different interaction with the various world elements. For example, there were certain platform that would act as solid only for a specific character form. There were also air gyseys that would lift the player up if they were in capsuke form, but have no effect on the player if they were in the block form. These ideas could be combined to allow for a broad range of skill expression and platforming challenges.


<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/Frame 2.png">
    <figcaption>Fig.6 - The blue platforms were only interactable in the capsule form.</figcaption>
</figure>

<br/>
<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/Frame 3.png">
    <figcaption>Fig.7 - Meanwhile the yellow platforms were only interactable by the block form.</figcaption>
</figure>
<br/>
<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/Frame 4.png">
    <figcaption>Fig.8 - Some of these platforms would be timed and would toogle between states at fixed intervals.</figcaption>
</figure>

<br/>

## Onboarding

The game was designed to be tested by over 200 players on an online playtesting platform. Players would get paid for testing the game and they were also meant to play the core levels with complete knowledge of the game's mechanics. As such, I had to be very deliberate with the onbording design of the game such that it onboarded players to the game as smoothly, clearly and quickly as possible.


<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/image 1.png">
    <figcaption>Fig.9 - I used silhouettes to clearly show how mechanics and UI functioned. There the players learned and experimented with the the double jump mechanic. The hollow silhoutte encouraged players to overlap with it and try the mechanic out.</figcaption>
</figure>

<br/>

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/image 3.png">
    <figcaption>Fig.10 - Using silhouettes and collectibles to guide the players.</figcaption>
</figure>

<br/>

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/image 4.png">
    <figcaption>Fig.11 - Teaching the air-geyser mechanic and how it interacts with the 2 player states.</figcaption>
</figure>

<br/>

<!-- Space as a narrative medium -->

If this was not for research, I would have left the onboarding completely text free and let the players play and learn the mechanics. But owing to research contraints, I chose to also explicitly tell the players how various mechanics operated. Covering both bases minimized any confusion in participants who have little to no experience playing platformer games.      

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/image 2.png">
    <figcaption>Fig.12 - Combining silhouettes with explicit instructions.</figcaption>
</figure>

<br/>


The tutorial region was designed in a way that the players could only progress if they were able to execute a mechanic sucessfully. At the same time it was designed to be forgiving and death-free to avoid any frustration or negative emotional experiences.


<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/ccc/onboarding.gif">
    <figcaption>Fig.13 - Players could only progress in the tutorial if they had learned the mechanics.</figcaption>
</figure>

<br/>


## Closing Statement

This game was the final game I worked on as part of my master's degree. It was challenging but fun, and I am quite happy with how it turned out. Over 200 online players tested the game and it was received positivey. People would often compare the game to Celeste or Super Meat Boy, and sometimes mention that this was the most fun "experiment" they had participated in! 

