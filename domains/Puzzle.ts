enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
  Expert = "expert",
  Evil = "evil",
}

export default interface Puzzle {
  /**
   * 编号
   */
  id: number;

  /**
   * 难度
   */
  difficulty?: Difficulty;

  /**
   * 题目
   */
  mission: string;

  /**
   * 标准答案
   */
  solution: string;

  /**
   * 完成率
   */
  win_rate?: number;
}
