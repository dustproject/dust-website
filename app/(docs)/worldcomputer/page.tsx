'use client';

import Link from "next/link";
import Image from "next/image";
import React from 'react';
import "/styles/features.css";


const ExplorePage = () => {
  return (
    <div className="computer-layout">
        <div className="learn-grid-border"></div>
        <div style={{padding: "2rem 2rem", borderLeft: "1px solid rgba(255, 255, 255, .08)", borderRight: "1px solid rgba(255, 255, 255, .08)"}}>
            <div className="explore-title">Flip Earth: Lessons from Dark Forest, MUD, and Biomes.</div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div className="computer-parent">
            <div className="world-child-left">
                <div className="learn-left-grid-image">
                    <img src="/darkforestt.svg" className="comp-card-image" />
                </div>
            </div>
            <div className="world-child-right">
                <div className='learn-body' style={{fontWeight: "bold"}}>
                    Dark Forest (2020): The Revelation
                </div>

                <div className='learn-body'>
                If you want to understand something, study how it began. <Link href='https://satoshi.nakamotoinstitute.org/emails/cryptography/1/' target='_blank'>Bitcoin</Link> emerged from decades of attempts to build digital money. <Link href='https://www.youtube.com/watch?v=l9dpjN3Mwps' target='_blank'>Ethereum</Link> set out to generalize Bitcoin. It succeeded in engineering, but not yet in culture—people just use it to program more digital money.
                </div>

                <div className='learn-body'>
                The World Computer's roots in digital money shape how people see it—and what it has become. <Link href='https://blog.zkga.me/announcing-darkforest' target='_blank'>Dark Forest</Link> broke away from that path and started a new one.
                </div>

                <div className='learn-body'>
                It used smart contracts to enforce a game’s rules: movement, crafting, attack. This hinted at a digital world no one could shut down or tamper with—akin to physical laws, robust enough to settle and invest in. By contrast, today’s virtual worlds were exposed as theme parks at the whims of their owners.
                </div>

                <div className='learn-body'>
                Dark Forest saw strong player-driven <Link href='https://plugins.zkga.me/' target='_blank'>emergence</Link>—despite only a few hundred players—because they trusted in smart contract enforced rules and unstoppable uptime.
                With <Link href='https://astralcolossus.xyz/' target='_blank'>The Astral Colossus</Link>, 50 strangers pooled their resources within 24 hours into a smart contract-governed spaceship. Markets emerged for trading <Link href='https://github.com/darkforest-eth/plugins/blob/master/content/artifacts/artifactory/plugin.js' target='_blank'>artifacts</Link> and <Link href='https://nightmart.xyz/' target='_blank'>secret coordinates</Link>. Players developed <Link href='https://github.com/projectsophon/darkforest-rs/tree/main/mimc-fast' target='_blank'>custom tools</Link> to explore the secret map faster. One player even spent <Link href='https://instances.vantage.sh/aws/ec2/c6a.24xlarge?min_vcpus=96' target='_blank'>~$3/hour</Link> running such tools on AWS.
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>

        <div className="learn-grid-border"></div>
        <div className="computer-parent">
            <div className="world-child-left">
                <div className="learn-left-grid-image">
                    <img src="/mudeco.svg" className="comp-card-image" />
                </div>
            </div>
            <div className="world-child-right">
                <div className='learn-body' style={{fontWeight: "bold"}}>
                    MUD (2022): The Means
                </div>

                <div className='learn-body'>
                    Dark Forest was a revelation, but also a demonstration. It couldn’t deploy and scale on mainnet. The{' '}
                    <Link href='https://mud.dev/' target='_blank'>
                    MUD
                    </Link>{' '}
                    framework was built to take systems like it into production—faster to develop, cheaper to scale.
                </div>

                <div className='learn-body'>
                Beyond scaling Dark Forest, MUD unlocked co-creation: letting anyone program new mechanics into the core game at runtime, shaping it for everyone.
                By contrast, today's games run on studio-hosted servers, so only studios can add new mechanics, while players build workarounds and isolated mods on separate servers.
                </div>

                <div className='learn-body'>
                    CCP Games, creators of EVE Online,{' '}
                    <Link href='https://lattice.xyz/blog/working-with-ccp' target='_blank'>
                   used MUD
                    </Link>{' '}
                    to build this capability into{' '}
                    <Link href='https://evefrontier.com/en' target='_blank'>
                    EVE Frontier
                    </Link>
                    —letting players program in-game objects with smart contracts, like turning storage units into trading posts.                    
                </div>

                <div className='learn-body'>
                    By this point, the path Dark Forest started had grown into the 
                    {' '}
                    <Link href='https://0xparc.org/blog/autonomous-worlds' target='_blank'>
                    Autonomous Worlds
                    </Link>{' '}
                     movement. Hundreds of developers{' '}
                    <Link href='https://aw.network/' target='_blank'>
                    gathered in assemblies
                    </Link>,{' '}
                    <Link href='https://autonomousworlds.metalabel.com/aw01?variantId=1' target='_blank'>
                    authored books
                    </Link>, 
                    and built early experiments in onchain games—searching for the first digital world.
                </div>
                </div>
        </div>
        <div className="learn-grid-border"></div>



        <div className="learn-grid-border"></div>
        <div className="computer-parent">
            <div className="world-child-left">
                <div className="learn-left-grid-image">
                    <img src="/biomesstats.svg" className="comp-card-image" />
                </div>
            </div>

            <div className="world-child-right">
                <div className='learn-body' style={{fontWeight: "bold"}}>
                    Biomes (2024): The Blueprint
                </div>

                <div className='learn-body'>
                    As MUD matured, developers built production-grade onchain games. But no one built an onchain world. A game has a win condition and resets when finished. A world doesn’t. It builds history, players drive emergence, and resources grow in value over time.
                </div>

                <div className='learn-body'>
                Biomes prototyped the first onchain world, using Minecraft's design as its starting point—the most familiar sandbox, where millions of players have spent 15 years building economies, games, and societies. Unlike studio-hosted worlds like WoW, Runescape, EVE, or Roblox, Minecraft runs on player-hosted servers. Players can't make credible commitments on server longevity or fairness, so the community is plagued with: server shutdowns, progress wipes, admin abuse, player bans, forced updates. No one has more to gain from a solution.
                </div>

                <div className='learn-body'>
                    Biomes solved Minecraft’s core problems by replacing servers with smart contracts. Then it went further: players programmed in-game objects with MUD, and resources became provably scarce on mainnet.
                    Players spent thousands in gas mining resources, despite &lt;100 DAUs, for their scarcity.
                    {' '}<Link href='https://x.com/0xwasdcorp/status/1849907628031324405'>
                    WasdSwap
                    </Link>{' '}
                    programmed chests into shops to earn real revenue for their guild.
                    Biomes made Minecraft real.
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>


        <div className="learn-grid-border"></div>
        <div className="computer-parent">
            <div className="world-child-left">
                <div className="learn-left-grid-image">
                <div className="video-wrapper">
                    <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/SbCCQ3v0wlY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                </div>
            </div>

            <div className="world-child-right">
                <div className='learn-body' style={{fontWeight: "bold"}}>
                    DUST (2025): The World
                </div>

                <div className='learn-body'>
                    DUST turns Biomes’ proof-of-concept into the first serious attempt in building The World. The rules of physics are fixed onchain, the supply of matter is provably scarce, the history is permanently kept, and together we program a new civilization inside.
                </div>

                <div className='learn-body'>
                    Bitcoin, the first digital money, evolved over 15 years from e-cash for idealists to payments for unregulated activity to digital gold for government reserves. How far will the first digital world go? Could it flip Earth?
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>


        <div className="learn-grid-border"></div>
        <div style={{padding: "2rem 2rem", borderLeft: "1px solid rgba(255, 255, 255, .08)", borderRight: "1px solid rgba(255, 255, 255, .08)"}}>
            <div className="explore-title">
                The World Completes The World Computer.
            </div>
        </div>
        <div className="learn-grid-border"></div>


        <div className="learn-grid-border"></div>
        <div className="computer-parent">
            <div className="computer-child-left">
                <div className='learn-body' style={{fontWeight: "bold"}}>
                    Ethereum: The World Computer
                </div>
                <div className='learn-body'>
                Ethereum is a permanent ledger managing scarce tokens with fixed rules of transfer. We program finance on top.
                </div>
                <div className='learn-body'>
                But DeFi has no native productivity to manage. Protocols serve protocols: yield farming, recursive lending, leverage loops. Users borrow tokens to buy tokens in a closed game of risk: aping into pools, rebalancing LPs.
                </div>
                <div className='learn-body'>
                We tried to make DeFi productive with NFTs—digital native assets people may value: PFPs, 1/1s, memes. They trade onchain but function offchain, so their value floats.
                </div>
                <div className='learn-body'>
                    Without a world of our own to anchor value, we returned to the one we meant to replace: stablecoins, oracles, RWAs, ETFs.
                </div>
            </div>
            <div className="computer-child-right">
                <div className="learn-right-grid-image">
                    <img src="/worldcomputer.svg" className="comp-card-image" />
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>


        <div className="learn-grid-border"></div>
        <div className="computer-parent">
            <div className="computer-child-left">
            <div className='learn-body' style={{fontWeight: "bold"}}>
                    DUST: The World
                </div>
                <div className='learn-body'>
                    DUST is a permanent spacetime controlling scarce matter with fixed rules of physics. We program civilization inside.
                </div>
                <div className='learn-body'>
                    The cost to extract and keep matter sets its floor price. Every action—mining, farming, moving, defending—is an onchain transaction that burns gas.
                </div>
                <div className='learn-body'>
                    Matter trades through local shops, not global exchanges. Its value comes from onchain utility—PvE, PvP, building, programming—and the stories it carries, like
                    {" "}<Link href='https://x.com/ZuseDust/status/1848776951764513034' target='_blank'>“sakura sakura”</Link>. As players arrive, supply grows contested.
                </div>
                <div className='learn-body'>
                Earth’s economy emerges from physical constraints: oil, land, energy. The World gives the World Computer scarcities and consequences of its own. When value is created onchain—not just exchanged into it—a new civilization begins:
                </div>
                <div className='learn-body'>
                    Ore-Backed Stablecoins, DeFi Chests, MEV Trains, Token-Gated Doors, Forcefield Staking, Raid Slashing, Mob Coverage, Multisig Inventories, DAO Cities, Wheat Laundering, Inventory Mixers
                </div>
            </div>
            <div className="computer-child-right">
                <div className="learn-right-grid-image">
                    <img src="/theworld.svg" className="comp-card-image" />
                </div>
            </div>
        </div>
        <div className="learn-grid-border"></div>


    </div>
  );
};

export default ExplorePage;