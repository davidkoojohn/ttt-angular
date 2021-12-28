export type TWinner = {
  val: string
  line: number[]
}

type TPos = number | null

export interface IGameHistory {
  squares: string[]
  pos: TPos
}
