import Game from "../components/Game/Game";
import Home from "../components/Home/Home";
import Pre from "../components/Pre/Pre";
import { T_ViewState } from "../store/view/types";

export const COLORS = {
  primary: '#FFFF',
  secondary: '#6f8cc3'
}

export const PAGES = {
  home: "HOME",
  pre: "PRE",
  game: "GAME",
} as const

export const PAGE_COMPONENTS: { [key in T_ViewState["currentPage"]]: JSX.Element } = {
  [PAGES.home]: <Home />,
  [PAGES.pre]: <Pre />,
  [PAGES.game]: <Game />,
}