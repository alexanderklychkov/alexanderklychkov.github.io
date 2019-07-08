class Game {
    constructor() {
        this._field = 15 // Размер поля 15 на 15
        this._result = document.querySelector('.result');
        this._areaItems = [];
        this._steps = 0;
        
        // Для логики компьютера
        this._randStepComp = false;
        this._itemComp = {};
        this._nextStepTop = false;
        this._nextStepRight = false;
        this._nextStepBottom = false;
    }

    createGame() {
        
        // Очищаем игру
        this._result.textContent = '';
        this._areaItems = [];
        this._steps = 0;

        // Очищаем логику для компьютера
        this._firstStepComp = false;
        this._randStepComp = false;
        this._nextStepTop = false;
        this._nextStepRight = false;
        this._nextStepBottom = false;

        for (let i = 0; i <  this._field; i++) {
            this._areaItems[i] = [];

            for (let j = 0; j <  this._field; j++) {
                this._areaItems[i].push({
                    y: i,
                    x: j,
                    label: ''
                });
            }
        }

       return this._createField(this._areaItems);
    }

    _createField(areaItems) {
        let area = document.querySelector('.area');
        area.innerHTML = '';

        for (let i = 0; i < areaItems.length; i++) {
            for (let j = 0; j < areaItems[i].length; j++) {
                let areaItem = document.createElement('div');
                areaItem.classList.add('area-item');
                areaItem.setAttribute('id', 'item-' + i + '-' + j);
                areaItem.textContent = areaItems[i][j].label;

                areaItem.addEventListener('click', (e) => this._stepPlayer(e, i, j));
                area.appendChild(areaItem);
            }
        }
    }

    _stepPlayer(e, y, x) {
        if (this._areaItems[y][x].label === '' && this._isWin()) {
            e.target.innerHTML = '<span class="item-black"></span>';
            this._areaItems[y][x].label = 'X';
            this._steps++;
            this._stepComputer();
            this._isWin();
        }
    }

    _stepComputer() {
        let area = this._field * this._field;
        let areaItems = this._areaItems;

        for (let i = 0; i <  this._field; i++) {
            for (let j = 0; j <  this._field; j++) {

                // Блокировка по рядам
                if (j - 3 >= 0 &&
                    areaItems[i][j].label === 'X' &&
                    areaItems[i][j - 1].label === 'X' &&
                    areaItems[i][j - 2].label === 'X' &&
                    (areaItems[i][j - 3].label === '' || areaItems[i][j - 3].label === 'O')) {
                
                    try {
                        if ((areaItems[i][j - 3].label === 'O' || areaItems[i][j - 3].label === 'X') &&
                            (areaItems[i][j + 2].label === 'O' || areaItems[i][j + 2].label === 'X')) {
                            break;
                        } else { 
                            if (areaItems[i][j - 3].label !== '') {
                                let item = document.getElementById(`item-${i}-${j + 2}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i][j + 2].label = 'O';
                                this._steps++;
                                return;
                            } else {
                                let item = document.getElementById(`item-${i}-${j - 3}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i][j - 3].label = 'O';
                                this._steps++;
                                return;
                            }
                        }
                    } catch {
                        break;
                    }       
                }

                // Блокировка по колонкам
                if (i - 3 >= 0 &&
                    areaItems[i][j].label === 'X' &&
                    areaItems[i - 1][j].label === 'X' &&
                    areaItems[i - 2][j].label === 'X' &&
                    (areaItems[i - 3][j].label === '' || areaItems[i - 3][j].label === 'O')) {
                
                    try {
                        if ((areaItems[i - 3][j].label === 'O' || areaItems[i - 3][j].label === 'X') &&
                            (areaItems[i + 2][j].label === 'O' || areaItems[i + 2][j].label === 'X')) {
                            break;
                        } else { 
                            if (areaItems[i - 3][j].label !== '') {
                                let item = document.getElementById(`item-${i + 2}-${j}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i + 2][j].label = 'O';
                                this._steps++;
                                return;
                            } else {
                                let item = document.getElementById(`item-${i - 3}-${j}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i - 3][j].label = 'O';
                                this._steps++;
                                return;
                            }
                        }
                    } catch {
                        break;
                    }       
                }

                // Блокировка по диоганали(левый верх - правый низ)
                if (i - 3 >= 0 &&
                    j - 3 >= 0 &&
                    areaItems[i][j].label === 'X' &&
                    areaItems[i - 1][j - 1].label === 'X' &&
                    areaItems[i - 2][j - 2].label === 'X' &&
                    (areaItems[i - 3][j - 3].label === '' || areaItems[i - 3][j - 3].label === 'O')) {
                
                    try {
                        if ((areaItems[i - 3][j - 3].label === 'O' || areaItems[i - 3][j - 3].label === 'X') &&
                            (areaItems[i + 2][j + 2].label === 'O' || areaItems[i + 2][j + 2].label === 'X')) {
                            break;
                        } else { 
                            if (areaItems[i - 3][j - 3].label !== '') {
                                let item = document.getElementById(`item-${i + 2}-${j + 2}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i + 2][j + 2].label = 'O';
                                this._steps++;
                                return;
                            } else {
                                let item = document.getElementById(`item-${i - 3}-${j - 3}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i - 3][j - 3].label = 'O';
                                this._steps++;
                                return;
                            }
                        }
                    } catch {
                        break;
                    }       
                }

                // Блокировка по диоганали(правый верх - левый низ)
                if (i - 3 >= 0 &&
                    j + 3 <= this._field &&
                    areaItems[i][j].label === 'X' &&
                    areaItems[i - 1][j + 1].label === 'X' &&
                    areaItems[i - 2][j + 2].label === 'X' &&
                    (areaItems[i - 3][j + 3].label === '' || areaItems[i - 3][j + 3].label === 'O')) {
                
                    try {
                        if ((areaItems[i - 3][j + 3].label === 'O' || areaItems[i - 3][j + 3].label === 'X') &&
                            (areaItems[i + 2][j - 2].label === 'O' || areaItems[i + 2][j - 2].label === 'X')) {
                            break;
                        } else { 
                            if (areaItems[i - 3][j + 3].label !== '') {
                                let item = document.getElementById(`item-${i + 2}-${j - 2}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i + 2][j - 2].label = 'O';
                                this._steps++;
                                return;
                            } else {
                                let item = document.getElementById(`item-${i - 3}-${j + 3}`);
                                item.innerHTML = '<span class="item-white"></span>';
                                areaItems[i - 3][j + 3].label = 'O';
                                this._steps++;
                                return;
                            }
                        }
                    } catch {
                        break;
                    }       
                }
            }
        }

        for (let i = 0; i < area; i++) {

            if (!this._randStepComp) {
                for (let i = 0; i < area; i++) {
    
                    let stepY = this._randomInteger(0, 14);
                    let stepX = this._randomInteger(0, 14);
    
                    if (areaItems[stepY][stepX].label === '' && this._isWin()) {
                        let item = document.getElementById(`item-${stepY}-${stepX}`);
                        item.innerHTML = '<span class="item-white"></span>';
                        areaItems[stepY][stepX].label = 'O';
                        this._steps++;
        
                        this._itemComp = areaItems[stepY][stepX];
                        
                        this._randStepComp = true;
                        this._steps++;
                        return;
                    }
                }
            }

            let itemObj = areaItems[this._itemComp.y][this._itemComp.x];

            // Движение влево
            if (itemObj.x - 1 >= 0 &&
                !this._nextStepTop && 
                areaItems[itemObj.y][itemObj.x - 1].label === '') {
                
                let itemSelected = document.getElementById(`item-${this._itemComp.y}-${this._itemComp.x - 1}`);
                itemSelected.innerHTML = '<span class="item-white"></span>';
                areaItems[itemObj.y][itemObj.x - 1].label = 'O';
                this._steps++;
    
                this._itemComp = areaItems[itemObj.y][itemObj.x - 1];
                return;
            } else {
                this._nextStepTop = true;
            } 
            
            // Движение вверх
            if (itemObj.y - 1 >= 0 &&
                !this._nextStepRight &&
                areaItems[itemObj.y - 1][itemObj.x].label === '') {
                let itemSelected = document.getElementById(`item-${this._itemComp.y - 1}-${this._itemComp.x}`);
                itemSelected.innerHTML = '<span class="item-white"></span>';
                areaItems[itemObj.y - 1][itemObj.x].label = 'O';
                this._steps++;
    
                this._itemComp = areaItems[itemObj.y - 1][itemObj.x];
                console.log(itemSelected);
                return;
            } else {
                this._nextStepRight = true;
            }

            // Движение вправо
            if (itemObj.x + 1 <= this._field &&
                !this._nextStepBottom &&
                areaItems[itemObj.y][itemObj.x + 1].label === '') {
                
                let itemSelected = document.getElementById(`item-${this._itemComp.y}-${this._itemComp.x + 1}`);
                itemSelected.innerHTML = '<span class="item-white"></span>';
                areaItems[itemObj.y][itemObj.x + 1].label = 'O';
                this._steps++;
    
                this._itemComp = areaItems[itemObj.y][itemObj.x + 1];
                console.log(itemSelected);
                return;
            } else {
                this._nextStepBottom = true;
            }

            // Движение вниз
            if (itemObj.y + 1 <= this._field &&
                areaItems[itemObj.y + 1][itemObj.x].label === '') {
                
                let itemSelected = document.getElementById(`item-${this._itemComp.y + 1}-${this._itemComp.x}`);
                itemSelected.innerHTML = '<span class="item-white"></span>';
                areaItems[itemObj.y + 1][itemObj.x].label = 'O';
                this._steps++;
    
                this._itemComp = areaItems[itemObj.y + 1][itemObj.x];
                console.log(itemSelected);
                return;
            } else {
                this._randStepComp = false;
                this._nextStepTop = false;
                this._nextStepRight = false;
                this._nextStepBottom = false;
            }
        }
    }

    _isWin() {
        let area =  this._field *  this._field;
        let areaItems = this._areaItems;

        // Победа в ряд
        for (let i = 0; i <  this._field; i++) {
            for (let j = 4; j <  this._field; j++) {
                if (areaItems[i][j].label === 'X' &&
                    areaItems[i][j - 1].label === 'X' &&
                    areaItems[i][j - 2].label === 'X' &&
                    areaItems[i][j - 3].label === 'X' &&
                    areaItems[i][j - 4].label === 'X') {
                        this._result.textContent = 'Вы победили!';
                        this._result.style.color = '#1cde1c';
                        return false;
                }

                if (areaItems[i][j].label === 'O' &&
                    areaItems[i][j - 1].label === 'O' &&
                    areaItems[i][j - 2].label === 'O' &&
                    areaItems[i][j - 3].label === 'O' &&
                    areaItems[i][j - 4].label === 'O') {
                        this._result.textContent = 'Вы проиграли!';
                        this._result.style.color = 'red';
                        return false;
                }
            }
        }

        // Победа в колонку
        for (let i = 4; i <  this._field; i++) {
            for (let j = 0; j <  this._field; j++) {
                if (areaItems[i][j].label === 'X' &&
                    areaItems[i - 1][j].label === 'X' &&
                    areaItems[i - 2][j].label === 'X' &&
                    areaItems[i - 3][j].label === 'X' &&
                    areaItems[i - 4][j].label === 'X') {
                    
                    this._result.textContent = 'Вы победили!';
                    this._result.style.color = '#1cde1c';
                    return false;
                }

                if (areaItems[i][j].label === 'O' &&
                    areaItems[i - 1][j].label === 'O' &&
                    areaItems[i - 2][j].label === 'O' &&
                    areaItems[i - 3][j].label === 'O' &&
                    areaItems[i - 4][j].label === 'O') {
                
                    this._result.textContent = 'Вы проиграли!';
                    this._result.style.color = 'red';
                    return false;
                }
            }
        }

        // Победа по диоганали(левый верх - правый низ)
        for (let i = 4; i <  this._field; i++) {
            for (let j = 4; j <  this._field; j++) {
                if (areaItems[i][j].label === 'X' &&
                    areaItems[i - 1][j - 1].label === 'X' &&
                    areaItems[i - 2][j - 2].label === 'X' &&
                    areaItems[i - 3][j - 3].label === 'X' &&
                    areaItems[i - 4][j - 4].label === 'X') {
                    
                    this._result.textContent = 'Вы победили!';
                    this._result.style.color = '#1cde1c';
                    return false;
                }

                if (areaItems[i][j].label === 'O' &&
                    areaItems[i - 1][j - 1].label === 'O' &&
                    areaItems[i - 2][j - 2].label === 'O' &&
                    areaItems[i - 3][j - 3].label === 'O' &&
                    areaItems[i - 4][j - 4].label === 'O') {
                    
                    this._result.textContent = 'Вы проиграли!';
                    this._result.style.color = 'red';
                    return false;
                }

                
            }
        }

        // Победа по диоганали(правый верх - левый низ)
        for (let i = 0; i <  this._field; i++) {
            for (let j = 4; j <  this._field; j++) {
                try {
                    if (i + 1 >= 0 &&
                        areaItems[i][j].label === 'X' &&
                        areaItems[i + 1][j - 1].label === 'X' &&
                        areaItems[i + 2][j - 2].label === 'X' &&
                        areaItems[i + 3][j - 3].label === 'X' &&
                        areaItems[i + 4][j - 4].label === 'X') {
                        
                        this._result.textContent = 'Вы победили!';
                        this._result.style.color = '#1cde1c';
                        return false;
                    }

                    if (areaItems[i][j].label === 'O' &&
                        areaItems[i + 1][j - 1].label === 'O' &&
                        areaItems[i + 2][j - 2].label === 'O' &&
                        areaItems[i + 3][j - 3].label === 'O' &&
                        areaItems[i + 4][j - 4].label === 'O') {
                        
                        this._result.textContent = 'Вы проиграли!';
                        this._result.style.color = 'red';
                        return false;
                    } 
                } catch {
                    continue; // Выскакивает ошибка, но ничего не ломает
                }             
            }
        }

        if (this._steps === area) {
            this._result.textContent = 'Ничья!';
            this._result.style.color = 'yellow';
        }

        return true;
    }

    _randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }
}

let newGameBtn = document.querySelector('button');

const game = new Game();
game.createGame();

newGameBtn.addEventListener('click', () => game.createGame());