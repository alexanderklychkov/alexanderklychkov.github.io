class Game {
    constructor() {
        this._field = 9; // Размер поля 3 на 3
        this._result = document.querySelector('.result');
        this._areaItems = [];
        this._steps = 0;
    }

    createGame() {
        this._result.textContent = '';
        this._areaItems = [];
        this._steps = 0;

        for (let i = 0; i < this._field; i++) {
            this._areaItems.push({
                id: i,
                label: ''   
            });
        }

        return this._createField(this._areaItems);
    }

    _createField(areaItems) {
        let area = document.querySelector('.area');
        area.innerHTML = '';

        for (let i = 0; i < areaItems.length; i++) {
            let areaItem = document.createElement('div');
            areaItem.classList.add('area-item');
            areaItem.setAttribute('id', areaItems[i].id);
            areaItem.textContent = areaItems[i].label;

            areaItem.addEventListener('click', (e) => this._stepPlayer(e, areaItems[i].id));
            area.appendChild(areaItem);
        }
    }

    _stepPlayer(e, id) {
        if (this._areaItems[id].label === '' && this._isWin()) {
            e.target.innerHTML = '&#10006;';
            this._areaItems[id].label = 'X';
            this._steps++;
            this._stepComputer();
            this._isWin();
        }
    }

    _stepComputer() {
        let items = document.querySelectorAll('.area-item');
        
        for (let i = 0; i < this._field; i++) {
            let step = this._randomInteger(0, 8);

            if (this._areaItems[step].label === '' && this._isWin()) {
                items[step].textContent = 'O';
                this._areaItems[step].label = items[step].textContent;
                this._steps++;
                break;
            }
        }
    }

    _isWin() {
        let areaItems = this._areaItems;
        let waysWin = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let i = 0; i < waysWin.length; i++) {
            if (areaItems[waysWin[i][0]].label === 'X' &&
                areaItems[waysWin[i][1]].label === 'X' &&
                areaItems[waysWin[i][2]].label === 'X') {
                    
                this._result.textContent = 'Вы победили!';
                this._result.style.color = '#1cde1c';
                return false;
            }

            if (areaItems[waysWin[i][0]].label === 'O' &&
                areaItems[waysWin[i][1]].label === 'O' &&
                areaItems[waysWin[i][2]].label === 'O') {

                this._result.textContent = 'Вы проиграли!';
                this._result.style.color = 'red';
                return false;
            }

            if (this._steps === this._field) {
                this._result.textContent = 'Ничья!';
                this._result.style.color = 'yellow';
            }
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