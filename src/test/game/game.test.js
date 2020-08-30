import Game from "../../components/game/Game"
import Gameboard from "../../components/game/Gameboard"
import NewPlayer from "../../components/game/Player"

test("testing game loop is created", () => {
    const gameboards = [];
    const players = [];
    const gameboardP = Gameboard(); // player
    const gameboardAI = Gameboard(); // AI
    gameboards.push(gameboardP);
    gameboards.push(gameboardAI);
    const player = NewPlayer();
    const playerAI = NewPlayer();
    players.push(player);
    players.push(playerAI);
    //gameboards[0].createShip([[0,0],[0,1]]); // player
    //gameboards[1].createShip([[0,0],[0,1]]); // AI
    const game = Game()


    expect(game.gameLoop(players,gameboards)).toBe("Winner is AI");
})

test("testing gameboard for player winner", () => {
    
})

test("testing gameboard for AI winner", () => {
    
})



