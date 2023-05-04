const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    //backgroundColor: '#ECF0F1',
    scene: [Start, Story1, Story2, Story3, Story4, Menu],
};

const game = new Phaser.Game(config);