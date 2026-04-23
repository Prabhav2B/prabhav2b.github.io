---
layout: project
current: project
cover: 'assets/gifs/spirit/sp_metro.gif'
navigation: True
title: Spirit Metro
date: 2025-09-26
tags: narrative, exploration
class: project-template
subclass: 'project'
author: probob
excerpt: Explore a supernatural metro and meet quirky characters.
---

<br/>

<img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/gifs/spirit/sp_metro.gif">

<br/>

## Summary

*Spirit Metro* is narrative exploration game set in a fantasy metro system. Your goal is to find your aunt and head to your very own spiritual station. The only problem is, there is no map to help you. So make notes to help you navigate, talk to the other spirit passengers, and do smaller tasks along the way. 

**My roles**: *Game Design and Programming*.

**Build**: [https://prabby-patty.itch.io/spirit-metro](https://prabby-patty.itch.io/spirit-metro){:target="_blank"}

**Trailer**: [https://www.youtube.com/watch?v=VqpJ3DHl15o](https://www.youtube.com/watch?v=VqpJ3DHl15o){:target="_blank"}

<iframe width="500" height="290" src="https://www.youtube.com/embed/VqpJ3DHl15o?si=SYq4yfhDzRETS_kD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<br/>

## Introduction

Spirit Metro was developed during the Aalto Game Jam course where students have an internal week-long game jam (that simple). We were given the theme connection and formed a team of 6 members, following which we brainstormed ideas and settled on the concept of playing as a character lost in an alien metro system. The players have to reach their destination thorough taking various train lines and seeing where it takes them. Along the way, players would explore various metro stations, meet quirky characters and help them in their respective journeys.

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/metro_ref_c.png">
    <!-- <figcaption>Fig.1 - Like any good Portal-like, the project started with nailing boxes, buttons and doors.</figcaption> -->
</figure>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/metro_ref_a.png">
    <figcaption>Fig.1 - The game was inspired by the aesthetics and quirks of metro stations in Nordic countries.</figcaption>
</figure>

<br/>

## Mechanics

The core mechanical idea of the game was established quite early. There would be trains running on rough schedules through different stations that the players would be able to take. As they do, they can use their map to add station nodes and connect them with various colored lines corresponding the train lines. The goal would be to reach a specific station but to do so, players would both need to find which line goes there and find a ticket for that line through completing quests.

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/metro_ref_b.jpg">
    <figcaption>Fig.2 - I did a little method acting during the project, taking the metro in a more observant manner and absorbing what characterizes the mundane but calming journey.</figcaption>
</figure>

<br/>

After collaborative inital exploration, my wonderful team members took the lead on continuning to develop the design and narrative for the game while I focused on programming the core features of the game. 

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/Map_1.png">
    <figcaption>Fig.3 - An initial concept of the mapping mechanic developed by Rolands and Laura.</figcaption>
</figure>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/Map-without-top_3.png">
    <figcaption>Fig.4 - A polished version of the mapping mechanic allowing you to pick colors and see what tickets you have collected so far.  </figcaption>
</figure>

<br/>


## Programming and Development

My process started with developing the character controller. Given the Jam setting, I didn't want to spend too much time on it but I did still want to make sure that it felt good to control. Feeling good to me means feeling appropriate, I tuned the character controller to ensure it doesn't feel like the character is zipping around the world, rather it fits the calm and grounded experience that we are building.

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/movement.gif">
    <!-- <figcaption>Fig.5 - The levels were usually storyboarded and tested on figma before building in-engine. This allowed for better team communication and faster iterations.</figcaption> -->
</figure>

<br/>
<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/pausechamp.gif">
    <figcaption>Fig.5 - The initial movement development, I setting on the framing of levels quite early on and made sure the character felt smooth and appropriate to control.</figcaption>
</figure>

<br/>

Additionally, nailing the feel of the metro was quite important for me too! One of the first things I prototyped in the metro was the subtle rumble that characterizes the trains movement. Its easy to miss and many players might not even notice it, but too it was **essential**. Its not a metro without it's shakes and rumbles, it is subtly calming in it's own way. 


<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/train.gif">
    <figcaption>Fig.6 - Exploring verticality in level design.</figcaption>
</figure>

<br/>

I further developed the entire metro system which involved each metro attempting to enter a station at their its own interval, otherwise entering a waiting queue. Waiting was thus baked into the mechanics and design of game. Players would often spend time waiting for the right line going in the right direction to arrive. This created spaces where players can explore, talk to character, or just wait. Though this might be every player's cup of team, it was an intentional design choice by us becausae afterall what is a metro journey experience without some waiting.

<br/>


<!-- Add gif of trains and their schedules -->

## Tools and Support Programming

In addition to programming the core mechanics, I worked with our artists and sound designers to build quick tools that they could use in order to implement their assets. It was important to be available to everyone who needed help with implementations or bug fixes so no one felt blocked.

<br/>
<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/jumpbug.gif">
    <figcaption>Fig.7 - Working with our artists Nils and Jenni to setup the character animations and metro sprites.</figcaption>
</figure>

<br/>


I made an effort to keep the systems designer and no-code friendly. For example, for the metro system was designed abstractly to create a schedule based on whatever the designers specified. The designers could define line colors, their respective operating stations and operation intervals from the editor without having to work with code.

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/tool.png">
    <figcaption>Fig.8 - The metro line setup tool.</figcaption>
</figure>

<br/>



## Closing Statement

Spirit metro is definitely the biggest jam project that I have worked on. It was so fun to work with my team and pulling off an experience true to our combined vision!

<br/>

<figure>
    <img style="text-align: left ; width: calc(100% - 20px) ; height:auto; box-shadow: -5px 5px 15px #888888;;" src="/assets/media/sm/eternal_train.png">
    <figcaption>Fig.9 - What is a Jam game without some fun commit messages?</figcaption>
</figure>

<br/>

