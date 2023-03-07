import { Physics, Debug } from "@react-three/rapier";
import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import Player from "./Player.jsx";
import useGame from './stores/useGame.js'
import { useEffect } from "react";

export default function Experience({chageLoadStatus}) {
  const blocksCount = useGame((state) => state.blocksCount)
  const blocksSeed = useGame((state) => state.blocksSeed)

  useEffect(() => {
    chageLoadStatus(true)
  }, [])

  return (
    <>
    <color args={['black']} attach="background" />
      <Physics>
        {/* <Debug /> */} 
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
    </>
  );
}
