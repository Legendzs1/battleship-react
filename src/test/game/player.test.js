import NewPlayer from "../../components/game/Player"
import Gameboard from "../../components/game/Gameboard"

test("testing player attacking coordinates for a HIT", () => {
    const gameboard = Gameboard();
    gameboard.createShip([[0,0],[0,1]])
    const player = NewPlayer();
    player.receiveCoordsToAttack([0,0],gameboard)

    expect(gameboard.returnGameboard()[0][0]).toBe("HIT");
})

test("testing player attacking coordinates for a MISS", () => {
    const gameboard = Gameboard();
    gameboard.createShip([[0,0],[0,1]])
    const player = NewPlayer();
    player.receiveCoordsToAttack([0,4],gameboard)

    expect(gameboard.returnGameboard()[0][0]).toBe(null);
})

test("testing player attacking AI coordinates for a HIT and AI attcking Player for a MISS", () => {
    const gameboards = [];
    const gameboardP = Gameboard(); // player
    const gameboardAI = Gameboard(); // AI
    gameboards.push(gameboardP);
    gameboards.push(gameboardAI);
    gameboards[0].createShip([[0,0],[0,1]]); // player
    gameboards[1].createShip([[0,0],[0,1]]); // AI
    const player = NewPlayer();
    player.receiveCoordsToAttack([0,0],gameboards[1]);
    player.receiveCoordsToAttack([0,5],gameboards[0]);

    expect(gameboards[1].returnGameboard()[0][0]).toBe("HIT");
    expect(gameboards[0].returnGameboard()[0][0]).toBe(null);
})