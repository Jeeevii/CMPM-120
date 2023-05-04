class Walk extends Phaser.Scene{
    constructor(){
        super({key: "Walk"});
    }

    preload() {
        this.load.image('player-walk', './assets/img/myBoy2=Transparent.png');
    }
    
    create() {
        this.cameras.main.fadeIn(800, 255, 255, 255);

        let player = this.add.image(900, 300, 'player-walk').setInteractive();
        this.isWaving = false;

        this.tweens.add({
            targets: player,
            x: 350,
            duration: 5000,
            ease: 'Power1',
            onComplete: () => {
                this.isfinished();
            }
        });
    }

    isfinished(){
        this.isWaving = true;
    }

    update(){
        let player = this.children.list.find(child => child.texture.key === 'player-walk');
        if (player.scene.isWaving){
            this.scene.start("Menu");
        }
    }
}

class Menu extends Phaser.Scene{
    constructor(){
        super({key: "Menu"});
    }

    preload() {
        this.load.image('player-wave', './assets/img/myBoy=Transparent.png');
        this.load.image('knight', './assets/img/KnightIcon=Transparent.png');
        this.load.image('fullscreen', './assets/img/fullscreen.png');
        this.load.audio('fanfare', ['./assets/img/medieval-fanfare-6826.mp3']);
        this.load.image('play-icon', './assets/img/LostHope-Play.png');
        this.load.image('exit-icon', './assets/img/LostHop-Exit.png');
        this.load.image('settings-icon', './assets/img/LostHope-Settings.png');
    }
    
    create() {
        //this.cameras.main.fadeIn(800, 255, 255, 255);
        this.add.image(350, 300, "player-wave");
        this.add.image(800, 225, "knight").setScale(.25);
        this.add.image(800, 350, 'play-icon').setScale(.5).setInteractive();
        this.add.image(800, 450, 'exit-icon').setScale(.5).setInteractive();
        this.add.image(800, 550, 'settings-icon').setScale(.5).setInteractive();
    }
}
