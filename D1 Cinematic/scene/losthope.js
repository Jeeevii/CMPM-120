//Text Box System was referenced from Friend 
//Full Screen Referenced from Phaser Fullscreen Example
//All images but fullscreen icon drawn by me

class Start extends Phaser.Scene{
    constructor(){
        super({key: "Start"});
    }
    preload() {
        this.load.audio('sound', ['./assets/img/Horror Sound Effect For Editing.mp3']);
    }
    create(){
        this.Start = false;
        this.add.text(450, 300, "click to play").setOrigin(.5);

    }
    update(){
        if (this.input.activePointer.leftButtonDown()){
            this.scene.start("Story1");
        }
    }

}
class Story1 extends Phaser.Scene{
    constructor(){
        super({key: "Story1"});
    }
    preload() {
        this.load.audio('sound', ['./assets/img/Horror Sound Effect For Editing.mp3']);
    }
    create(){
        this.cameras.main.fadeIn(800, 255, 255, 255);

        let textX = 450;
        let textY = 150;
        this.isFinished = false;
        this.Start = false;

        const sound = this.sound.add('sound');
        sound.play();
        this.add.text(450, 500, "click to continue").setOrigin(.5);
        let storyText = this.add.text(textX, textY, "",{
            fontSize: "48px",
            fill: "#ECF0F1",
        }).setOrigin(0.5);

        let index = 0;
        this.time.addEvent({
            delay: 70, 
            repeat: "Long Ago...".length - 1,
            callback: () => {
                storyText.text += "Long Ago..."[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 70 * ("Long Ago...".length - 1),
            callback: ()=>{
                this.next();
            },
            callbackScope: this,
        });
        
    }
    next(){
        this.isFinished = true;
    }
    update(){
        if (this.input.activePointer.leftButtonDown() && this.isFinished == true){
            this.scene.start("Story2");
        }
    }

}

class Story2 extends Phaser.Scene{
    constructor(){
        super({key: "Story2"});
    }
    preload() {
        this.load.audio('sound', ['./assets/img/Horror Sound Effect For Editing.mp3']);
    }
    create(){
        let textX = 900 / 2;
        let textY = 600 / 2;;
        this.isFinished = false;
        //this.Start = false;

        const sound = this.sound.add('sound');
        sound.play();
        this.add.text(450, 500, "click to continue").setOrigin(.5);
        let storyText = this.add.text(textX, textY, "",{
            fontSize: "48px",
            fill: "#ECF0F1",
        }).setOrigin(0.5);

        let index = 0;
        this.time.addEvent({
            delay: 60, 
            repeat: "Two kingdoms lived in\n       peace...".length - 1,
            callback: () => {
                storyText.text += "Two kingdoms lived in\n       peace..."[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 60 * ("Two kingdoms lived in\n       peace...".length - 1),
            callback: ()=>{
                this.next();
            },
            callbackScope: this,
        });
    }
    next(){
        this.isFinished = true;
    }
    update(){
        
        if (this.input.activePointer.leftButtonDown() && this.isFinished == true){
            this.scene.start("Story3");
        }
    }

}

class Story3 extends Phaser.Scene{
    constructor(){
        super({key: "Story3"});
    }
    preload() {
        this.load.audio('sound', ['./assets/img/Horror Sound Effect For Editing.mp3']);
    }
    create(){
        let textX = 900 / 2;
        let textY = 600 / 2;;
        this.isFinished = false;
        //this.Start = false;

        const sound = this.sound.add('sound');
        sound.play();
        this.add.text(450, 500, "click to continue").setOrigin(.5);
        let storyText = this.add.text(textX, textY, "",{
            fontSize: "48px",
            fill: "#ECF0F1",
        }).setOrigin(0.5);

        let index = 0;
        this.time.addEvent({
            delay: 70, 
            repeat: "Until one day...".length - 1,
            callback: () => {
                storyText.text += "Until one day..."[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 70 * ("Until one day...".length - 1),
            callback: ()=>{
                this.next();
            },
            callbackScope: this,
        });
    }
    next(){
        this.isFinished = true;
    }
    update(){
        
        if (this.input.activePointer.leftButtonDown() && this.isFinished == true){
            this.scene.start("Story4");
        }
    }

}

class Story4 extends Phaser.Scene{
    constructor(){
        super({key: "Story4"});
    }
    preload() {
        this.load.audio('sound', ['./assets/img/Horror Sound Effect For Editing.mp3']);
    }
    create(){
        let textX = 900 / 2;
        let textY = 600 / 2;;
        this.isFinished = false;
        //this.Start = false;

        const sound = this.sound.add('sound');
        sound.play();
        this.add.text(450, 500, "click to continue").setOrigin(.5);
        let storyText = this.add.text(textX, textY, "",{
            fontSize: "48px",
            fill: "#ECF0F1",
        }).setOrigin(0.5);

        let index = 0;
        this.time.addEvent({
            delay: 70, 
            repeat: "The monsters attacked!!!".length - 1,
            callback: () => {
                storyText.text += "The monsters attacked!!!"[index];
                index++;
            },
            callbackScope: this,
        });

        this.time.addEvent({
            delay: 70 * ("The monsters attacked!!!".length - 1),
            callback: ()=>{
                this.next();
            },
            callbackScope: this,
        });
    }
    next(){
        this.isFinished = true;
    }
    update(){
        
        if (this.input.activePointer.leftButtonDown() && this.isFinished == true){
            this.scene.start("Menu");
        }
    }

}

class Menu extends Phaser.Scene {
    constructor(){
        super({key: "Menu"});
    }

    preload() {
        this.load.image('player-walk', './assets/img/myBoy2=Transparent.png');
        this.load.image('player-wave', './assets/img/myBoy=Transparent.png');
        this.load.image('knight', './assets/img/KnightIcon=Transparent.png');
        this.load.image('fullscreen', './assets/img/fullscreen.png');
        this.load.audio('fanfare', ['./assets/img/medieval-fanfare-6826.mp3']);
        this.load.image('play-icon', './assets/img/LostHope-Play.png');
        this.load.image('exit-icon', './assets/img/LostHop-Exit.png');
        this.load.image('settings-icon', './assets/img/LostHope-Settings.png');
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#ECF0F1');
        this.cameras.main.fadeIn(800, 255, 255, 255);
        let player = this.add.image(900, 300, 'player-walk').setInteractive();
        this.isWaving = false;

        this.tweens.add({
            targets: player,
            x: 350,
            duration: 4000,
            onComplete: () => {
                player.setTexture('player-wave');
                this.isWaving = true;
                const music = this.sound.add('fanfare');
                music.play();
            }
        });

        let button = this.add.image(50, 50, 'fullscreen').setScale(.15).setInteractive();
        button.on('pointerup', function (){
            if (this.scale.isFullscreen){
                button.setFrame(0);
                this.scale.stopFullscreen();
            }
            else{
                button.setFrame(1);
                this.scale.startFullscreen();
            }
        }, this);
    }

    update(){
        if (this.isWaving){
            this.add.image(800, 200, "knight").setScale(.45);
            const play = this.add.image(800, 350, 'play-icon').setScale(.5).setInteractive();
            const exit = this.add.image(800, 450, 'exit-icon').setScale(.5).setInteractive();
            const settings = this.add.image(800, 550, 'settings-icon').setScale(.5).setInteractive();

            play.on('pointerup', function () {
                this.scene.start("Menu");
            }, this);

            exit.on('pointerup', function () {
                // Quit the game
                this.game.destroy(true);
            }, this);
        }
    }
}
