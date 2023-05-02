class MainDeck extends AdventureScene {
    constructor() {
        super("MainDeck", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "bucket")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

            // .on('pointerdown', () => {
            //     this.showMessage("No touching!");
            //     this.tweens.add({
            //         targets: clip,
            //         x: '+=' + this.s,
            //         repeat: 2,
            //         yoyo: true,
            //         ease: 'Sine.inOut',
            //         duration: 100
            //     });
            // });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "BELOW DECK ")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("sounds scary..Go below deck? ")
            })
            .on('pointerdown', () => {
                    this.gotoScene('BelowDeck');
                });


            // .on('pointerdown', () => {
            //     this.showMessage("You pick up the key.");
            //     this.gainItem('key');
            //     this.tweens.add({
            //         targets: key,
            //         y: `-=${2 * this.s}`,
            //         alpha: { from: 1, to: 0 },
            //         duration: 500,
            //         onComplete: () => key.destroy()
            //     });
            // })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "side view")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                // if (this.hasItem("key")) {
                //     this.showMessage("You've got the key for this door.");
                // } else {
                this.showMessage("The ocean looks nice today..Go to the side of the ship?");
                })

            .on('pointerdown', () => {
                    this.gotoScene('SideofShip');
                });

    }
}

class SideofShip extends AdventureScene {
    constructor() {
        super("SideofShip", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class BelowDeck extends AdventureScene {
    constructor() {
        super("BelowDeck", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            // .on('pointerover', () => {
            //     this.showMessage('*giggles*');
            //     this.tweens.add({
            //         targets: finish,
            //         x: this.s + (this.h - 2 * this.s) * Math.random(),
            //         y: this.s + (this.h - 2 * this.s) * Math.random(),
            //         ease: 'Sine.inOut',
            //         duration: 500
            //     });
            // })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}



class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('MainDeck'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, MainDeck, SideofShip, BelowDeck, Outro],
    title: "Adventure Game",
});

