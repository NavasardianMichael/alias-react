import Game from "../components/Game/Game";
import Home from "../components/Home/Home";
import Pre from "../components/Pre/Pre";
import Result from "../components/Result/Result";
import { T_AppState } from "../store/app/types";

export const COLORS = {
  primary: '#FFFF',
  secondary: '#6f8cc3'
}

export const PAGES = {
  home: "HOME",
  pre: "PRE",
  game: "GAME",
  result: "RESULT",
} as const

export const PAGE_COMPONENTS: { [key in T_AppState["currentPage"]]: JSX.Element } = {
  [PAGES.home]: <Home />,
  [PAGES.pre]: <Pre />,
  [PAGES.game]: <Game />,
  [PAGES.result]: <Result />,
}