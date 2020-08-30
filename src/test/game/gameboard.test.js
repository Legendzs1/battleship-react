import Gameboard from "../../components/game/Gameboard"

test("Testing if Gameboard is here", () => {
    const gameboard = Gameboard();
    expect(gameboard).toBeTruthy();
})
test("Testing if Gameboard created a ship", () => {
    const gameboard = Gameboard();
    gameboard.createShip();
    expect(gameboard).toBeTruthy();
})
test("Testing if Gameboard placed at the correct position on gameboard", () => {
    const gameboard = Gameboard();
    gameboard.createShip()
    expect(gameboard.returnListOfShips()[0].getCoord()).toStrictEqual([[[0,0],[0,1]]]);
})

test("Testing to user inputted coordinates is a hit on a ship", () => {
    const gameboard = Gameboard()
    gameboard.createShip()
    expect(gameboard.receiveAttack([0,0])).toBeTruthy()
})

test("Testing to user inputted coordinates is not a hit on a ship", () => {
    const gameboard = Gameboard()
    gameboard.createShip()
    expect(gameboard.receiveAttack([5,0])).toBeFalsy()
})


