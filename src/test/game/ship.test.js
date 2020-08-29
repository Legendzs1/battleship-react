import createShip from "../../components/game/Ship"
const _ = require('lodash')

const mockCreateShip = jest.fn()
/* jest.mock("../../components/game/Ship", () => {
    return jest.fn().mockImplementation(() => {
        return {}
    })
}) */

test("testing if ship is created", () => {
    const ship = createShip(4,[[5,5],[5,6],[5,7]]);
    expect(ship).toBeTruthy();
})

test("testing the multidemnsional coordinates of the ship be at least one pair to 5 pairs", () => {
    const ship = createShip(4,[[5,5],[5,6],[5,7]]);
    expect(ship.getCoord()[0].length).toBeGreaterThanOrEqual(1)
    expect(ship.getCoord()[0].length).toBeLessThanOrEqual(5)
})

test("testing if ship has been hit", () => {
    const ship = createShip(4,[[5,5],[5,6],[5,7]]);
    expect(ship.isHit()).toBeFalsy();
})

test("testing if ship has been sunk", () => {
    const ship = createShip(4,[[5,5],[5,6],[5,7]]);
    expect(ship.isSunk()).toBeFalsy();
})

test("Testing coords if its a hit on a ship", () => {
    const newShip = createShip(4,[[5,5],[5,6],[5,7]]);
    expect(newShip.isHit([5,7])).toBeTruthy()
})