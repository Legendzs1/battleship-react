import Gameboard from "../../components/game/Gameboard"


test("Testing gameboard's 10x10 gameboard", () => {
    const gameboard = Gameboard();
    expect(gameboard.returnGameboard().length).toBe(10)
})


test("Testing if Gameboard created a ship", () => {
    const gameboard = Gameboard();
    gameboard.createShip([5,5]);
    expect(gameboard.returnListOfShips().length).toBe(1);
})


test("Testing if Gameboard created can create multiple ships", () => {
    const gameboard = Gameboard();
    gameboard.createShip([[0,0],[0,1]]);
    gameboard.createShip([[3,0],[3,1]]);
    expect(gameboard.returnListOfShips().length).toBe(2);
})

test("Testing if Gameboard placed ship at the correct position on gameboard", () => {
    const gameboard = Gameboard();
    gameboard.createShip([[0,0],[0,1]])
    expect(gameboard.returnListOfShips()[0].getCoord()).toStrictEqual([[[0,0],[0,1]]]);
})



test("Testing to user inputted coordinates is a hit on a ship", () => {
    const gameboard = Gameboard()
    gameboard.createShip([[0,0],[0,1]])
    gameboard.receiveAttack([0,0])
    expect(gameboard.returnGameboard()[0][0]).toBe("HIT")
})

test("Testing to user inputted coordinates is not a hit on a ship", () => {
    const gameboard = Gameboard()
    gameboard.createShip([[0,0],[0,1]])
    expect(gameboard.receiveAttack([5,0])).toBeFalsy()
})

test("Testing to user inputted coordinates is not a hit recorded in gameboard", () => {
    const gameboard = Gameboard()
    gameboard.createShip([[0,0],[0,1]])
    gameboard.receiveAttack([0,5])
    expect(gameboard.returnGameboard()[0][0]).toBe(null)
})

test("Testing to user inputted coordinates is a hit recorded in gameboard", () => {
    const gameboard = Gameboard()
    gameboard.createShip([[0,0],[0,1]])
    gameboard.receiveAttack([0,0])
    expect(gameboard.returnGameboard()[0][0]).toBe("HIT")
})


test("Testing if all ships have been sunk", () => {
    const gameboard = Gameboard()
    gameboard.createShip([[0,0],[0,1]])
    gameboard.createShip([[5,3],[5,4],[5,5]])
    gameboard.createShip([[9,1],[9,2],[9,3],[9,4],[9,5]])
    gameboard.receiveAttack([0,0])
    gameboard.receiveAttack([0,1])
    gameboard.receiveAttack([5,3])
    gameboard.receiveAttack([5,4])
    gameboard.receiveAttack([5,5])
    gameboard.receiveAttack([9,1])
    gameboard.receiveAttack([9,2])
    gameboard.receiveAttack([9,3])
    gameboard.receiveAttack([9,4])
    gameboard.receiveAttack([9,5])
    expect(gameboard.isAllShipsSunk()).toBeTruthy()
})

test("Testing if 2 ships have been sunk 1 ship not sunk", () => {
    const gameboard = Gameboard()
    gameboard.createShip([[0,0],[0,1]])
    gameboard.createShip([[5,3],[5,4],[5,5]])
    gameboard.createShip([[9,1],[9,2],[9,3],[9,4],[9,5]])
    gameboard.receiveAttack([0,0])
    gameboard.receiveAttack([0,1])
    gameboard.receiveAttack([5,3])
    gameboard.receiveAttack([5,4])
    gameboard.receiveAttack([9,1])
    gameboard.receiveAttack([9,2])
    gameboard.receiveAttack([9,3])
    gameboard.receiveAttack([9,4])
    gameboard.receiveAttack([9,5])
    expect(gameboard.isAllShipsSunk()).toBeFalsy()
})