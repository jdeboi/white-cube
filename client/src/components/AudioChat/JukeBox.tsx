import { useEffect } from "react";
import { Vector2 } from "../../interfaces/index";
import { useJukeBox } from "./JukeBoxProvider";

type Props = {
  position: Vector2;
  backgroundZIndex: number;
};

const BASE_SCALE = 2;

export const JukeBox = ({ position, backgroundZIndex }: Props) => {
  const { playJukeBox, stopJukeBox } = useJukeBox();
 
  useEffect(() => {
    playJukeBox();

    return () => {
      stopJukeBox();
    }
  }, []);

  return (
    //@ts-ignore
   
    <div>test</div>
      
  );
};
