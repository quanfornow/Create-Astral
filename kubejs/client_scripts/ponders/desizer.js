onEvent("ponder.registry", event => {
    event.create("astraladditions:desizer_controller").scene("set_replace_modify_tutorial", "The Desizer", (scene, util) => {
        scene.showBasePlate();
        scene.world.setBlocks([1, 1, 4,], "astraladditions:desizer_9", true);
        scene.world.setBlocks([2, 1, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([3, 1, 4,], "astraladditions:desizer_7", true);
        scene.world.setBlocks([1, 2, 4,], "astraladditions:desizer_6", true);
        scene.world.setBlocks([2, 2, 4,], "astraladditions:desizer_controller", true);
        scene.world.setBlocks([3, 2, 4,], "astraladditions:desizer_4", true);
        scene.world.setBlocks([1, 3, 4,], "astraladditions:desizer_3", true);
        scene.world.setBlocks([2, 3, 4,], "astraladditions:desizer_2", true);
        scene.world.setBlocks([3, 3, 4,], "astraladditions:desizer_1", true);
        scene.idle(20);
        scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
        scene.idle(10);
        scene.text(30, "This is the Desizer", [1, 2.5, 4])
        scene.idle(80);
        scene.world.setBlocks([1, 1, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([2, 1, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([3, 1, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([1, 2, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([2, 2, 4,], "astraladditions:desizer_controller", true);
        scene.world.setBlocks([3, 2, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([1, 3, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([2, 3, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([3, 3, 4,], "astraladditions:desizer_8", true);
        scene.idle(10);
        scene.text(60, "The casings don't have to be accurate. This also works", [1, 2.5, 4])
        scene.idle(80);
				scene.world.setBlocks([1, 1, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 1, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 1, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([1, 2, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 2, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 2, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([1, 3, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 3, 3,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 3, 3,], "minecraft:dirt", true);
				scene.world.setBlocks([1, 1, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 1, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 1, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([1, 2, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 2, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 2, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([1, 3, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 3, 2,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 3, 2,], "minecraft:dirt", true);
				scene.world.setBlocks([1, 1, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 1, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 1, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([1, 2, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 2, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 2, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([1, 3, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([2, 3, 1,], "minecraft:dirt", true);
        scene.world.setBlocks([3, 3, 1,], "minecraft:dirt", true);
        scene.idle(10);
        scene.text(70, "The Desizer will shrink a 3x3x3 cube of blocks down into a single item", [1, 2.5, 2])
        scene.idle(90);
        scene.text(70, "It's powered by Redstone. Place a button on the back of the Desizer Controller", [1, 2.5, 4])
				scene.world.setBlocks([1, 1, 3,], "minecraft:air", true);
        scene.world.setBlocks([2, 1, 3,], "minecraft:air", true);
        scene.world.setBlocks([3, 1, 3,], "minecraft:air", true);
        scene.world.setBlocks([1, 2, 3,], "minecraft:air", true);
        scene.world.setBlocks([2, 2, 3,], "minecraft:air", true);
        scene.world.setBlocks([3, 2, 3,], "minecraft:air", true);
        scene.world.setBlocks([1, 3, 3,], "minecraft:air", true);
        scene.world.setBlocks([2, 3, 3,], "minecraft:air", true);
        scene.world.setBlocks([3, 3, 3,], "minecraft:air", true);
				scene.world.setBlocks([1, 1, 2,], "minecraft:air", true);
        scene.world.setBlocks([2, 1, 2,], "minecraft:air", true);
        scene.world.setBlocks([3, 1, 2,], "minecraft:air", true);
        scene.world.setBlocks([1, 2, 2,], "minecraft:air", true);
        scene.world.setBlocks([2, 2, 2,], "minecraft:air", true);
        scene.world.setBlocks([3, 2, 2,], "minecraft:air", true);
        scene.world.setBlocks([1, 3, 2,], "minecraft:air", true);
        scene.world.setBlocks([2, 3, 2,], "minecraft:air", true);
        scene.world.setBlocks([3, 3, 2,], "minecraft:air", true);
				scene.world.setBlocks([1, 1, 1,], "minecraft:air", true);
        scene.world.setBlocks([2, 1, 1,], "minecraft:air", true);
        scene.world.setBlocks([3, 1, 1,], "minecraft:air", true);
        scene.world.setBlocks([1, 2, 1,], "minecraft:air", true);
        scene.world.setBlocks([2, 2, 1,], "minecraft:air", true);
        scene.world.setBlocks([3, 2, 1,], "minecraft:air", true);
        scene.world.setBlocks([1, 3, 1,], "minecraft:air", true);
        scene.world.setBlocks([2, 3, 1,], "minecraft:air", true);
        scene.world.setBlocks([3, 3, 1,], "minecraft:air", true);
        scene.idle(90);
        scene.text(60, "If it doesn't detect a valid recipe, it will just break the blocks", [1, 2.5, 4])
        scene.idle(70);
    });
});