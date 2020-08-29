import Gameboard from "../../components/game/Gameboard"

test("Testing if Gameboard is here", () => {
    const gameboard = Gameboard()
    expect(gameboard).toBeTruthy();
})