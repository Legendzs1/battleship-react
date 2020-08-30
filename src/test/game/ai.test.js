import NewPlayer from "../../components/game/Player"
import Gameboard from "../../components/game/Gameboard"

test("testing player attacking coordinates for a HIT", () => {
    const gameboard = Gameboard();
    gameboard.createShip([[0,0],[0,1]])
    const playerAI = NewPlayer();
    playerAI.receiveCoordsToAttack([0,0],gameboard)

    expect(gameboard.returnGameboard()[0][0]).toBe("HIT");
})
