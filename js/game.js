
const mainGame = {

    name: 'Space Ironhacker',
    author: 'Belén Olias Ericsson y Guillermo Conde magaña',
    version: '1.0.0 por decir algo',
    license: undefined,
    description: 'The best game u gonna play in ya life ',
    
    canvasId: undefined,
    ctx: undefined,
    mainChar: undefined,
    enemies: [],
    obstacles: [],
    frames: 0,
    FPS: 60,
    lives: undefined,
    background: undefined,
    canvasSize: {
        w: 1200,
        h: 900
    },

    gameSpeed: 1,
    baseY: undefined,
   
    keys: {
        top: 38,
        right: 39,
        left: 37,
        space: 32
    },


    init(){
        this.canvasId = document.getElementById('myCanvas')
        this.ctx = this.canvasId.getContext('2d')
        this.setEvent()
        // this.welcome()
        
    },

    // setDimensions() {
    //     document.getElementById(this.canvasId).setAttribute('width', 1200)
    //     document.getElementById(this.canvasId).setAttribute('height', 900)
    //     this.canvasSize.w = 1200
    //     this.canvasSize.h = 900
    //     console.log("A")
    // },
    
    welcome() {
        
        const welcomeImg = document.getElementById('welcome-bg')
        this.ctx.drawImage(welcomeImg, 0, 0, this.canvasSize.w, this.canvasSize.h)
        
        const logo = document.getElementById('logo')
        this.ctx.drawImage(logo, 145, 140, 900, 100)

        const startButton = document.getElementById('start-button')
        this.ctx.drawImage(startButton, 500, 700, 240, 80)

        const control = document.getElementById('control')
        this.ctx.drawImage(control, 330, 290, 570, 320)

    }, 

    setEvent() {
        window.onload = () => {
            document.getElementById('start-button').onclick = () => {
                this.startGame()
                console.log("A")
            }
        }

        //document.onkeydown... 

        document.getElementById('play-again').onclick = () => {
            this.startGame()
        }
    },
    
    startGame() {

        console.log("b")

        this.reset()

        this.interval = setInterval(() => {

            this.clearScreen()
            
            this.drawAll()

            // this.generateEnemies()

            // this.clearEnemies()

            this.generateObstacles()

            this.clearObstacles()

            this.frames > 5000 ? this.frames = 0 : this.frames++ 

            // this.collision() ? this.lives-- : null

            // this.lives = 0 ? this.gameOver : null
       
        }, 1000 / this.FPS)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize.w, this.canvasSize.h, "/Ironhack-Game/images/bg.png")
        // this.player = new Player(this.ctx, this.width, this.height, this.keys)
        this.obstacles = []
        // this.enemies = []
        this.lives = 3
    },

    drawLives() {
        this.ctx.font = 'sans-serif 20px'
        this.ctx.fillText('Lives: ' + this.lives, 0, 0)
    },

    drawAll() {
        this.background.draw()
        this.drawLives()
        this.obstacles.forEach(elm => elm.drawObs())
        console.log("gen")
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacles() {
        
        console.log("push")
        frames % 60 === 0 ? this.obstacles.push(new Obstacles(this.ctx, this.canvasSize.w, this.baseY, this.playerHeight)) : null
    },

    clearObstacles() {
        
        this.obstacles = this.obstacles.filter(elm => elm.obsPosX >= 0)
    },

    generateEnemies() {

    },

    clearEnemies() {

        this.enemies = this.enemies.filter(elm => elm.enemyPosX >= 0)
        //añadir: filtrar a los que han colisionado con una bullet
    },

    collision() {


    },

    gameOver() {
        
        clearInterval(this.interval)
        
        const welcomeImg = document.getElementById('welcome-bg')
        this.ctx.drawImage(welcomeImg, 0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillRect(50, 50, this.canvasSize.w - 50, this.canvasSize.h - 50)
        this.ctx.font = 'sans-serif 50px'
        this.ctx.fillText('¡Has perdido merluzo!', 150, 250, 200)

        const logo = document.getElementById('logo')
        this.ctx.drawImage(logo, 145, 140, 900, 100)

        const playAgain = document.getElementById('play-again')
        this.ctx.drawImage(playAgain, 400, 700, 340, 80)
       
    },

    wonGame() {
       
        clearInterval(this.interval)
         
        const welcomeImg = document.getElementById('welcome-bg')
         this.ctx.drawImage(welcomeImg, 0, 0, this.canvasSize.w, this.canvasSize.h)

         this.ctx.fillRect(50, 50, this.canvasSize.w - 50, this.canvasSize.h - 50)
         this.ctx.font = 'sans-serif 50px'
         this.ctx.fillText('¡Has ganado!', 150, 250, 200)

         const logo = document.getElementById('logo')
         this.ctx.drawImage(logo, 145, 140, 900, 100)

         const playAgain = document.getElementById('play-again')
         this.ctx.drawImage(playAgain, 400, 700, 340, 80)
        
    }
}
