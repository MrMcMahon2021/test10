// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001050a050505050a050505050a050502060909090909090909090909090909070b09090909090909090909090909090c06090909090909090909090909090907060909090e0f09090909090909090907060909091011090909090909090909070609090909090909090909090909090c0b090909090909090909090909090907060909090909090909090909090909070609090909090e0f0909090909090907060909090909101109090909090909070b09090909090909090909090909090c06090909090909090909090909120907060909090909090909090909090909070609090909090909090909090909090703080d080808080d080808080d080804`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
