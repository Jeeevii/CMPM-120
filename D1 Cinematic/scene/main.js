const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    backgroundColor: '#ECF0F1',
    scene: [Story1, Story2, Story3, Walk, Menu],
};

const game = new Phaser.Game(config);