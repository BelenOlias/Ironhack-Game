class Obstacles{
    constructor(ctx, canvasWidth, baseY, playerHeight) {
        this.ctx = ctx
        this.obsWidth = Math.floor(Math.random * (25 - 10) + 10)
        this.obsHeight = 15
        
        this.obsPosX = canvasWidth
        this.obsPosY = Math.floor(Math.random * ((playerHeight * 1.5) - baseY) + baseY)
   
        this.obsSpeed = speed
   
    }

    drawObs() {
       
        this.moveObs()
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(obsPosX, obsPosY, obsWidth, obsHeight)
        
    }

    moveObs() {
        this.obsPosX -= obsSpeed
    }
}