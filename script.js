let boardSize = document.querySelector(".input_board_size");
let board = document.querySelector(".board")
let announceError = document.querySelector(".errorText")

boardSize.addEventListener("input" , ()=>{
    let amount = parseInt(boardSize.value);
    board.innerHTML = "";

    if(amount > 100 || amount <= 0){
        announceError.style.display = "block";
        board.innerHTML = "";
    } else{
        announceError.style.display = "none";
        let box = '';
        for(let i=0; i<amount**2; i++){
            box += '<div class = "box"></div>'
        }
        board.innerHTML = box;
        let basis = 100/amount;
        let boxes = document.querySelectorAll(".box");
        boxes.forEach(box => {
            box.style.flexBasis = `${basis}%`;
        });
        boxes.forEach(box =>{
            box.addEventListener("mouseover" , ()=>{
                let r = Math.random() *256;
                let g = Math.random() *256;
                let b = Math.random() *256;
                box.style.backgroundColor = `rgb(${r},${g},${b})`;
            })
        })
    }
})

